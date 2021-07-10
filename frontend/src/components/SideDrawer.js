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
            <Menu.Item>
                <Icon name="search"/>
            </Menu.Item>
            <Menu.Item as={Link} to='/cart'>
                <Icon name='cart' />
            </Menu.Item>
            <Menu.Item name='log in' as={Link} to='/loginout'>
                <Icon name="cog"/>
            </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={props.visible}>
            {props.children}
        </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleDimmed
