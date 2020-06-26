import React from 'react';
import Styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

function LandingPage() {
    const head = () => {
        return (
            <Helmet>
                <title>Devspace - Connect Developers Arround The World</title>
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
        <LandingPageStyled>
            {head()}
            <div className="container"></div>
        </LandingPageStyled>
    );
}

const LandingPageStyled = Styled.div`

`;

export default LandingPage;
