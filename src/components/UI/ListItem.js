import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    font-size: 1.6rem;
`;

const ListItem = ({ children }) => {
    return (
        <Ul>
            { children }
        </Ul>
    )
}

export default ListItem;
