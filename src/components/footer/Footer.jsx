import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Socials from '../Socials';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: auto;
    }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

const Column = styled.div`
@media (max-width: 768px) {
  text-align: center;
  &:not(:last-child){
    display: none;
  }
}
`;

const Title = styled.h6`
  margin-top: 0;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-main);
`

const List = styled.ul`
  
`

const ListItem = styled.li`
  &:not(:last-child){
    margin-bottom: 30px;
  }

  a{
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`




function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Column>
            <Title>Categories</Title>
            <List>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
              <ListItem>
                  <Link to='/'>Test</Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Title>Info</Title>
            <List>
              <ListItem>
                  <Link to='/shops'>Shops</Link>
              </ListItem>
              <ListItem>
                  <Link to='/about'>About</Link>
              </ListItem>
              <ListItem>
                  <Link to='/delivery-and-payment'>Delivery and payment</Link>
              </ListItem>
              <ListItem>
                  <Link to='/cooperation'>Cooperation</Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Title>Socials</Title>
            <Socials />
          </Column>
        </Wrapper>
      </Container>
    </footer>
  )
}

export default Footer