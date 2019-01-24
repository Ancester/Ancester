import React from "react";
import { Image, Header, Segment } from "semantic-ui-react";
import CarouselView from "../Components/Carousel"
import Facebook from '../Assets/img/Home/facebook.png'
import Youtube from '../Assets/img/Home/youtube.png'
import Blogger from '../Assets/img/Home/blogger.png'
import Services from "./Services";

const HomeContainer = () => {
  return (
    <div>
      <CarouselView style={{ marginTop: 0, padding: 0 }} />
      <Services />
      <Header as='h3' textAlign='center'><u>REDES SOCIALES</u></Header>
      <Segment.Group horizontal style={{ marginBottom: '55px' }}>
        <Segment inverted color='blue'><Image src={Facebook} fluid /></Segment>
        <Segment inverted color='red'><Image src={Youtube} /></Segment>
        <Segment inverted color='yellow'><Image src={Blogger} fluid /></Segment>
      </Segment.Group>
      <hr />
    </div>
  );
};

export default HomeContainer;
