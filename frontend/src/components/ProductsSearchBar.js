import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

import { searchProducts, getSearchSuggestions } from '../redux/actions/productActions';
// debounce and autocomplete
// Google-like search suggestions functionality
    // Highlight what matches what you've typed
    // Probably needs to be a separate thing
    // Can we get it to just send the part that matches? maybe
const ProductsSearchBar = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts

    const getSuggestions = useSelector(state => state.getSearchSuggestions);
    const { suggestions } = getSuggestions

    const [ searchValue, setSearchValue ] = useState("");
    const [ listOpen, setListOpen ] = useState(false);

    useEffect(() => {
        setListOpen(searchValue.length > 0)
        if (searchValue.length > 0) {
            dispatch(getSearchSuggestions(searchValue))
        }
    }, [dispatch, searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleLabelClick = (e) => {
        setSearchValue(e.target.textContent);
        dispatch(searchProducts(e.target.textContent))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchProducts(e.target[0].value))
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <Input style={{width: "200px"}} icon='search' placeholder='Search Products By Name' value={searchValue} onChange={handleChange}/> 
        </form>
        <div style={{ width: "200px", height: "100px", overflowY: "scroll", zIndex: "1000", position: "absolute", background: "white", display: listOpen ? "block" : "none" }}>
            <ul style={{listStyle: "none", paddingLeft: "10px"}} >
                {suggestions.map((suggestion, ind) => {
                return <li key={ind} onClick={handleLabelClick} style={{ listStyleType: "none", cursor: "pointer" }}>{suggestion.name}</li>
                })} 
            </ul> 
        </div>
    </>)
}

export default ProductsSearchBar;