import React, { Component } from 'react'
import _ from 'lodash'
import faker from 'faker/locale/es'
import { Container, Grid, Image, Segment, Card, Icon, Header, Button, Rating, Form, Select, Pagination } from 'semantic-ui-react'
import { withTranslation } from 'react-i18next'
import MarketplaceBanner from '../Assets/img/Marketplace/marketplace.svg'
import SearchCategory from '../Components/SearchBox';

const CATEGORY_VALUES = {
  weapons: 'Armas',
  scenarios: 'Escenarios',
  effects: 'Efectos',
  characters: 'Personajes',
  skins: 'Vestuarios',
};

const CATEGORY_IDS = Object.keys(CATEGORY_VALUES);

const hashCode = (str) => {
    let hash = 5381
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) ^ str.charCodeAt(i)
    }
    return Math.abs(hash)
}

const buildPollinationsUrl = (title, category) => {
    const prompt = `${title}, ${category} game asset`
    const seed = hashCode(title)
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&seed=${seed}`
}

class PollinatedImage extends Component {
    constructor(props) {
        super(props)
        this.state = { src: props.src }
    }

    handleError = () => {
        this.setState({ src: this.props.fallback })
    }

    render() {
        return <Image src={this.state.src} className={this.props.className} onError={this.handleError} />
    }
}

class Marketplace extends Component {
    constructor(props) {
        super(props)

        this.state = {
            source: {}
        }
    }

    render() {
        const { activeCategory, selectedCategories, source } = this.state
        const { t } = this.props
        const filterOptions = [
            { key: 'weapons', text: t('marketplace.weapons'), value: 'weapons' },
            { key: 'scenarios', text: t('marketplace.scenarios'), value: 'scenarios' },
            { key: 'effects', text: t('marketplace.effects'), value: 'effects' },
            { key: 'characters', text: t('marketplace.characters'), value: 'characters' },
            { key: 'skins', text: t('marketplace.skins'), value: 'skins' },
            { key: 'other', text: t('marketplace.other'), value: 'other' },
            { key: 'all', text: t('marketplace.all'), value: 'all' },
        ]
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
                                        placeholder={t('marketplace.filters')}
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
                <Grid centered>
                    <Grid.Column width={15}>
                        {Object.keys(source).map(catKey => {
                            const section = source[catKey].results.map(item => {
                                return (
                                    <Card key={item.title+Math.random()}>
                                        <div className={'ui slide masked reveal image'} style={{ zIndex: 0 }}>
                                            <PollinatedImage src={item.image} fallback={src} className={'visible content'} />
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
                                            <Button animated='fade'>
                                                <Button.Content visible><Icon name='shopping cart' /> {t('marketplace.buy')}</Button.Content>
                                                <Button.Content hidden>{item.price}</Button.Content>
                                            </Button>
                                            <Rating icon='heart' defaultRating={(Math.random() * 10) / 2} maxRating={5} />
                                        </Card.Content>
                                    </Card>
                                )
                            }
                            )
                            return (
                                <Container fluid key={catKey}>
                                    <Header>{t(`marketplace.${catKey}`) || catKey}</Header>
                                    <Card.Group itemsPerRow={5}>
                                        {section}
                                    </Card.Group>
                                </Container>
                            )
                        }
                        )}
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
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
                <Grid centered>
                    <Button animated color='facebook' size='huge'>
                        <Button.Content visible>{t('marketplace.wantToSell')}</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
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
            this.setState({ source })
        }
        else {
            const catValue = CATEGORY_VALUES[value] || value
            const section = {
                name: value,
                results: getResults(catValue),
            }
            this.setState({ source: { [value]: section } })
        }
    }
}

const src = 'https://react.semantic-ui.com/images/wireframe/image.png'
const getResults = (category) =>
    _.times(5, () => {
        const title = faker.random.words()
        return {
            title,
            description: faker.hacker.phrase(),
            image: buildPollinationsUrl(title, category),
            price: faker.finance.amount(0, 100, 2, '$'),
        }
    })

const source = _.range(0, CATEGORY_IDS.length).reduce((memo, id) => {
    const catKey = CATEGORY_IDS[id]
    memo[catKey] = {
        name: catKey,
        results: getResults(CATEGORY_VALUES[catKey]),
    }
    return memo
}, {})

export default withTranslation()(Marketplace)
