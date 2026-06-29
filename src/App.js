import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavContainer from "./Views/NavContainer";
import HomeContainer from "./Views/HomeContainer";
import Footer from "./Views/Footer";
import LoginContainer from "./Views/LoginContainer";
import Services from "./Views/Services/Services";
import AncesterAcademy from "./Views/Academy/AncesterAcademy";
import KnowUs from "./Views/KnowUs/KnowUs";
import NoMatch from "./Views/NoMatch";
import WeCreate from "./Views/Services/WeCreate";
import Advise from "./Views/Services/Advise";
import Sponsor from "./Views/Services/Sponsor";
import Marketplace from "./Views/Marketplace";
import AncesterAcademyHome from "./Views/Academy/AncesterAcademyHome";

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
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/Ancester" element={<HomeContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path="/ancester-academy" element={<AncesterAcademy />} />
            <Route path="/ancester-academy-home" element={<AncesterAcademyHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/know-us/*" element={<KnowUs />} />
            <Route path="/we-create" element={<WeCreate />} />
            <Route path="/advise" element={<Advise />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </NavContainer>
        <Footer />
      </div>
    );
  }
}
