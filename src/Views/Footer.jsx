import React from 'react'
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import ANCESTER from "../Assets/img/blanco-logo-1.svg";

const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: '0.5em 0em',
        margin: "0em 0em",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex:2
      }}
    >
      <Container>
        <Grid inverted>
          <Grid.Row textAlign='center'>
            <Grid.Column textAlign='center' computer={3} mobile={8} tablet={4}>
              <Header link="true" inverted as='h4' content='Política y Privacidad' />
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header link="true" inverted as='h4' content='Aportes y Sugerencias' />
            </Grid.Column>
            <Grid.Column textAlign='center' only='computer' computer={4}>
              <Image centered size='mini' src={ANCESTER} />
              <p >
                Todos los derechos reservados por Ancester
              </p>
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header link="true" inverted as='h4' content='Redes Sociales' />
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header link="true" inverted as='h4' content='Contáctanos' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Footer