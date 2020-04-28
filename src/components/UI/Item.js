import React from 'react'
import styled from 'styled-components';

const Li = styled.li`
    padding: .5rem 1rem;
`;

const Item = ({ children }) => {
    return (
        <Li>
            {children}
        </Li>
    )
}

export default Item;
