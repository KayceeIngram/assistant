import React from 'react'
import * as Layout from '../../layout'
import * as icons from '../../icon'

export default () => {
	return (
		<Layout.ContentBoundary>
			<h1>Icons</h1>
			<p>These are icons include in the fluid package.</p>

			<div
				style={ {
					display: 'grid',
					gridTemplateColumns: 'repeat( auto-fit, minmax( 80px, 100px ) )',
					gridAutoRows: 100,
					gridGap: 5
				} }
			>
				{ Object.keys( icons ).map( ( name, i ) => {
					const Icon = icons[name]
					return (
						<div key={ i } style={ { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' } }>
							<Icon />
							<div style={ { marginTop: 'auto' } }>{name}</div>
						</div>
					)
				} )}
			</div>
		</Layout.ContentBoundary>
	)
}