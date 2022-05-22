import React from 'react';
import Header from "../components/header/Header";
import styled from "styled-components";
import {GrDeliver, GrCycle} from "react-icons/gr";
import {MdPayment, MdGrade} from "react-icons/md";

const CategoryTitle = styled.h2``;

const DeliveryWrapper = styled.section`
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

const DeliveryInfo = styled.div`
`;

const DeliveryList = styled.ul`
  list-style: none;
  font-size: 18px;
  color: var(--color-main);

  li{
    display: flex;
    align-items: flex-start;
    gap: 20px;

    &:not(:last-child){
      margin-bottom: 30px;
    }

    h3{
      margin-top: 0;
    }
  }
`;

const DeliveryIcon = styled.div`
  width: 50px;

  svg{
    font-size: 50px;
    color: var(--color-main);

    path{
      stroke: var(--color-main);
    }
  }
`;

const delivery = [
  {
    "title": "Delivery",
    "icon": <GrDeliver />,
    "description": "Nova Poshta and Justin to any corner of Ukraine for 1-3 days."
  },
  {
    "title": "Payment",
    "icon": <MdPayment />,
    "description": "VISA or Mastercard bank card on our website or upon receipt of the order by cash on delivery."
  },
  {
    "title": "Quality check",
    "icon": <MdGrade />,
    "description": "Receiving the goods in the mail, you have the right before paying for the order, try on, look and evaluate how the quality of the ordered products suits you. Does the size and style suit you, does it meet your expectations."
  },
  {
    "title": "Return product",
    "icon": <GrCycle />,
    "description": "If you do not like the size, color, or you find other problems within 14 days after purchase, you can return the product to us or exchange for another. Delivery is paid by the buyer, in case of return or exchange of goods. Refunds are made within 1-3 working days after we receive the goods returned from you to the Nova Poshta warehouse. In case of lack of production, we pay for delivery."
  },
]

function Delivery() {
  return (
    <>
        <Header />
        <DeliveryWrapper>
          <Container>
            <CategoryTitle>Delivery and payment</CategoryTitle>
            <DeliveryInfo>
              <DeliveryList>
                {delivery.map(el => (
                  <li key={el.title}>
                    <DeliveryIcon>
                      {el.icon}
                    </DeliveryIcon>
                    <div>
                      <h3>{el.title}</h3>
                      <p>{el.description}</p>
                    </div>
                  </li>
                ))}
              </DeliveryList>
            </DeliveryInfo>
          </Container>
        </DeliveryWrapper>
    </>
  )
}

export default Delivery