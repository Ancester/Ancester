import React, { Component } from 'react'
import _ from 'lodash'
import faker from 'faker/locale/es'
import { Container, Grid, Image, Segment, Card, Icon, Header, Button, Rating, Form, Select, Pagination } from 'semantic-ui-react'
import MarketplaceBanner from '../Assets/img/Marketplace/marketplace.svg'
import Sell from '../Assets/img/Marketplace/vender.png'
import SearchCategory from '../Components/SearchBox';

export default class Marketplace extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: ['Armas', 'Escenarios', 'Efectos', 'Personajes', 'Vestuarios'], source: {}
        }
    }

    render() {
        const { source } = this.state
        console.log(source)
        return (
            <div>
                <Container fluid style={{
                    marginTop: "-2em",
                    marginBotton: '2em'
                }}>
                    <Grid centered>
                        <Grid.Column>
                            <Image src={MarketplaceBanner} fluid />
                        </Grid.Column>
                    </Grid>
                </Container>
                <Grid centered>
                    <Grid.Column width={9}>
                        <Segment inverted style={{ zIndex: 1 }}>
                            <Grid centered>
                                <Form inverted>
                                    <Form.Field
                                        control={Select}
                                        options={filterOptions}
                                        placeholder='Filtros'
                                        search
                                        onChange={this.handleChange}
                                    />
                                </Form>
                                <SearchCategory source={source} />
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <br />

                {Object.keys(source).map(cat => {
                    const section = source[cat].results.map(item => {
                        return (
                            <Card key={item.title}>
                                <div className={'ui slide masked reveal image'} style={{ zIndex: 0 }}>
                                    <Image src={item.image} className={'visible content'} />
                                    <Image src={src} className={'hidden content'} />
                                </div>
                                <Card.Content>
                                    <Card.Header textAlign={'center'}>
                                        {item.title}
                                    </Card.Header>
                                    <Card.Meta>Joined in 2016</Card.Meta>
                                    <Card.Description>{item.description}</Card.Description>

                                </Card.Content>
                                <Card.Content extra>
                                    <Button>
                                        <Icon name='shopping cart' />
                                        {item.price}
                                    </Button>
                                    <Rating icon='heart' defaultRating={(Math.random() * 10) / 2} maxRating={5} />
                                </Card.Content>
                            </Card>
                        )
                    }
                    )
                    return (
                        <Container fluid key={source[cat].name}>
                            <Header>{source[cat].name}</Header>
                            <Card.Group itemsPerRow={5}>
                                {section}
                            </Card.Group>
                        </Container>
                    )
                }
                )}
                <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10}
            />
                <br />
                <Grid centered>
                    <Image src={Sell} />
                </Grid>
                <br />
                <hr />
                <br />
            </div >
        )
    }

    componentDidMount() {
        this.setState({ source })
    }

    handleChange = (e, { name, value }) => {
        if (value === 'all') {
            this.setState({ [name]: ['Armas', 'Escenarios', 'Efectos', 'Personajes', 'Vestuarios'], source })
        }
        else {
            const source = {
                name: value,
                results: getResults(),
            }
            this.setState({ [name]: [value], source: { [value]: source } })
        }
    }
}

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'
const filterOptions = [
    { key: 'weapon', text: 'Armas', value: 'Armas' },
    { key: 'maps', text: 'Escenarios', value: 'Escenarios' },
    { key: 'effects', text: 'Efectos', value: 'Efectos' },
    { key: 'characters', text: 'Personajes', value: 'Personajes' },
    { key: 'skins', text: 'Vestuarios', value: 'Vestuarios' },
    { key: 'other', text: 'Otros', value: 'Otros' },
    { key: 'all', text: 'Todos', value: 'all' },
]
const getResults = () =>
    _.times(5, () => ({
        title: faker.random.words(),
        description: faker.hacker.phrase(),
        image: faker.image.image(),
        price: faker.finance.amount(0, 100, 2, '$'),
    }))

const source = _.range(0, 3).reduce((memo, id) => {

    const name = ['Armas', 'Escenarios', 'Efectos', 'Personajes', 'Vestuarios'][id]

    // eslint-disable-next-line no-param-reassign
    memo[name] = {
        name,
        results: getResults(),
    }

    return memo
}, {})