import React from 'react'
import { Grid, Image, Segment, Container, Card, Pagination } from 'semantic-ui-react'
import Banner from '../Assets/img/Home/banner-ancester-academy.svg'
import SearchStandard from './AcademySearch';
const src = 'https://react.semantic-ui.com/images/wireframe/image.png'

const AncesterAcademyHome = () => {
    return (
        <Container fluid>
            <Image src={Banner} height='100' fluid />
            <Segment.Group horizontal>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>DISEÑOS 3D</b>
                </Segment>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>NEGOCIOS</b>
                </Segment>
                <Segment inverted style={{ backgroundColor: '#081B24FF' }}>
                    <b>CREACIÓN DE VIDEOJUEGOS</b>
                </Segment>
            </Segment.Group>
            <Grid>
                <Grid.Column floated='right' width={5}>
                    <SearchStandard />
                </Grid.Column>
            </Grid>
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
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
        </Container>
    )
}

export default AncesterAcademyHome
