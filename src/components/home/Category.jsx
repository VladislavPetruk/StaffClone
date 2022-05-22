import React from "react";
import styled from "styled-components";
import test from "../../test.json";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const CategoryTitle = styled.h2``;

const CategoryArticle = styled.article`
  max-height: 500px;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s linear;
  background: var(--color-main);
  img {
    height: 100%;
    width: 100%;
    color: var(--color-bg);
    transition: transform 0.2s linear;
  }

  @media (hover: hover) {
    &:hover img {
      transform: scale(1.05);
      box-shadow: 0 5px 14px 1px rgb(0 0 0 / 20%);
    }
  }
`;

function Category() {

    const first = test.map(el => el.products || null);
    const keyses = Object.values(first);
    // console.log(keyses)

  return (
    <section>
      <Container>
        <CategoryTitle>Category</CategoryTitle>

        <CategoryWrapper>
          {test.map((el) => (
            <CategoryArticle key={el.id}>
              <img src={el.catImage} alt={el.category} />
            </CategoryArticle>
          ))}
        </CategoryWrapper>
      </Container>
    </section>
  );
}

export default Category;
