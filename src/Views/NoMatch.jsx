import React from 'react'
import { Link } from "react-router-dom";
import { Header, Icon } from "semantic-ui-react";
import { withTranslation } from "react-i18next";

const NoMatch = ({ t }) => {
    return (
        <div style={{backgroundColor:'#555'}}>
            <br/>
            <Header as='h2' icon textAlign='center'>
                <Icon name='ban' />
                <Header.Content>{t('notFound.message')}</Header.Content>
            </Header>
            <Header as='h2' textAlign='center'>
                <Link to="/">
                    <Icon name='home' />
                <Header.Content>{t('notFound.home')}</Header.Content>
                </Link>
            </Header>

        </div>
    )
}

export default withTranslation()(NoMatch)
