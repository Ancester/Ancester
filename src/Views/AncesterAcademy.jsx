import React from 'react'
import { Image, Grid } from "semantic-ui-react";
import Design from '../Assets/img/AncesterAcademy/diseno.svg'
import Creation from '../Assets/img/AncesterAcademy/creacion.svg'
import Bussiness from '../Assets/img/AncesterAcademy/negocios.svg'
import Ancester from '../Assets/img/AncesterAcademy/AncesterAcademy.png'

const AncesterAcademy = () => {
    return (
        <div>
            <Grid centered>
                <Image src={Ancester} height='100'/>
            </Grid>
            <Grid columns={3} relaxed >
                <Grid.Column>
                    <Image src={Design} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Creation} />
                </Grid.Column>
                <Grid.Column>
                    <Image src={Bussiness} />
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default AncesterAcademy
