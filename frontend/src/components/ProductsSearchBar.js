import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import styled from "styled-components";
// import _ from 'lodash';

import { searchProducts, getSearchSuggestions, removeSearchSuggestions } from '../redux/actions/productActions';

const Suggestion = styled.div`
    list-style-type: none;
    cursor: pointer;
    &:hover {
        background-color: #c0b7b1;
      }
`;

const DropdownMenu = styled.div`
    width: 200px;
    max-height: 100px;
    min-height: 0px;
    overflow-y: scroll;
    z-index: 1000;
    position: absolute;
    background: #ffffff;
    display: ${props => props.listOpen ? "inline" : "none" }
`;

// debounce and autocomplete
// Google-like search suggestions functionality
    // Highlight what matches what you've typed
    // Probably needs to be a separate thing
    // Can we get it to just send the part that matches? maybe
const ProductsSearchBar = ({ history }) => {
    const dispatch = useDispatch();

    const getSuggestions = useSelector(state => state.getSearchSuggestions);
    const { suggestions } = getSuggestions

    const [ searchValue, setSearchValue ] = useState("");
    const [ listOpen, setListOpen ] = useState(false);

    useEffect(() => {
        if (searchValue.length > 0) {
            dispatch(getSearchSuggestions(searchValue))
        }
    }, [dispatch, searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSuggestionClick = (e) => {
        setSearchValue(e.target.textContent);
        history.push(`/productDetails/${e.target.id}`)
        dispatch(removeSearchSuggestions())
        setListOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(e.target[0].value))
    }

    return (
        <div onFocus={() => setListOpen(true)} onBlur={() => setListOpen(false)}>
            <form onSubmit={handleSubmit}>
                <Input style={{width: "200px"}} icon='search' placeholder='Search Products By Name' value={searchValue} onChange={handleChange} /> 
            </form>
            <DropdownMenu listOpen={listOpen}>
                {suggestions.map((suggestion, ind) => {
                    return <Suggestion key={ind} id={suggestion._id} onMouseDown={handleSuggestionClick}>{suggestion.name}</Suggestion>
                })} 
            </DropdownMenu>
        </div>
    )
}

export default ProductsSearchBar;