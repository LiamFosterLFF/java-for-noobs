import { useState } from 'react';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import useBreakpoint from '../utils/useBreakPoint';





const Navbar = (props) => {
    const [ activeItem, setActiveItem ] = useState("home")
    const mediaQuery = useBreakpoint()
    const handleItemClick = (e, { name }) => setActiveItem(name)
    const menuItems = ['home', 'products'];


    const HamburgerButton = () => {
        if (mediaQuery === "desktop") {
            return (<>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item as={Link} to='/cart'>
                    <Icon name='cart' />
                </Menu.Item>
                <Menu.Item
                    name='log in'
                    active={activeItem === 'log in'}
                    as={Link} to='/loginout'
                /></>
            )}
        return (
            <Menu.Item > 
                <Icon name="bars" onClick={() => props.setShowSideDrawer(show => !show)} /> 
            </Menu.Item>
        )
    }
    return (
        <Menu secondary>
            <Menu.Item>
                <Icon name='coffee' size="large" />
            </Menu.Item>
            {menuItems.map((item, index) => {
                return (
                    <Menu.Item
                        key={index}
                        name={item}
                        active={activeItem === item}
                        onClick={handleItemClick}
                        as={Link} to ={`/${item}`}
                    /> 
                )
            })}
            <Menu.Menu position='right'>
            
            <HamburgerButton/>
            </Menu.Menu>
      </Menu>
    )
}

export default Navbar;