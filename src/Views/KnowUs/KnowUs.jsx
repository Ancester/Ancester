import React from 'react'
import { Link, Route } from "react-router-dom";
import { Container, Grid, Image, Header,Modal } from 'semantic-ui-react'
import Jumbo from '../../Assets/img/KnowUs/jumbo.svg'
import Daniel from '../../Assets/img/KnowUs/daniel.svg'
import Israel from '../../Assets/img/KnowUs/israel.png'
import Honestidad from '../../Assets/img/KnowUs/1honestidad.png'
import Compromiso from '../../Assets/img/KnowUs/2compromiso.png'
import Pasion from '../../Assets/img/KnowUs/3pasion.png'
import Resolucion from '../../Assets/img/KnowUs/4resolucion.png'
import Equipo from '../../Assets/img/KnowUs/5equipo.png'
import Integridad from '../../Assets/img/KnowUs/6integridad.png'
import KnowDaniel from './KnowDaniel';
import KnowIsrael from './KnowIsrael';


const KnowUs = ({ match }) => {
  return (
    <Container fluid style={{
      marginTop: "-3em"
    }}>
      <Grid centered>
        <Grid.Column>
          <Image src={Jumbo} fluid />
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center'><u>El Equipo</u></Header>
      <Grid centered>
        <Grid.Column width={4}>
          <Modal
            trigger={
              <Link as='div' to={`${match.url}/daniel`}>
                <Image src={Daniel} width='240px'/>
              </Link>
            }
          >
            <Modal.Content >
            <Route path={`${match.path}/daniel`} render={() => { return <KnowDaniel/> }} />
            </Modal.Content>
          </Modal>
        </Grid.Column>
        <Grid.Column width={4}>
        <Modal
            trigger={
              <Link as='div' to={`${match.url}/israel`}>
                <Image src={Israel} fluid />
              </Link>
            }
          >
            <Modal.Content >
            <Route path={`${match.path}/israel`} render={() => { return <KnowIsrael/> }} />
            </Modal.Content>
          </Modal>
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center'><u>Nuestros Valores</u></Header>
      
      <Grid centered>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Honestidad} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Compromiso} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Pasion} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Resolucion} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Equipo} />
        </Grid.Column>
        <Grid.Column computer={4} mobile={6} tablet={5}>
          <Image src={Integridad} />
        </Grid.Column>
      </Grid>
      <Header as='h3' textAlign='center' style={{ marginBottom: '55px' }}><u>Nuestros Proyectos</u></Header>
      <br />
      <hr />
    </Container>
  )
}

export default KnowUs
