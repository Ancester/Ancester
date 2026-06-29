import React, { useState } from 'react'
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

const Contacto = () => {
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
            <Message.Header>Te contactaremos tras revisar tu mensaje</Message.Header>
            <dl>
              <dt>Nombre</dt>
              <dd>{name}</dd>
              <dt>Correo electronico</dt>
              <dd>{email}</dd>
              <dt>Juego</dt>
              <dd>{game}</dd>
              <dt>Mensaje</dt>
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
          Contacto
        </Header>
        <Form onSubmit={handleSubmit}>
          <Form.Field required>
            <label>Nombre</label>
            <Form.Input
              placeholder='Tu nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>Correo electronico</label>
            <Form.Input
              type='email'
              placeholder='tu@correo.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>Juego</label>
            <Form.Select
              placeholder='Selecciona un juego'
              options={GAME_OPTIONS}
              value={game}
              onChange={(e, { value }) => setGame(value)}
              required
            />
          </Form.Field>
          <Form.Field required>
            <label>Mensaje</label>
            <Form.TextArea
              placeholder='Cuentanos tu proyecto o consulta'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Field>
          <Button type='submit' primary size='large' disabled={disabled}>
            Enviar mensaje
          </Button>
        </Form>
      </Segment>
    </Container>
  )
}

export default Contacto
