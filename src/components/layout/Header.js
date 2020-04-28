import React from 'react'
import styled from 'styled-components';


const HeaderWrapper = styled.header`
    width: 100%;
    border-bottom: 1px solid var(--shadow-color-dark);
    /* box-shadow : 0px 2px 25px 0px var(--shadow-color-dark); */
`;


const Header = ({ children }) => {

    return (
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    )
}

export default Header
