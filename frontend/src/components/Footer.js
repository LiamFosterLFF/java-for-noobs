import { Grid, Icon, Image } from 'semantic-ui-react';

const Footer = () => {
    return (
        <div style={{ textAlign: "center", verticalAlign: "center", background: "black", color: "white" }}>
            <Grid columns={3}>
                <Grid.Column>Java For Noobs</Grid.Column>
                <Grid.Column>
                    <Image src={process.env.PUBLIC_URL + "/jbean.svg"} className="App-logo-J" alt="jlogo" />
                </Grid.Column>
                <Grid.Column>
                    <Icon size="large" name='facebook'/>
                    <Icon size="large" name='twitter square'/>
                    <Icon size="large" name='telegram'/>
                    <Icon size="large" name='snapchat square'/>
                    <Icon size="large" name='pinterest square'/>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Footer;