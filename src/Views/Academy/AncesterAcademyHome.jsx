import React from 'react'
import { Grid, Image, Segment, Container, Card, Pagination } from 'semantic-ui-react'
import { withTranslation } from "react-i18next";
import Banner from '../../Assets/img/Home/banner-ancester-academy.svg'
import SearchStandard from './AcademySearch';
const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

const AncesterAcademyHome = ({ t }) => {
    return (
        <Container fluid>
            <Image src={Banner} height='100' fluid />
            <Segment.Group horizontal>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>{t('academy.design3d')}</b>
                </Segment>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>{t('academy.business')}</b>
                </Segment>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>{t('academy.gameDev')}</b>
                </Segment>
            </Segment.Group>
            <Grid>
                <Grid.Column floated='right' width={5}>
                    <SearchStandard />
                </Grid.Column>
            </Grid>
            <Grid centered>
                <Grid.Column width={15}>
                    <Card.Group itemsPerRow={4}>
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                        <Card raised image={src} />
                    </Card.Group>
                </Grid.Column>
                <Grid.Column floated='right' width={6} >
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                        style={{ backgroundColor: '#081B24FF' }}
                        inverted
                    />
                </Grid.Column>
            </Grid>
            <br />
            <br />
            <br />
            <hr />
        </Container>
    )
}

export default withTranslation()(AncesterAcademyHome)
