import React from 'react'
import styled from 'styled-components';

const ImageWrapper = styled.div`
    width: 50px;
`;

const Img = styled.img`
    max-width: 100%;
    height: auto;
`;

const Logo = ({ alt, imageUrl }) => {
    return (
        <ImageWrapper>
            <Img src={imageUrl} alt={alt} />
        </ImageWrapper>
    )
}

export default Logo
