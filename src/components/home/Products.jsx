import React from "react";
import styled from "styled-components";
import Img1 from "../../assets/img/products/1.jpeg";
import Img2 from "../../assets/img/products/2.jpeg";
import { Link } from "react-router-dom";


const Section = styled.section`
    padding: 20px 0 50px;
`
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const CategoryTitle = styled.h2``;

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 568px) {
    grid-template-columns: auto;
  }
`;

const ProductArticle = styled.article`
  border-radius: 5px;
  overflow: hidden;
  background: var(--color-bg);
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
  transition: transform 0.2s linear;
  @media (max-width: 992px) {
    height: auto;
  }
  img {
    height: 100%;
    width: 100%;
    color: var(--color-bg);
    transition: transform 0.2s linear;
  }

  @media (hover: hover) {
    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const ProductInfo = styled.div`
  height: 50px;
  margin-top: 10px;
`;

const Title = styled.h6`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 25px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-main);
`;

const Price = styled.span`
  font-size: 14px;
  color: var(--color-main);
`;

function Products() {
  return (
    <Section>
      <Container>
        <CategoryTitle>Products</CategoryTitle>
        <ProductsWrapper>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img1} alt="prod 1" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>T-shirt Staff dragon oversize</Title>
              </Link>
              <Price>350 $</Price>
            </ProductInfo>
          </ProductArticle>
          <ProductArticle>
            <Image>
              <Link to="/">
                <img src={Img2} alt="prod 2" />
              </Link>
            </Image>
            <ProductInfo>
              <Link to="/">
                <Title>Shoulder bag Staff lines2</Title>
              </Link>
              <Price>320 $</Price>
            </ProductInfo>
          </ProductArticle>
        </ProductsWrapper>
      </Container>
    </Section>
  );
}

export default Products;
