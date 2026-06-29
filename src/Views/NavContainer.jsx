import _ from "lodash";
import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Segment,
  Dropdown
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import BarraVertical from "../Assets/img/barra separadora.svg";
import ANCESTER from "../Assets/img/blanco-logo-1.svg";

const ResponsiveOnlyMobile = { maxWidth: 767 };
const ResponsiveOnlyTablet = { minWidth: 768 };

const Responsive = ({ children, minWidth, maxWidth }) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const query = minWidth
      ? `(min-width: ${minWidth}px)`
      : maxWidth
        ? `(max-width: ${maxWidth}px)`
        : "";
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [minWidth, maxWidth]);
  return matches ? children : null;
};

const options = [
  { key: 'gunz', text: 'Gunz', value: 'Gunz' },
  { key: 'flores', text: 'Las Flores City', value: 'Las Flores City' },
  { key: 'game1', text: 'Shadow Realm', value: 'Shadow Realm' },
  { key: 'game2', text: 'Neon Drift', value: 'Neon Drift' },
];

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
  t,
  changeLanguage,
  currentLanguage,
}) => (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="scale down"
        icon="labeled"
        inverted
        vertical
        visible={visible}
        width='thin'
      >
        {_.map(rightItems, item => (
          <Menu.Item key={item.key} content={item.content} to={item.to} as={Link}/>
        ))}
        <Menu.Item
          name={t("nav.games")}
          as="a"
        />
        <Menu.Item
          name={t("nav.otherGame")}
          as="a"
        />
        <Menu.Item>
          <LanguageSwitcher t={t} changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src={ANCESTER} />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="iniciar sesion"
              as='div'
            >
              <Link as='span' to="/login">{t("nav.signIn")}</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );

const NavBarDesktop = ({ rightItems, t, changeLanguage, currentLanguage }) => (
  <Segment inverted size="mini" style={{ padding: 0 }} fixed="top">
    <Menu inverted secondary>
      <Menu.Item as={Link} to='/'>
        <Image size="mini" src={ANCESTER} />
      </Menu.Item>
      <Dropdown text={t("nav.games")} options={options} simple item />
      <Menu.Menu position="right">
        {_.map(rightItems, item => (
          <Menu.Item key={item.key} content={item.content} to={item.to} as={Link}/>
        ))}
        <Menu.Item>
          <img src={BarraVertical} height={30} alt="" />
        </Menu.Item>
        <Menu.Item>
          <LanguageSwitcher t={t} changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
        </Menu.Item>
        <Menu.Item
          name="iniciar sesion"
          as='div'
        >
          <Link as='span' to="/login">{t("nav.signIn")}</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Segment>
);

const LanguageSwitcher = ({ t, changeLanguage, currentLanguage }) => {
  const langOptions = [
    { key: 'es', text: t("language.es"), value: 'es', flag: 'es' },
    { key: 'en', text: t("language.en"), value: 'en', flag: 'us' },
  ];

  return (
    <Dropdown
      text={currentLanguage === 'en' ? t("language.en") : t("language.es")}
      options={langOptions}
      simple
      item
      onChange={(_e, { value }) => changeLanguage(value)}
      style={{ minWidth: 0 }}
    />
  );
};

const NavBarMobileChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>
    {children}
  </Container>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "-1em", marginBottom: '55px' }}>
    {children}
  </Container>
);

class NavContainer extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;
    if (visible) this.setState({ visible: !visible });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });
  render() {
    const { children, rightItems, t, changeLanguage, currentLanguage } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Responsive maxWidth={ResponsiveOnlyMobile.maxWidth}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
            t={t}
            changeLanguage={changeLanguage}
            currentLanguage={currentLanguage}
          >
            <NavBarMobileChildren>{children}</NavBarMobileChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={ResponsiveOnlyTablet.minWidth}>
          <NavBarDesktop
            rightItems={rightItems}
            t={t}
            changeLanguage={changeLanguage}
            currentLanguage={currentLanguage}
          />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default withTranslation()(NavContainer);
