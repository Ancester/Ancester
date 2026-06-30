import React, { useState } from 'react'
import { withTranslation } from 'react-i18next'
import { Container, Header, Segment, Form, Button, Message } from "semantic-ui-react"

const GAME_OPTIONS = [
  'Gunz',
  'Las Flores City',
  'Shadow Realm',
  'Neon Drift',
  'Otros'
].map(game => ({
  key: game,
  text: game,
  value: game
}))

const Contacto = ({ t }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [game, setGame] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const disabled = !name || !email || !game || !message

  const handleSubmit = (e) => {
    e.preventDefault()
    if (disabled) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Container style={{ padding: '3em 0' }}>
        <Segment stacked>
          <Message success>
            <Message.Header>{t('contacto.successTitle')}</Message.Header>
            <dl>
              <dt>{t('contacto.nameLabel')}</dt>
              <dd>{name}</dd>
              <dt>{t('contacto.emailLabel')}</dt>
              <dd>{email}</dd>
              <dt>{t('contacto.gameLabel')}</dt>
              <dd>{game}</dd>
              <dt>{t('contacto.messageLabel')}</dt>
              <dd>{message}</dd>
            </dl>
          </Message>
        </Segment>
      </Container>
    )
  }

  return (
    <Container style={{ padding: '3em 0' }}>
      <Segment stacked>
        <Header as='h1' inverted textAlign='center' style={{ background: 'rgb(42, 39, 77)', padding: '1em 0 0.5em', marginBottom: '1em' }}>
          {t('contacto.title')}
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>{t('contacto.nameLabel')}</label>
            <Form.Input
              placeholder={t('contacto.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>{t('contacto.emailLabel')}</label>
            <Form.Input
              type='email'
              placeholder={t('contacto.emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>{t('contacto.gameLabel')}</label>
            <Form.Select
              placeholder={t('contacto.gamePlaceholder')}
              options={GAME_OPTIONS}
              value={game}
              onChange={(e, { value }) => setGame(value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>{t('contacto.messageLabel')}</label>
            <Form.TextArea
              placeholder={t('contacto.messagePlaceholder')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Field>
          <Button type='submit' primary size='large' disabled={disabled}>
            {t('contacto.submitButton')}
          </Button>
        </Form>
      </Segment>
    </Container>
  )
}

export default withTranslation()(Contacto)
