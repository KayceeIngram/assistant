import { createHttpClient } from './http'
import * as session from './session'
import endpoints from './api'

export const createCloudClient = ( {
	apiUrl = ''
} ) => {
	const http = createHttpClient( { apiUrl } )
	const client = {
		http,
		session
	}

	for ( let key in endpoints ) {
		client[ key ] = endpoints[ key ]( http )
	}

	return client
}
