import React from 'react'
import { Link } from "react-router-dom";
import { Image, Header, Grid } from "semantic-ui-react";
import Asesoramos from '../../Assets/img/Services/asesoramos.png'
import Patrocinate from '../../Assets/img/Services/patrocinate.png'
import Creamos from '../../Assets/img/Services/creamos.png'

const Services = () => {
    return (
        <div>
            <hr />
            <Header as='h3' textAlign='center'><u>SERVICIOS</u></Header>
            <Grid columns={3} relaxed textAlign='center'>
                <Grid.Column computer={4} mobile={10} tablet={5}>
                    <Link to='/advise'>
                        <Image src={Asesoramos} />
                    </Link>
                </Grid.Column>
                <Grid.Column computer={4} mobile={10} tablet={5}>
                    <Link to='/sponsor'>
                        <Image src={Patrocinate} />
                    </Link>
                </Grid.Column>
                <Grid.Column computer={4} mobile={10} tablet={5}>
                    <Link to='/we-create'>
                        <Image src={Creamos} />
                    </Link>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Services
