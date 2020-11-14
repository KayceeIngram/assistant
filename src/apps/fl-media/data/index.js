import useMediaUploads from './use-media-uploads'

export const defaultState = {
	listStyle: 'grid',
	query: {
		post_mime_type: 'all',
		order: 'DESC',
		orderby: 'date',
		label: '0',
	}
}

export const effects = {
	after: {
		SET_LISTSTYLE: () => console.log( 'set list style' ),
		SET_QUERY: () => console.log( 'set query' )
	}
}

export { useMediaUploads }
