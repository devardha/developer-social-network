import React from 'react';
import Styled from '@emotion/styled';

function Field(props) {
    return <FieldStyled {...props} />;
}

const FieldStyled = Styled.div`
    width:100%;
    margin-top:1.25rem;
`;

export default Field;
