import React from 'react'
import { __ } from '@wordpress/i18n'
import { Page, Icon } from 'assistant/ui'
import { useAppState } from 'assistant/data'
import cloud from 'assistant/cloud'

import Actions from './actions'
import LibrariesFilter from './filter'
import LibrariesGrid from './grid'

export default () => {
	const { filter, libraries, teams, isLoadingLibraries } = useAppState( 'libraries' )
	const { owner, ...query } = filter
	const cloudUser = cloud.session.getUser()

	return (
		<Page
			title={ __( 'Libraries' ) }
			icon={ <Icon.Library context="sidebar" /> }
			shouldShowBackButton={ false }
			actions={ <Actions /> }
			padX={ false }
			padY={ false }
		>
			<LibrariesFilter />

			<div className='fl-asst-libraries'>
				{ ( 'all' === owner || 'user' === owner ) &&
					<LibrariesGrid
						headline={ cloudUser.name.endsWith( 's' ) ? `${ cloudUser.name }'` : `${ cloudUser.name }'s` }
						query={ query }
						isFetching={ isLoadingLibraries }
					/>
				}
				{ !! libraries.shared.length &&
					<LibrariesGrid
						headline={ __( 'Shared Libraries' ) }
						type='shared'
						query={ query }
						isFetching={ isLoadingLibraries }
					/>
				}
				{ teams.map( ( team, i ) => {
					if ( 'all' === owner || `team_${ team.id }` === owner ) {
						return (
							<LibrariesGrid
								key={ i }
								headline={ cloudUser.name.endsWith( 's' ) ? `${ team.name }'` : `${ team.name }'s` }
								type='team'
								team={ team }
								query={ query }
							/>
						)
					}
				} ) }
			</div>
		</Page>
	)
}
