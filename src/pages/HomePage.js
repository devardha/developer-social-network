import React from 'react';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import ToFollow from '../components/ToFollow';
import WriteStatus from '../components/WriteStatus';
import Feeds from '../components/Feeds';
import data from '../assets/dummyData.json';
import PopularTopics from '../components/widget/PopularTopic';
import PopularForums from '../components/widget/PopularForum';

function HomePage() {
    const head = () => {
        return (
            <Helmet>
                <title>Home - Devspace</title>
                <meta
                    name="description"
                    content="Space where developers show their works and help each other to grow."
                />
                <meta name="og:title" content="Home - MyDevSpace" />
                <meta
                    name="og:description"
                    content="Space where developers show their works and help each other to grow."
                />
                <meta
                    name="og:image"
                    content="https://miro.medium.com/max/1200/1*aLg1-G2UAlaKpBopRnmCRg.png"
                />
            </Helmet>
        );
    };

    return (
        <HomePageStyled>
            {head()}
            <div className="container">
                <div css={sideContent}>
                    <PopularTopics />
                    <PopularForums />
                </div>
                <main css={mainContent}>
                    {data.map((user, index) => (
                        <Feeds
                            key={index}
                            name={user.name}
                            username={user.username}
                            body={user.body}
                            date={user.post_date}
                            profile_picture={user.profile_picture}
                        />
                    ))}
                </main>
                <div css={sideContent}>
                    <ToFollow />
                </div>
            </div>
        </HomePageStyled>
    );
}

const sideContent = {
    width: '300px',
    margin: '0 5px',
};

const mainContent = {
    margin: '0 1rem',
    width: '540px',
};

const HomePageStyled = Styled.div`
    .container{
        justify-content:center;
    }
`;

export default HomePage;
