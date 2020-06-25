import React from 'react';
import Styled from '@emotion/styled';

function Input(props) {
    return <InputStyled {...props} />;
}

const InputStyled = Styled.input`
    width:100%;
    height:40px;
    border-radius:.3rem;
    border:none;
    border: 1px solid #eee;
    margin-bottom:1.25rem;
    margin-top:.75rem;
    padding:0 1rem;
    font-size:.9rem;

    &:focus{
        border: 1px solid #aaa;
    }
`;

export default Input;
