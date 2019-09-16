<?php


namespace FL\Assistant\Data\Repository;


use FL\Assistant\Data\Pager;
use FL\Assistant\System\Contracts\RepositoryAbstract;

/**
 * Class TermsRepository
 * @package FL\Assistant\Data\Repository
 */
class TermsRepository extends RepositoryAbstract {

	/**
	 * @param $id
	 *
	 * @return array|\WP_Error|\WP_Term|null
	 */
	public function find( $id, callable $transform = null ) {
		$term = get_term( $id );
		if ( ! is_null( $transform ) ) {
			$term = call_user_func( $transform, $term );
		}

		return $term;
	}

	/**
	 * @param array $args
	 * @param callable|null $transform
	 *
	 * @return array
	 */
	public function findWhere( array $args = [], callable $transform = null ) {
		$terms =  $this->query( $args )->get_terms();
		if ( ! is_null( $transform ) ) {
			$terms = array_map( $transform, $terms );
		}
		return $terms;
	}

	/**
	 * @param array $args
	 *
	 * @return Pager
	 */
	public function paginate( array $args = [], callable $transform = null ) {
		$query       = $this->query( $args );
		$total_terms = $this->terms_query_count( $query );

		$pager = new Pager(
			$query->get_terms(),
			$total_terms,
			$query->query_vars['number'],
			$query->query_vars['offset']
		);

		if ( ! is_null( $transform ) ) {
			$pager->apply_transform($transform);
		}

		return $pager;
	}

	/**
	 * @param array $args
	 *
	 * @return \WP_Term_Query
	 */
	public function query( array $args = [] ) {
		return new \WP_Term_Query( $args );
	}

	/**
	 * @param \WP_Term_Query $query
	 *
	 * @return array|int|\WP_Error
	 */
	protected function terms_query_count( \WP_Term_Query $query ) {
		$taxonomy = $query->query_vars['taxonomy'];
		$args     = $query->query_vars;

		return \wp_count_terms( $taxonomy, $args );
	}

}
