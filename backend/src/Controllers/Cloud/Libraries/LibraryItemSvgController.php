<?php

namespace FL\Assistant\Controllers\Cloud\Libraries;

use FL\Assistant\System\Contracts\ControllerAbstract;
use FL\Assistant\Services\MediaLibraryService;

class LibraryItemSvgController extends ControllerAbstract {

	public function register_routes() {
		$this->route(
			'/library-items/import/svg', [
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ $this, 'import' ],
					'permission_callback' => function () {
						return current_user_can( 'edit_others_posts' );
					},
				],
			]
		);
	}

	/**
	 * Import an svg library item into the site.
	 */
	public function import( $request ) {
		$item = $request->get_param( 'item' );

		if ( ! is_array( $item ) || ! isset( $item['data']['xml'] ) ) {
			return rest_ensure_response( [ 'error' => __( 'Missing item data.' ) ] );
		}

		$service = new MediaLibraryService();
		$response = $service->import_svg_from_string( $item['data']['xml'], $item['name'] );

		return rest_ensure_response( $response );
	}
}
