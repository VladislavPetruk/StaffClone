import React from "react";
import styled from "styled-components";
import {BsFillTelephoneFill} from 'react-icons/bs';
import { Link } from "react-router-dom";
import nav from "../../nav.json";

const Wrapper = styled.div`
  background-color: var(--color-bg-add);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  @media (max-width: 991px) {
    justify-content: center;
    padding: 10px;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    display: none;
  }
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 18px;
  }

  a{
    font-size: 13px;
    letter-spacing: 1.1px;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--color-main-add);
  }
`;

const PhonesWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled(BsFillTelephoneFill)`
  color: var(--color-main-add);
  margin-right: 20px;
`;

const Phones = styled.div`
    
`;

const PhonesLink = styled.a`
  font-size: 12px;
  color: var(--color-main-add);
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

function HeaderTop() {
  return (
    <Wrapper>
      <Container>
        <List>
          {nav.map((el) => (
            <ListItem key={el.id}>
              <Link to={el.path}>{el.title}</Link>
            </ListItem>
          ))}
        </List>
        <PhonesWrapper>
            <Icon />
            <Phones>
                <PhonesLink href="tel:+380678805105">067 880-51-05</PhonesLink>
                <PhonesLink href="tel:+380678805105">067 880-51-05</PhonesLink>
            </Phones>
        </PhonesWrapper>
      </Container>
    </Wrapper>
  );
}

export default HeaderTop;
