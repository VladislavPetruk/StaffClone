import React from "react";
import styled from "styled-components";

const ProductDescr = styled.div`
  color: var(--color-main);
`;
const TitleDescr = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

const TextDescr = styled.div`
  font-size: 18px;
  letter-spacing: 1.5px;
`;

function ProductDescription() {
  return (
    <ProductDescr>
      <TitleDescr>Description:</TitleDescr>
      <TextDescr>
        <p>
          Comfortable classic free-cut shorts with patch pockets will
          successfully complement your summer look.{" "}
        </p>
        <p>Material:</p>
        <ul>
          <li>- high-quality European 100% cotton.</li>
        </ul>
        <p>Details and cut:</p>
        <ul>
          <li>- classic cut;</li>
          <li>- two large patch pockets on the front;</li>
          <li>- a tag with the Staff logo sewn on a pocket;</li>
          <li>
            - an elastic belt in a hem on a lace for reliable landing on a
            figure.
          </li>
        </ul>
      </TextDescr>
    </ProductDescr>
  );
}

export default ProductDescription;
