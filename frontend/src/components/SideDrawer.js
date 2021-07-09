import { Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SidebarExampleDimmed = (props) => {

  return (
    <Sidebar.Pushable as={Segment}>
        <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => props.setVisible(false)}
        vertical
        visible={props.visible}
        width='thin'
        >  
            <Menu.Item as={Link} to='/home'>
                <Icon name='home' />
                home
            </Menu.Item>
            <Menu.Item as={Link} to='/products'>
                <Icon name='shopping bag' />
                products
            </Menu.Item>
            <Menu.Item as={Link} to='/cart'>
                <Icon name='cart' />
                cart
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={props.visible}>
            {props.children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleDimmed
