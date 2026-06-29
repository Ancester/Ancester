import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Modal, Icon } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'
import ANCESTER from "../Assets/img/blanco-logo-1.svg"

const DEMO_MODES = {
  NONE: 'none',
  LOGIN: 'login',
  SIGNUP: 'signup'
}

class DemoModal extends Component {
  render() {
    const { open, mode, onClose, t } = this.props
    const isLogin = mode === DEMO_MODES.LOGIN

    return (
      <Modal open={open} onClose={onClose} size='small' dimmer='blurring'>
        <Modal.Header style={{ background: '#081B24', color: '#fff', textAlign: 'center' }}>
          <Icon name='code' /> {t('login.demoModalTitle')}
        </Modal.Header>
        <Modal.Content style={{ textAlign: 'center', padding: '2em' }}>
          <Icon
            name={isLogin ? 'user circle' : 'user plus'}
            size='huge'
            style={{ color: '#00b5ad', marginBottom: '0.5em' }}
          />
          <Header as='h2' style={{ color: '#081B24' }}>
            {isLogin ? t('login.demoModalLoginHeader') : t('login.demoModalSignupHeader')}
          </Header>
          <p style={{ fontSize: '1.1em', color: '#555', lineHeight: 1.6 }}>
            <Icon name='info circle' color='teal' />
            {t('login.demoModalInfo')}
            <br /><br />
            {isLogin
              ? t('login.demoModalLoginDesc')
              : t('login.demoModalSignupDesc')
            }
          </p>
          <Message info>
            <Message.Header>{t('login.demoModalDevHeader')}</Message.Header>
            <p>
              {t('login.demoModalDevText')}
            </p>
          </Message>
          <div style={{ marginTop: '1.5em' }}>
            <Button color='teal' onClick={onClose}>
              <Icon name='check' /> {t('login.understood')}
            </Button>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

class LoginContainer extends Component {
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
    const { t } = this.props

    return (
      <div>
        <DemoModal
          open={demoMode !== DEMO_MODES.NONE}
          mode={demoMode}
          onClose={this.handleCloseModal}
          t={t}
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
                <Image src={ANCESTER} /> {t('login.title')}
              </Header>
              <Message warning>
                <Icon name='info circle' />
                {t('login.demoWarning')}
              </Message>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' placeholder={t('login.idPlaceholder')} readOnly />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder={t('login.passwordPlaceholder')}
                    type='password'
                    readOnly
                  />

                  <Button color='teal' fluid size='large' onClick={this.handleLoginClick}>
                    {t('login.loginButton')}
                  </Button>
                </Segment>
              </Form>
              <Message>
                {t('login.newHere')} <button type='button' onClick={this.handleSignupClick} style={{ background: 'none', border: 'none', color: '#4183c4', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>{t('login.signUp')}</button>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withTranslation()(LoginContainer)
