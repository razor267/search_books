import React, {ChangeEvent, KeyboardEvent} from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {actions} from '../../../actions/actions'

type PropsType = {
    searchBooks: (str: string, category: string, sort: string, startIndex: number | null) => void
    searchStr: string
    searchCategory: string
    sort: string
}
const Header: React.FC<PropsType> = (props) => {

    const {searchBooks, searchStr, searchCategory, sort} = props

    const dispatch = useDispatch()

    return (
        <div className="header_wrapper">
            <h1>Search for books</h1>
            <div className="search">
                <span>
                    <input
                        onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(actions.editSearchStr(e.currentTarget.value))}
                        type="text"
                        value={searchStr}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' ? searchBooks(searchStr, searchCategory, sort, null) : null}
                    />
                </span>
                <Link to='/'>
                    <button onClick={() => searchBooks(searchStr, searchCategory, sort, null)}>Поиск</button>
                </Link>
            </div>
            <div className="category">
                <span className="categories">Categories</span>
                <span className="categoriesSelect">
                    <select
                        name="categories"
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(actions.editSearchCategory(e.currentTarget.value))}
                        value={searchCategory}
                    >
                        <option>all</option>
                        <option>art</option>
                        <option>biography</option>
                        <option>computers</option>
                        <option>history</option>
                        <option>medical</option>
                        <option>poetry</option>
                    </select>
                    </span>
            </div>
            <div className="sorting">
                <span className="sort">Sorting by</span>
                <select
                    name="sort"
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => dispatch(actions.editSort(e.currentTarget.value))}
                    value={sort}
                >
                    <option>relevance</option>
                    <option>newest</option>
                </select>
            </div>
        </div>
    )
}

export default Header