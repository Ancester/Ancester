import React from 'react'
import { Container, Grid, Image} from 'semantic-ui-react'
import Israel from '../../Assets/img/KnowUs/israel.png'
import Sv from '../../Assets/img/KnowUs/sv.svg'
import IsraelTexto from '../../Assets/img/KnowUs/israel_texto.svg'


const KnowIsrael = () => {
  return (
    <Container fluid>
      <Grid centered>
        <Image src={Israel} height='50%' />
        <Grid.Row>
          <Image src={Sv} height='100' />
        </Grid.Row>
        <Image src={IsraelTexto} fluid />
      </Grid>

      <br />
      <hr />
    </Container>
  )
}

export default KnowIsrael
