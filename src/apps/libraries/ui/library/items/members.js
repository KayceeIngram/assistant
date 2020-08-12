import React from 'react'
import { Layout  } from 'assistant/ui'
import cloud from 'assistant/cloud'

export default ( { teamId } ) => {
	const [ team ] = cloud.teams.useOne( teamId )
	if ( ! team ) {
		return null
	}
	const members = [ ...team.users ].splice( 0, 5 )
	return (
		<Layout.Row style={ { padding: '0 0 var(--fluid-lg-space) 0' } }>
			{ members.map( ( member, i ) =>
				<img
					key={ i }
					src={ member.gravatar.sm }
					style={ {
						width: '25px',
						borderRadius: '100%',
						marginRight: '-5px'
					} }
				/>
			) }
		</Layout.Row>
	)
}