import React from "react";
import Header from "../components/header/Header";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const city = [
  {
    id: 1,
    title: "Kyiv",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162589.54343723078!2d30.34830013611877!3d50.451128155975724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1650980141743!5m2!1sru!2sua",
  },
  {
    id: 2,
    title: "Lviv",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82352.67119103651!2d23.942024354422298!3d49.83266784582839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1650980706776!5m2!1sru!2sua",
  },
  {
    id: 3,
    title: "Kharkiv",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164153.52370865352!2d36.145399000599326!3d49.9945066122313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a09f63ab0f8b%3A0x2d4c18681aa4be0a!2z0KXQsNGA0YzQutC-0LIsINCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2sua!4v1650980776612!5m2!1sru!2sua",
  },
  {
    id: 4,
    title: "Dnipro",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d169325.0410854799!2d34.85993052519629!3d48.462213085229145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe303fd08468f%3A0xa1cf3d5f2c11aba!2z0JTQvdC10L_RgCwg0JTQvdC10L_RgNC-0L_QtdGC0YDQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1sru!2sua!4v1650980814749!5m2!1sru!2sua",
  },
  {
    id: 5,
    title: "Odesa",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d175899.85599285178!2d30.57136128812811!3d46.45988606897576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHRgdCwLCDQntC00LXRgdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2NTAwMA!5e0!3m2!1sru!2sua!4v1650980861917!5m2!1sru!2sua",
  },
  {
    id: 6,
    title: "Rivne",
    address:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81019.62088675529!2d26.173956232736884!3d50.61108035178567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6caa2d7c89d7%3A0x27481abdbc4e484!2z0KDQvtCy0L3Qviwg0KDQvtCy0LXQvdGB0LrQsNGPINC-0LHQu9Cw0YHRgtGM!5e0!3m2!1sru!2sua!4v1650980901985!5m2!1sru!2sua",
  },
];

const ShopsWrapper = styled.section`
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

const TabsStyled = styled(Tabs)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TabListStyled = styled(TabList)`
  flex: 1;
  @media (max-width: 768px) {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;

const TabStyled = styled(Tab)`
  font-size: 30px;
  line-height: 45px;
  color: var(--color-main);
  cursor: pointer;

  &.react-tabs__tab--selected {
    text-decoration: underline;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;

const Map = styled.div`
  flex: 1;
`;

const CategoryTitle = styled.h2``;

function Shops() {
  return (
    <>
      <Header />
      <ShopsWrapper>
        <Container>
          <CategoryTitle>Shops</CategoryTitle>
          <TabsStyled>
            <TabListStyled>
              {city.map((el) => (
                <TabStyled key={el.id}>{el.title}</TabStyled>
              ))}
            </TabListStyled>

            <Map>
              {city.map((el) => (
                <TabPanel key={el.id}>
                  <iframe
                    title={el.title}
                    src={el.address}
                    width="100%"
                    height="400"
                    style={{ border: 0,  borderRadius: "5px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </TabPanel>
              ))}
            </Map>
          </TabsStyled>
        </Container>
      </ShopsWrapper>
    </>
  );
}

export default Shops;
