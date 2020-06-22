import React from 'react';
import Styled from '@emotion/styled';
import { css } from '@emotion/core';
import Button from './Button';

function WriteStatus() {
    return (
        <WriteStatusStyled>
            <div css={write}>
                <div className="avatar">
                    <img
                        src="https://avatars2.githubusercontent.com/u/59217768?s=460&u=50eeaffa0e1ec4afc5e16c991ed85db955b7dc2b&v=4"
                        alt="avatar"
                    />
                </div>
                <textarea></textarea>
            </div>
            <Button
                className="btn-primary"
                css={css`
                    margin-right: 1rem;
                    margin-top: 0.5rem;
                `}
            >
                Send
            </Button>
        </WriteStatusStyled>
    );
}

const write = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 1rem',
    alignItems: 'center',
    width: '100%',
};

const WriteStatusStyled = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    border: 1px solid rgba(22,24,35,0.12);
    background-color:#fff;
    padding: 1rem 0;
    border-radius:.5rem;

    textarea{
        height: 50px;
        flex-grow: 1;
        border-radius: 1.25rem;
        border: none;
        padding: .5rem 1rem;
        background: #f5f6f7;
        resize:none;
    }
`;

export default WriteStatus;
