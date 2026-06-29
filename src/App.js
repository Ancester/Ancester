import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";
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
import Contacto from "./Views/Contacto";

class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const rightItems = [
      { content: t("nav.academy"), key: "academy",  to: '/ancester-academy' },
      { content: t("nav.marketplace"), key: "marketplace",  to: '/marketplace' },
      { content: t("nav.services"), key: "servicios", to: '/services' },
      { content: t("nav.knowUs"), key: "conócenos",  to: '/know-us' }
    ];

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div>
        <NavContainer rightItems={rightItems} changeLanguage={changeLanguage} currentLanguage={i18n.language}>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/Ancester" element={<HomeContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path="/ancester-academy" element={<AncesterAcademy />} />
            <Route path="/ancester-academy-home" element={<AncesterAcademyHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacto" element={<Contacto />} />
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

export default withTranslation()(App);
