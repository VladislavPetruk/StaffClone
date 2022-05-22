import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 991px) {
    padding: 0 10px;
  }
`;

const CategoryTitle = styled.h2``;

const SloganInfo = styled.section`
  padding: 100px 0;
  @media (max-width: 991px) {
    padding-bottom: 40px;
  }
`
const Slogan = styled.div`
  position: relative;
  color: var(--color-main);
  text-align: center;
  z-index: 1;

  &::before{
    content: '“';
    position: absolute;
    top: -150px;
    z-index: -1;
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 280px;
    color: var(--color-main);
    opacity: .2;
  }

  h4{
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 8px;
  }

  p{
    font-size: 18px;
    line-height: 24px;
    margin-top: 25px;
  }

  span{
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 1.2px;
    margin-top: 30px;
  }
`;
const MoreInfo = styled.section`
  padding-bottom: 50px;
`
const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media (max-width: 991px) {
    grid-template-columns: auto;
  }
`;

const AboutColumn = styled.div`
  font-size: 15px;
  color: var(--color-main);
  line-height: 30px;
`;

function About() {
  return (
    <>
      <Header />
      <SloganInfo>
        <Container>
          <Slogan>
            <h4>Get better every day</h4>
            <p>- it is a slogan that is synonymous with the Just Do It brand. <br />We love our business</p>
            <span>Best regards, #JustDoIt</span>
          </Slogan>
        </Container>
      </SloganInfo>
      <MoreInfo>
        <Container>
          <CategoryTitle>About us</CategoryTitle>
          <AboutWrapper>
            <AboutColumn>
              The history of Just Do It began in 2013. The founders - energetic
              and creative guys, brothers from a small town in the western part
              of Ukraine - decided to focus their activities on the development
              of Ukrainian streetwear culture. In the autumn of the same year,
              the first release was a park called Just Do It. She became the
              first swallow in the company's wide range of models developed and
              implemented. Ukrainians supported the youth brand and welcomed the
              appearance of new products.
              <br /><br />
              In 2015, the Just Do It brand's collections included both outerwear and
              footwear. The company's credo is a constant movement forward. With
              each release we set new goals and work for maximum results.
            </AboutColumn>
            <AboutColumn>
              By choosing Just Do It, you first and foremost get quality at an
              affordable price. We appreciate each of our customers, we are
              proud of the many positive reviews. Product development and
              production technologies are constantly being improved - our
              customers deserve only the best. We carry out strict control of
              production and selection of fabrics for new clothes.
              <br /><br />
              A team of talented and competent young people, enthusiasts
              of their business, is working hard on the development of the
              Ukrainian clothing brand. Official Just Do It stores are located in
              many cities of Ukraine and their list is constantly expanding. In
              March 2018, we released the women's collection for the first time,
              which was another confirmation that continuous development is the
              main feature of the company.
            </AboutColumn>
          </AboutWrapper>
        </Container>
      </MoreInfo>
    </>
  );
}

export default About;
