import React from 'react';
import Styled from '@emotion/styled';
import Image from '../assets/images/error-bw.png';

export default function ({ staticContext = {} }) {
    staticContext.status = 404;

    return (
        <NotFoundStyled>
            <div className="container">
                <div className="image-container">
                    <img src={Image} alt="Page Not Found" />
                </div>
            </div>
        </NotFoundStyled>
    );
}

const NotFoundStyled = Styled.div`
    .container{
        justify-content:center;
        align-items:center;

        .image-container{
            height:500px;
            width:500px;
            position:relative;
            text-align:center;

            img{
                height:100%;
                width:100%;
                object-fit:contain;
            }
        }
    }
`;
