import React, { Fragment, useState } from 'react'
import { ContentList, PostListItem } from 'components'
import { TagGroup, Tag, TagGroupControl, ScreenHeader, ExpandedContents } from 'components'

export const FindTab = props => {
    const defaultQuery = {
        post_type: 'page',
        numberposts: -1,
        orderby: 'title',
        order: 'ASC',
        /*s: '',*/
    }
    const [type, setType] = useState('posts')
    const [query, setQuery] = useState(defaultQuery)

    const typeTags = [
        {
            label : 'Posts',
            value: {
                type: 'posts',
                args: {
                    'post_type': 'post'
                }
            }
        },
        {
            label : 'Pages',
            value: {
                type: 'posts',
                args: {
                    'post_type': 'page'
                }
            },
        },
        {
            label : 'Categories',
            value: {
                type: 'terms',
                args: {
                    'taxonomy': 'category',
                    'hide_empty': false
                }
            }
        },
        {
            label : 'Tags',
            value: {
                type: 'terms',
                args: {
                    'taxonomy': 'post_tag',
                    'hide_empty': false
                }
            }
        },
    ]
    const changeType = ({ type, args }) => {
        setType(type)
        setQuery( Object.assign({}, args ))
    }

    return (
        <Fragment>
            <ScreenHeader>

                <TagGroupControl tags={typeTags} appearance="vibrant" onChange={changeType} />

                { false &&<ExpandedContents>
                    <TagGroup title="Last Edited">
                        <Tag>Today</Tag>
                        <Tag>This Week</Tag>
                        <Tag>This Month</Tag>
                        <Tag>2019</Tag>
                    </TagGroup>
                </ExpandedContents> }

            </ScreenHeader>

			<ContentList
                type={type}
                query={query}
                item={<PostListItem />}
                containerClass='fl-asst-post-list'
                itemClass='fl-asst-post-list-item'
            />
        </Fragment>
    )
}
