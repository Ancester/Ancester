// import React from "react";
// import { Menu, Segment, Image, Dropdown } from "semantic-ui-react";
// import ANCESTER from "../Assets/img/blanco-logo-1.svg";
// const options = [
//   { key: 1, text: "Choice 1", value: 1 },
//   { key: 2, text: "Choice 2", value: 2 },
//   { key: 3, text: "Choice 3", value: 3 }
// ];

// export default class NavContainer extends React.Component {
//   state = { activeItem: "home" };

//   handleItemClick = (_e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Segment inverted size='mini' style={{padding:0}}>
//         <Menu inverted secondary  fixed="top" >
//           <Menu.Item
//             name="home"
//             active={activeItem === "home"}
//             onClick={this.handleItemClick}
//             as='div'
//           >
//             <Link to="/">
//               <Image src={ANCESTER} size="mini" />
//             </Link>
//           </Menu.Item>
//           <Menu.Item
//             name="juegos"
//             active={activeItem === "juegos"}
//             onClick={this.handleItemClick}
//             fitted='vertically'
//           >
//             <Dropdown text="Juegos" options={options} simple item />
//           </Menu.Item>
//           <Menu.Menu position="right">
//             <Menu.Item
//               name="academy"
//               active={activeItem === "academy"}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name="marketplace"
//               active={activeItem === "marketplace"}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name="servicios"
//               active={activeItem === "servicios"}
//               onClick={this.handleItemClick}
//             />
//             <Menu.Item
//               name="conócenos"
//               active={activeItem === "conócenos"}
//               onClick={this.handleItemClick}
//             >
//               Conócenos
//             </Menu.Item>
//             <Menu.Item>
//               <img src={BarraVertical} height={30} alt="" />
//             </Menu.Item>
//             <Menu.Item
//               name="iniciar sesion"
//               active={activeItem === "iniciar sesion"}
//               onClick={this.handleItemClick}
//               as='div'
//             >
//             <Link as='span' to="/login">Iniciar Sesión</Link>
//             </Menu.Item>
//           </Menu.Menu>
//         </Menu>
//       </Segment>
//     );
//   }
// }
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
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 }
];

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
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
          <Menu.Item {...item} as={Link}/>
        ))}
        <Menu.Item
          name="Gunz"
          as="a"
        />
        <Menu.Item
          name="Otro Juego"
          as="a"
        />
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
              <Link as='span' to="/login">Iniciar Sesión</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );

const NavBarDesktop = ({ rightItems }) => (
  <Segment inverted size="mini" style={{ padding: 0 }} fixed="top">
    <Menu inverted secondary>
      <Menu.Item as={Link} to='/'>
        <Image size="mini" src={ANCESTER} />
      </Menu.Item>
      <Menu.Item
        name="juegos"
        fitted='vertically'
      >
        <Dropdown text="Juegos" options={options} simple item />
      </Menu.Item>
      <Menu.Menu position="right">
        {_.map(rightItems, item => (
          <Menu.Item {...item} as={Link}/>
        ))}
        <Menu.Item>
          <img src={BarraVertical} height={30} alt="" />
        </Menu.Item>
        <Menu.Item
          name="iniciar sesion"
          as='div'
        >
          <Link as='span' to="/login">Iniciar Sesión</Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </Segment>
);

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
    const { children, rightItems } = this.props;
    const { visible } = this.state;
    return (
      <div>
        <Responsive maxWidth={ResponsiveOnlyMobile.maxWidth}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarMobileChildren>{children}</NavBarMobileChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={ResponsiveOnlyTablet.minWidth}>
          <NavBarDesktop rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

export default NavContainer;
