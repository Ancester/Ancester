import React from 'react'
import { Header, Container, Segment, Image, Grid } from "semantic-ui-react";
import { withTranslation } from "react-i18next";
import Ancester from '../../Assets/img/Sponsor/ancester.svg'
import Conect from '../../Assets/img/Sponsor/conect.png'
import Description from '../../Assets/img/Sponsor/description.svg'
import Step1 from '../../Assets/img/Sponsor/paso1.svg'
import Step2 from '../../Assets/img/Sponsor/paso2.svg'
import Step3 from '../../Assets/img/Sponsor/paso3.svg'

const Sponsor = ({ t }) => {
    return (
        <Container fluid
            style={{
                backgroundColor: 'rgb(48, 45, 88)',
                minHeight: '90%',
                height: '100%',
                marginBottom: '50px'
            }}
        >
            <div style={{
                backgroundImage: "url(" + Ancester + ")",
                backgroundRepeat: 'no-repeat',
                minHeight: '50%',
                height: '300px'
            }}>
                <Container text>
                    <br />
                    <Header as='h1' inverted textAlign='center'><b>{t('services.sponsorHeader')}</b></Header>
                    <br />
                    <Grid centered>
                        <Image src={Description} height='200' />
                    </Grid>
                </Container>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <Header as='h3' inverted textAlign='center'>{t('services.requirements')}</Header>
                <Grid columns={3} doubling padded relaxed='very'>
                    <Grid.Column>
                        <Image src={Step1} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={Step2} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={Step3} />
                    </Grid.Column>
                </Grid>
                <Grid centered>
                    <Image src={Conect} height='100' />
                </Grid>
                <Container text>
                    <br />
                    <Segment style={{ backgroundColor: 'rgb(42, 39, 77)' }} inverted>
                        {t('services.moreInfo')}
                </Segment>
                </Container>
                <br />
                <br />
            </div>
        </Container>
    )
}

export default withTranslation()(Sponsor)
