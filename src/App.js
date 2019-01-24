import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavContainer from "./Views/NavContainer";
import HomeContainer from "./Views/HomeContainer";
import Footer from "./Views/Footer";
import LoginContainer from "./Views/LoginContainer";
import Services from "./Views/Services";
import AncesterAcademy from "./Views/AncesterAcademy";
import KnowUs from "./Views/KnowUs";
import NoMatch from "./Views/NoMatch";
import WeCreate from "./Views/WeCreate";
import Advise from "./Views/Advise";
import Sponsor from "./Views/Sponsor";
import Marketplace from "./Views/Marketplace";
import AncesterAcademyHome from "./Views/AncesterAcademyHome";

const rightItems = [
  { content: "Academy", key: "academy",  to: '/ancester-academy' },
  { content: "Marketplace", key: "marketplace",  to: '/marketplace' },
  { content: "Servicios", key: "servicios", to: '/services' },
  { content: "Conócenos", key: "conócenos",  to: '/know-us' }
];


export default class App extends Component {
  render() {
    return (
      <div>
        <NavContainer rightItems={rightItems}>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/Ancester" component={HomeContainer} />
            <Route path='/login' component={LoginContainer} />
            <Route path="/ancester-academy" component={AncesterAcademy} />
            <Route path="/ancester-academy-home" component={AncesterAcademyHome} />
            <Route path="/services" component={Services} />
            <Route path="/know-us" component={KnowUs} />
            <Route path="/we-create" component={WeCreate} />
            <Route path="/advise" component={Advise} />
            <Route path="/sponsor" component={Sponsor} />
            <Route path="/marketplace" component={Marketplace} />
            <Route component={NoMatch} />
          </Switch>
        </NavContainer>
        <Footer />
      </div>
    );
  }
}
