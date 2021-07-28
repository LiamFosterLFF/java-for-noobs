import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

import { searchProducts } from '../redux/actions/productActions';
// debounce and autocomplete
const ProductsSearchBar = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts

    const [ searchValue, setSearchValue ] = useState("");

    useEffect(() => {
        dispatch(searchProducts(searchValue))
    }, [dispatch, searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (
        <Dropdown
            placeholder='Search Products By Name'
            fluid
            search
            selection
            options={products.map((product, ind) => {
                return { key: ind,  text: product.name, value: product.name }
                })}
        />
        // <Input style={{width: "200px"}} icon='search' placeholder='Search Products By Name' value={searchValue} onChange={handleChange}/> 
        // <div style={{ width: "200px", height: "100px", overflowY: "scroll", zIndex: "1000", position: "absolute", background: "white", display: listOpen ? "block" : "none" }}>
        //     <ul style={{listStyle: "none", paddingLeft: "10px"}} >
        //         {} 
        //     </ul> 
        // </div>
    )
}

export default ProductsSearchBar;