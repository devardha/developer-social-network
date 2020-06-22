import React from 'react';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';

function PopularTopics() {
    return (
        <PopularTopicsStyled>
            <div className="widget-header">
                <h2>Popular Topic</h2>
            </div>
            <ul>
                <li>Typescript</li>
                <li>React.js</li>
                <li>RxJs</li>
            </ul>
        </PopularTopicsStyled>
    );
}

const PopularTopicsStyled = Styled.div`
    background-color:#f0f1f3;
    border-radius: .5rem;
    padding: .25rem 0;
    border: 1px solid rgba(22,24,35,0.12);
    background-color:#fff;
    margin-bottom:1rem;
    font-size:.9rem;

    ul{
            display:flex;
            flex-direction:column;
            padding:0;
            
            li{
                padding:.75rem 1rem;
                display:flex;
                align-items:center;
                cursor:pointer;

                &:hover{
                    background-color:#f5f6f7;
                    border-right:2px solid #f05683;
                }

            }
        }
`;

export default PopularTopics;
