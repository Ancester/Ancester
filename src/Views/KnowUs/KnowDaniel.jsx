import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'
import Daniel from '../../Assets/img/KnowUs/daniel.svg'
import Peru from '../../Assets/img/KnowUs/peru.svg'
import DanielTexto from '../../Assets/img/KnowUs/daniel_texto.svg'


const KnowDaniel = () => {
  return (
    <Container fluid>
      <Grid centered>
        <Image src={Daniel} height='500' />
        <Grid.Row>
          <Image src={Peru} height='100' />
        </Grid.Row>
        <Image src={DanielTexto} fluid />
      </Grid>

      <br />
      <hr />
    </Container>
  )
}

export default KnowDaniel
