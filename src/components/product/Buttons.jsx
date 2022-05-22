import React from "react";
import styled from "styled-components";


const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 30px;

  @media (max-width: 568px) {
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ButtonCart = styled.button`
  padding: 12px 30px;
  background: var(--color-main);
  color: var(--color-bg);
`;

const ButtonFavorite = styled(ButtonCart)`
`;

function Buttons() {
  return (
    <ButtonWrapper>
      <ButtonCart>Add to cart</ButtonCart>
      <ButtonFavorite>Add to favorites</ButtonFavorite>
    </ButtonWrapper>
  );
}

export default Buttons;
