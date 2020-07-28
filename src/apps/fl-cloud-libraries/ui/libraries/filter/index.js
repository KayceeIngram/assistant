import React, { useEffect, useState } from 'react'
import { __ } from '@wordpress/i18n'
import { Filter } from 'assistant/ui'
import { getAppHooks } from 'assistant/data'
import cloud from 'assistant/cloud'
import { loadLibraries } from '../../../data'

export default () => {
	const { useDefaultFilter, useFilter, useTeams } = getAppHooks( 'fl-cloud-libraries' )
	const [ defaultFilter ] = useDefaultFilter()
	const [ filter, setFilter ] = useFilter()
	const [ teams ] = useTeams()
	const cloudUser = cloud.session.getUser()

	const getOwnerOptions = () => {
		const options = {
			all: __( 'All' ),
			user: cloudUser.name,
		}
		teams.map( team => options[ `team_${ team.id }` ] = team.name )
		return options
	}

	const updateFilter = ( data ) => {
		setFilter( data )
		loadLibraries()
	}

	return (
		<Filter>
			<Filter.RadioGroupItem
				title={ __( 'Owner' ) }
				items={ getOwnerOptions() }
				value={ filter.owner }
				defaultValue={ defaultFilter.owner }
				onChange={ value => updateFilter( { ...filter, owner: value } ) }
			/>
			<Filter.RadioGroupItem
				title={ __( 'Sort By' ) }
				items={ {
					name: __( 'Title' ),
					created_at: __( 'Date Created' ),
					updated_at: __( 'Last Updated' ),
				} }
				value={ filter.order_by }
				defaultValue={ defaultFilter.order_by }
				onChange={ value => updateFilter( { ...filter, order_by: value } ) }
			/>
			<Filter.RadioGroupItem
				title={ __( 'Order' ) }
				items={ {
					ASC: __( 'Ascending' ),
					DESC: __( 'Descending' ),
				} }
				value={ filter.order }
				defaultValue={ defaultFilter.order }
				onChange={ value => updateFilter( { ...filter, order: value } ) }
			/>
			<Filter.Button onClick={ () => updateFilter( defaultFilter ) }>{__( 'Reset Filter' )}</Filter.Button>
		</Filter>
	)
}
