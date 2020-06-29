import React from 'react';
import Styled from '@emotion/styled';

function Label(props) {
    return (
        <LabelStyled>
            <label {...props} />
            {props.error && <span>{props.error}</span>}
        </LabelStyled>
    );
}

const LabelStyled = Styled.div`
    display:flex;
    justify-content:space-between;

    label{
        color:#666;
        font-size:.9rem;
    }

    span{
        color:#f33584;
        font-size:.8rem;
    }
`;

export default Label;
