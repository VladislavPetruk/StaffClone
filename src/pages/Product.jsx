import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import ProductImage from "../components/product/ProductImage";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";

const ProductWrapper = styled.section`
  padding: 50px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;
const ProductDetails = styled.section`
  display: grid;
  grid-template-columns: 45% 55%;
  gap: 40px;
  align-items: center;

  @media (max-width: 991px) {
    grid-template-columns: auto;
    gap: 0px;
  }
`;

function Product() {
  return (
    <>
      <Header />
      <ProductWrapper>
        <Container>
          <ProductDetails>
            <ProductImage />
            <div>
              <ProductInfo />
              <ProductDescription />
            </div>
          </ProductDetails>
        </Container>
      </ProductWrapper>
    </>
  );
}

export default Product;
