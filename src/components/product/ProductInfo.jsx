import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import Buttons from "./Buttons";

const Info = styled.div`
  margin-bottom: 30px;
  color: var(--color-main);
`;

const ProductTitle = styled.h1`
  font-size: 40px;
  @media (max-width: 568px) {
    font-size: 32px;
  }
`;

const ProductCodes = styled.div`
  span {
    text-transform: uppercase;
    letter-spacing: 1px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 30px 0;
`;

const ProductDelivery = styled(Link)`
  text-decoration: underline;
`;

const ProductShare = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 30px;

  span{
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 600;
  }

  svg{
      font-size: 20px;
  }

  @media (max-width: 568px) {
    gap: 10px;
  }
`;

function ProductInfo() {
  return (
    <Info>
      <ProductTitle>Футболка Staff turquoise basic oversize</ProductTitle>
      <ProductCodes>
        <span>Article: OTD0492</span>
        <span>Category: Outerwear</span>
      </ProductCodes>
      <ProductPrice>340 $</ProductPrice>
      <Buttons />
      <ProductDelivery to="/delivery-and-payment">Delivery and payment</ProductDelivery>
      <ProductShare>
        <span>Share:</span>
        <a href="https://telegram.org/" target="_blank" rel="noreferrer">
          <BsTelegram />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
      </ProductShare>
    </Info>
  );
}

export default ProductInfo;
