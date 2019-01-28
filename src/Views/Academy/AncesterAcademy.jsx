import React from 'react'
import { Link } from "react-router-dom";
import { Image, Grid } from "semantic-ui-react";
import Design from '../../Assets/img/AncesterAcademy/diseno.svg'
import Creation from '../../Assets/img/AncesterAcademy/creacion.svg'
import Bussiness from '../../Assets/img/AncesterAcademy/negocios.svg'
import Ancester from '../../Assets/img/AncesterAcademy/AncesterAcademy.png'

const AncesterAcademy = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Grid centered>
                <Link to='/ancester-academy-home'>
                    <Image src={Ancester} height='50' />
                </Link>
            </Grid>
            <br />
            <br />
            <Grid columns={3} relaxed centered>
                <Grid.Column computer={4} mobile={7} tablet={5}>
                    <Image src={Design} />
                </Grid.Column>
                <Grid.Column computer={4} mobile={7} tablet={5}>
                    <Image src={Creation} />
                </Grid.Column>
                <Grid.Column computer={4} mobile={7} tablet={5}>
                    <Image src={Bussiness} />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default AncesterAcademy
