import React from 'react';
import Styled from '@emotion/styled';

function Button(props) {
    return <ButtonStyled {...props} />;
}

const ButtonStyled = Styled.button`
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 2rem;
    padding: .75rem 1.25rem;
    font-size:.9rem;
    cursor:pointer;
`;

export default Button;
