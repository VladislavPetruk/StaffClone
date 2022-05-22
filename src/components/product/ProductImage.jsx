import React from 'react';
import Img from "../../assets/img/products/1.jpeg";
import styled from "styled-components";

const ImageWrapper = styled.div`
  
`;

function ProductImage() {
  return (
    <ImageWrapper>
        <img src={Img} alt="test" />
    </ImageWrapper>
  )
}

export default ProductImage