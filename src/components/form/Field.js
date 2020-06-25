import React from 'react'
import Styled from '@emotion/styled'

function Field(props){
    return(
        <FieldStyled {...props} />
    )
}

const FieldStyled = Styled.div`
    width:100%;
`

export default Field;