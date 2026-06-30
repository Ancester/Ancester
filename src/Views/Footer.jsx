import React from 'react'
import { Container, Segment, Grid, Header, Image } from "semantic-ui-react";
import { withTranslation } from "react-i18next";
import ANCESTER from "../Assets/img/blanco-logo-1.svg";

const Footer = ({ t }) => {
  return (
    <Segment
      inverted
      vertical
      style={{
        padding: '0.5em 0em',
        margin: "0em 0em",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex:2
      }}
    >
      <Container>
        <Grid inverted centered>
          <Grid.Row textAlign='center'>
            <Grid.Column textAlign='center' computer={3} mobile={8} tablet={4}>
              <Header inverted as='h4' content={t("footer.privacy")} />
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header inverted as='h4' content={t("footer.feedback")} />
            </Grid.Column>
            <Grid.Column textAlign='center' only='computer' computer={4}>
              <Image centered size='mini' src={ANCESTER} />
              <p >
                {t("footer.rights")}
              </p>
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header inverted as='h4' content={t("footer.social")} />
            </Grid.Column>
            <Grid.Column computer={3} mobile={8} tablet={4}>
              <Header inverted as='h4' content={t("footer.contact")} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

export default withTranslation()(Footer)