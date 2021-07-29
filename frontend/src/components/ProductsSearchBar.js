import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import styled from "styled-components";
// import _ from 'lodash';

import { searchProducts, getSearchSuggestions } from '../redux/actions/productActions';

const Suggestion = styled.div`
    list-style-type: none;
    cursor: pointer;
    &:hover {
        background-color: #c0b7b1;
      }
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
        console.log(e.target.id)
        setSearchValue(e.target.textContent);
        history.push(`/productDetails/${e.target.id}`)
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
            <div style={{ width: "200px", height: "100px", overflowY: "scroll", zIndex: "1000", position: "absolute", background: "white", display: listOpen ? "inline" : "none" }}>
                <ul style={{listStyle: "none", padding: "0px 20px 0px 10px"}} >
                    {suggestions.map((suggestion, ind) => {
                        return <Suggestion key={ind} id={suggestion._id} onMouseDown={handleSuggestionClick}>{suggestion.name}</Suggestion>
                    })} 
                </ul> 
            </div>
        </div>
    )
}

export default ProductsSearchBar;