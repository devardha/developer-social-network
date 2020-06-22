import React from 'react';
import Styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

function ProfilePage() {
    const head = () => {
        return (
            <Helmet>
                <title>Profile - Devspace</title>
                <meta
                    name="description"
                    content="Space where developers show their works and help each other to grow."
                />
                <meta name="og:title" content="Profile - MyDevSpace" />
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
        <ProfilePageStyled>
            {head()}
            <div className="container">
                <h1>User Page</h1>
            </div>
        </ProfilePageStyled>
    );
}

const ProfilePageStyled = Styled.div`

`;

export default ProfilePage;
