import React from 'react';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';
import { ThumbsUp, MessageSquare, Bookmark } from 'react-feather';
import ReactHtmlParser from 'react-html-parser';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_USERS = gql`
    {
        users {
            id
            username
            email
        }
    }
`;

function Feeds({ name, username, body, profile_picture, date }) {
    const { loading, error, data } = useQuery(GET_USERS);

    return (
        <FeedsStyled>
            <div className="feed-header">
                <div className="avatar">
                    <img src={profile_picture} alt="avatar" />
                </div>
                <div
                    css={css`
                        display: flex;
                        flex-direction: column;
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            font-weight: bold;
                        `}
                    >
                        <span className="name">{name}</span>
                        <span className="username">{username}</span>
                    </div>
                    <span className="postdate">{date}</span>
                </div>
            </div>
            <div className="feed-body">{ReactHtmlParser(body)}</div>
            <div className="user-actions">
                <span>
                    <ThumbsUp /> Like
                </span>
                <span>
                    <MessageSquare /> Comment
                </span>
                <span>
                    <Bookmark /> Save
                </span>
            </div>
        </FeedsStyled>
    );
}

const FeedsStyled = Styled.div`
    background-color: #000;
    color: #000;
    border-radius: .5rem;
    padding: .25rem 0;
    border:1px solid rgba(22,24,35,0.12);
    background-color:#fff;
    margin-bottom:1rem;

    .feed-header{
        padding: .5rem 1rem;
        align-items: center;
        display: flex;

        .username{
            color: #f33584;
            margin-left: .3rem;

        }
        .postdate{
            font-size: .8rem;
            color: #777;
            margin-top: .3rem;
        }
    }

    .feed-body{
        border-left:2px solid #f05683;

        p{
            padding: 0 1rem;
            line-height: 1.3rem;
            font-size: .9rem;
            margin: .6rem 0;
        }
    }

    .user-actions{
        padding: 0.5rem .5rem;
        border-top: 1px solid #eee;
        margin-top: 1rem;
        display: flex;
        font-size: .9rem;
        justify-content: space-around;

        span{
            flex: 1 1 auto;
            justify-content: center;
            display: flex;
            margin: 0 .5rem;
            padding: .3rem;
            border-radius: .25rem;
            align-items: center;
            cursor:pointer;

            &:hover{
                background-color: #f0f1f3;
            }

            svg{
                width: 1.2rem;
                margin-right: .5rem;
            }
        }
    }

`;

export default Feeds;
