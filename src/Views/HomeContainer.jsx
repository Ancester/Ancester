import React from "react";
import { Link } from "react-router-dom";
import { Image, Header, Segment, Grid, Button, Container } from "semantic-ui-react";
import { withTranslation } from "react-i18next";
import CarouselView from "../Components/Carousel"
import Facebook from '../Assets/img/Home/facebook.png'
import Youtube from '../Assets/img/Home/youtube.png'
import Blogger from '../Assets/img/Home/blogger.png'
import Services from "./Services/Services";
const HomeContainer = ({ t }) => {
  return (
    <div>
      <CarouselView style={{ marginTop: 0, padding: 0 }} />
      <Segment inverted style={{ backgroundColor: 'rgb(42, 39, 77)', padding: '60px 0' }}>
        <Container textAlign='center'>
          <Header as='h4' inverted style={{ textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>
            {t('home.indieSoloDev')}
          </Header>
          <Header as='h1' inverted style={{ marginTop: 0 }}>
            {t('home.heroTitle')}
          </Header>
          <p style={{ color: 'white', fontSize: '18px', maxWidth: '700px', margin: '10px auto 20px', lineHeight: '1.6' }}>
            {t('home.heroDescription')}
          </p>
          <Button as={Link} to="/contacto" primary size='large'>
            {t('home.contact')}
          </Button>
        </Container>
      </Segment>
      <Segment style={{ padding: '40px 0' }}>
        <Container>
          <Grid columns={3} textAlign='center'>
            <Grid.Column>
              <Header as='h3'>{t('home.weCreate')}</Header>
              <p>{t('home.weCreateDesc')}</p>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>{t('home.wePublish')}</Header>
              <p>{t('home.wePublishDesc')}</p>
            </Grid.Column>
            <Grid.Column>
              <Header as='h3'>{t('home.weAdvise')}</Header>
              <p>{t('home.weAdviseDesc')}</p>
            </Grid.Column>
          </Grid>
          <Button as={Link} to="/contacto" primary style={{ display: 'block', margin: '30px auto' }}>
            {t('home.contact')}
          </Button>
          <p style={{ textAlign: 'center', color: '#888', fontSize: '14px', marginTop: '10px' }}>
            {t('home.workModel')}
          </p>
        </Container>
      </Segment>
      <Services />
      <Header as='h3' textAlign='center'><u>{t('home.socialMedia')}</u></Header>
      <Grid centered>
        <Grid.Column width={14}>
          <Segment.Group horizontal style={{ marginBottom: '55px' }}>
            <Segment inverted color='blue'><Image src={Facebook} fluid /></Segment>
            <Segment inverted color='red'><Image src={Youtube} /></Segment>
            <Segment inverted color='yellow'><Image src={Blogger} fluid /></Segment>
          </Segment.Group>
        </Grid.Column>
      </Grid>
      <hr />
    </div>
  );
};

export default withTranslation()(HomeContainer);
