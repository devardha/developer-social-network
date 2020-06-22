import React from 'react';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';

function ToFollow() {
    return (
        <EmotionStyled>
            <div className="widget-header">
                <h2>Account To Follow</h2>
            </div>
            <ul>
                <li>
                    <div className="avatar">
                        <img
                            src="https://avatars2.githubusercontent.com/u/59217768?s=460&u=50eeaffa0e1ec4afc5e16c991ed85db955b7dc2b&v=4"
                            alt="avatar"
                        />
                    </div>
                    <div className="user-details">
                        <span
                            css={css`
                                font-weight: bold;
                            `}
                        >
                            Ardha Yudhatama
                        </span>
                        <span
                            css={css`
                                color: #777;
                                margin-top: 0.25rem;
                                font-size: 0.9rem;
                            `}
                        >
                            @devardha
                        </span>
                    </div>
                </li>
                <li>
                    <div className="avatar">
                        <img
                            src="https://instagram.fsub2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/88457999_3533330733405674_5767196151363141632_n.jpg?_nc_ht=instagram.fsub2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=q0GhTvy54T4AX-FgTLA&oh=6355c5a90f65dd798cec9aa62d80950b&oe=5F1B1BA6"
                            alt="avatar"
                        />
                    </div>
                    <div className="user-details">
                        <span
                            css={css`
                                font-weight: bold;
                            `}
                        >
                            R Bintang
                        </span>
                        <span
                            css={css`
                                color: #777;
                                margin-top: 0.25rem;
                                font-size: 0.9rem;
                            `}
                        >
                            @stackoverprof
                        </span>
                    </div>
                </li>
            </ul>
        </EmotionStyled>
    );
}

const EmotionStyled = Styled.div`
    background-color:#f0f1f3;
    border-radius: .5rem;
    padding: .25rem 0;
    border: 1px solid rgba(22,24,35,0.12);
    background-color:#fff;

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

                .user-details{
                    display:flex;
                    flex-direction:column;
                }
            }
        }
`;

export default ToFollow;
