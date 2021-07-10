import { Dropdown } from 'semantic-ui-react';


const QuantityDropdown = ({ setQty, qty, countInStock }) => {
    if (countInStock === 0) {
        return <Dropdown text="Out of Stock"/>
    } else {
        // Make an array from 1 to max 10, based on how many in stock
        const dropdownCount = (countInStock <= 10) ? countInStock : 10;
        const dropdownArray = Array.from({length: dropdownCount}, (_, i) => i + 1)
        const options = dropdownArray.map((n, i) => {
            return {
                key: i,
                text: n,
                value: n
            }
        })
        const handleChange = (e, { value }) => setQty(value)
        return (
            <Dropdown 
                onChange={handleChange}
                options={options}
                selection
                value={qty}
            />
        )
    }
}

export default QuantityDropdown;