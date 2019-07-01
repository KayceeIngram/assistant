<?php

namespace FL\Assistant\Data;

class PostData {

	/**
	 * Get post status slugs and names.
	 * @return array
	 */
	public function get_stati() {
		$data  = [];
		$stati = get_post_stati( array(), 'objects' );

		foreach ( $stati as $slug => $status ) {
			$data[ $slug ] = esc_html( $status->label );
		}

		return $data;
	}

	/**
	 * Get array of post types registered in WordPress
	 * @return array
	 */
	public function get_types() {
		$data  = [];
		$types = get_post_types(
			array(
				'public' => true,
			), 'objects'
		);

		foreach ( $types as $slug => $type ) {
			if ( ! isset( $type->cap->edit_published_posts ) ) {
				continue;
			}
			if ( ! current_user_can( $type->cap->edit_published_posts ) ) {
				continue;
			}
			if ( 'attachment' === $slug ) {
				continue;
			}
			$data[ $slug ] = array(
				'canExport'      => $type->can_export,
				'hasArchive'     => $type->has_archive,
				'isHierarchical' => $type->hierarchical,
				'supports'       => array(
					'excerpt' => post_type_supports( $slug, 'excerpt' ),
				),
				'labels'         => array(
					'singular' => esc_html( $type->labels->singular_name ),
					'plural'   => esc_html( $type->labels->name ),
					'newItem'  => esc_html( $type->labels->new_item ),
					'editItem' => esc_html( $type->labels->edit_item ),
				),
			);
		}

		return $data;
	}

	/**
	 * Get taxonomy slugs and names.
	 */
	public function get_taxononies() {
		$data  = [];
		$types = static::get_types();

		foreach ( $types as $type_slug => $type ) {
			$taxonomies = get_object_taxonomies( $type_slug, 'objects' );
			foreach ( $taxonomies as $taxonomy_slug => $taxonomy ) {
				if ( ! $taxonomy->public || ! $taxonomy->show_ui || 'post_format' === $taxonomy_slug ) {
					continue;
				}
				$data[ $taxonomy_slug ] = array(
					'description'    => $taxonomy->description,
					'isHierarchical' => $taxonomy->hierarchical,
					'labels'         => array(
						'singular'   => esc_html( $taxonomy->labels->singular_name ),
						'plural'     => esc_html( $taxonomy->labels->name ),
						'newItem'    => sprintf( esc_html_x( 'New %s', 'Singular term name.', 'fl-assistant' ), $taxonomy->labels->singular_name ),
						'addNewItem' => esc_html( $taxonomy->labels->add_new_item ),
						'editItem'   => esc_html( $taxonomy->labels->edit_item ),
					),
				);
			}
		}

		return $data;
	}
}