import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";

const CooperationWrapper = styled.section`
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

const CategoryTitle = styled.h2``;
const CooperationInfo = styled.div`
  font-size: 18px;
  color: var(--color-main);
  ul{
    margin-left: 15px;
    list-style: inherit;
  }
`;

function Cooperation() {
  return (
    <>
      <Header />
      <CooperationWrapper>
        <Container>
          <CategoryTitle>Cooperation</CategoryTitle>
          <CooperationInfo>
            <p>
              We are a Ukrainian clothing brand, 80% of our range is made in our
              own shops in Ukraine, which allows us to adhere to the policy of
              affordable prices and excellent quality.
            </p>
            <p>
              <b>Some facts about us:</b>
            </p>
            <ul>
              <li>
                at least one or two of your acquaintances or friends dress with
                us;
              </li>
              <li>
                we are confident that the value for money of the Staff brand is
                better than that of any of the brands you know;
              </li>
              <li>
                From 2014 to date, we have opened 16 stores in Ukraine, and we
                did not have a strategy for serious development of the network,
                we did not set such a goal. Physical stores opened if the city
                had many requests from customers who wanted to come to see or
                measure and we satisfied them;
              </li>
              <li>
                none of Just Do It's stores in history have closed. There have
                been cases of moving to another convenient location or more
                spacious premises, but all stores are successfully operating and
                developing. This means that if you make a purchase once, you
                will mostly become our regular customer;
              </li>
              <li>
                we support sports (mostly martial arts), artists and other
                creative people (we draw on jeans, we are constantly looking for
                talented people with cool ideas for cooperation and
                collaborations, we work with those who draw prints, patterns,
                etc.);
              </li>
              <li>
                we have a great team! Our designers are constantly generating
                cool ideas, the IT department has developed the most convenient
                site and application for you, marketing delights with excellent
                content, all management is sharpened to ensure that the customer
                is satisfied. Production, using only the highest quality
                fabrics, accessories and new equipment, works exclusively on
                quality.
              </li>
            </ul>
            <p>
              <b>How can you cooperate with us?</b>
            </p>
            <p>
              We are most interested in development abroad. If you see the
              prospect of the Staff brand in your country, in a city outside
              Ukraine, if you sell clothes and want to see our brand in your
              store, on the website or just planning to open a store - write to
              us. We will provide better conditions for cooperation, we do not
              need to pay for the franchise and we are confident that Staff
              should be available not only in Ukraine.
            </p>
            <p>
              We also plan to open a number of stores in Ukraine. If you live in
              a city where there is no our store and you would like to become
              our partner - open a Staff store - write to us by mail
            </p>
            <p>
              If you have ideas on how to make our brand better, create a new
              product, draw cool or have ideas for prints, you are a supplier of
              new fabrics or technologies, if you are a future champion in any
              sport and you need support - write to us at mail
            </p>
            <p>
              If you want to sell Staff products under the "dropshipping"
              scheme, write a letter to the mail, provide a link to the trading
              floor, the number of subscribers or traffic and wait for a
              response.
            </p>
            <p><b>We value each of our clients.</b></p>
            <p><b>Thank you for being with us!</b></p>
          </CooperationInfo>
        </Container>
      </CooperationWrapper>
    </>
  );
}

export default Cooperation;
