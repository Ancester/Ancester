import React from 'react'
import { Header, Container, Segment, Image, Grid } from "semantic-ui-react";
import JoyStick from '../../Assets/img/Advise/videojuego.svg'
import Chart from '../../Assets/img/Advise/grafica.svg'
import Description from '../../Assets/img/Advise/descripcion.svg'
import Step1 from '../../Assets/img/Advise/paso1.svg'
import Step2 from '../../Assets/img/Advise/paso2.svg'
import Step3 from '../../Assets/img/Advise/paso3.svg'

const Advise = () => {
    return (
        <Container fluid
            style={{
                backgroundColor: 'rgb(48, 45, 88)',
                minHeight: '90%',
                height: '100%',
                marginBottom: '50px'
            }}
        >
            <div style={{
                backgroundImage: "url(" + JoyStick + ")",
                backgroundRepeat: 'no-repeat',
                minHeight: '50%',
                height: '300px'
            }}>
                <Container text>
                    <br />
                    <Header as='h1' inverted textAlign='center'><b>ASESORAMOS TU VIDEOJUEGO</b></Header>
                    <br />
                    <Grid centered>
                        <Image src={Description} height='200' />
                    </Grid>
                </Container>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Header as='h3' inverted textAlign='center'>REQUISITOS</Header>
                <Grid columns={3} doubling padded relaxed='very'>
                    <Grid.Column>
                        <Image src={Step1} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={Step2} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={Step3} />
                    </Grid.Column>
                </Grid>
                <Grid centered>
                    <Image src={Chart} height='300' />
                </Grid>
                <Container text>
                    <br />
                    <Segment style={{ backgroundColor: 'rgb(42, 39, 77)' }} inverted>
                        Para mas informacion
                </Segment>
                </Container>
                <br />
                <br />
            </div>
        </Container>
    )
}

export default Advise
