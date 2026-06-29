import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon } from 'semantic-ui-react'
import ANCESTER from "../Assets/img/blanco-logo-1.svg"

const DEMO_MODES = {
  NONE: 'none',
  LOGIN: 'login',
  SIGNUP: 'signup'
}

class DemoModal extends Component {
  render() {
    const { open, mode, onClose } = this.props
    const isLogin = mode === DEMO_MODES.LOGIN
    
    return (
      <Modal open={open} onClose={onClose} size='small' dimmer='blurring'>
        <Modal.Header style={{ background: '#081B24', color: '#fff', textAlign: 'center' }}>
          <Icon name='code' /> Proyecto Demo
        </Modal.Header>
        <Modal.Content style={{ textAlign: 'center', padding: '2em' }}>
          <Icon
            name={isLogin ? 'user circle' : 'user plus'}
            size='huge'
            style={{ color: '#00b5ad', marginBottom: '0.5em' }}
          />
          <Header as='h2' style={{ color: '#081B24' }}>
            {isLogin ? 'Inicio de Sesión' : 'Registro de Usuario'}
          </Header>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: 1.6 }}>
            <Icon name='info circle' color='teal' />
            Esta es una versión demo del proyecto.
            <br /><br />
            {isLogin
              ? 'El inicio de sesión se vería así. Los usuarios ingresarían sus credenciales para acceder a su panel personal, cursos, marketplace y más.'
              : 'El registro de nuevos usuarios se vería así. Los interesados completarían un formulario para crear una cuenta en la plataforma.'
            }
          </p>
          <Message info>
            <Message.Header>🔧 Funcionalidad en desarrollo</Message.Header>
            <p>
              Esta funcionalidad no está disponible actualmente ya que no contamos con un backend implementado.
              El proyecto se encuentra en fase de demostración.
            </p>
          </Message>
          <div style={{ marginTop: '1.5em' }}>
            <Button color='teal' onClick={onClose}>
              <Icon name='check' /> Entendido
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default class LoginContainer extends Component {
  state = {
    demoMode: DEMO_MODES.NONE
  }

  handleLoginClick = () => {
    this.setState({ demoMode: DEMO_MODES.LOGIN })
  }

  handleSignupClick = (e) => {
    e.preventDefault()
    this.setState({ demoMode: DEMO_MODES.SIGNUP })
  }

  handleCloseModal = () => {
    this.setState({ demoMode: DEMO_MODES.NONE })
  }

  render() {
    const { demoMode } = this.state

    return (
      <div>
        <DemoModal
          open={demoMode !== DEMO_MODES.NONE}
          mode={demoMode}
          onClose={this.handleCloseModal}
        />
        <div className='login-form'>
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 90%;
              border-radius: 25px;
            }
          `}</style>
          <Grid textAlign='center' style={{ height: '100%', marginTop: '3em', borderRadius: "25px" }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450, background: "#081B24FF" }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src={ANCESTER} /> Login
              </Header>
              <Message warning>
                <Icon name='info circle' />
                Versión demo — los datos no se guardan
              </Message>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder='ID' readOnly />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Contraseña'
                    type='password'
                    readOnly
                  />

                  <Button color='teal' fluid size='large' onClick={this.handleLoginClick}>
                    INGRESAR
                  </Button>
                </Segment>
              </Form>
              <Message>
                ¿Nuevo por acá? <button type='button' onClick={this.handleSignupClick} style={{ background: 'none', border: 'none', color: '#4183c4', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>Inscríbete</button>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}
