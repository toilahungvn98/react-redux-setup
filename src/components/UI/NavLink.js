import React  from 'react';
import { NavLink} from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'nav-link-active';

const LinkWrapper = styled(NavLink).attrs({ activeClassName })`
    display: block;
    font-weight: var(--font-weight-medium);
    &:active,
    &:visited {
        color: var(--color-dark);
    }
    &.${activeClassName} {
        color : red;
    }
`;



const NLink = ({ children , to , exact }) => {

    return (
        <LinkWrapper exact={ exact ? exact : false} to={to} >
            {children}
        </LinkWrapper>
    )
}

export default NLink;
