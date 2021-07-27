import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

import { searchProducts } from '../redux/actions/productActions';
// debounce and autocomplete
const ProductsSearchBar = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts

    const [ searchValue, setSearchValue ] = useState("");
    const [ listOpen, setListOpen ] = useState(false);

    useEffect(() => {
        setListOpen(searchValue.length > 0)
        dispatch(searchProducts(searchValue))
    }, [dispatch, searchValue]);

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    return (<>
        <Input style={{width: "200px"}} icon='search' placeholder='Search Products By Name' value={searchValue} onChange={handleChange}/>
        <div style={{ width: "200px", height: "100px", overflowY: "scroll", zIndex: "1000", position: "absolute", background: "white", display: listOpen }}>
            <ul style={{listStyle: "none", paddingLeft: "10px"}} >
                {products.map((product, ind) => {
                return <li key={ind} style={{listStyleType: "none"}}>{product.name}</li>
                })} 
            </ul> 
        </div>
    </>)
}

export default ProductsSearchBar;