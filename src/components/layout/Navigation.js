import React from 'react'
import styled from 'styled-components';

const NavWrapper = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items : center;
    padding: 2rem 1rem;
`;

const Navigation = ({ children }) => {
    return (
        <NavWrapper>
            {children}
        </NavWrapper>
    )
}

export default Navigation
