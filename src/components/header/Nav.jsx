import React from 'react'
import styled from 'styled-components';
import menu from '../../menu.json'

const Wrapper = styled.nav`
  display: flex;
  flex: 1;
  margin-left: 25px;

`;

const List = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    display: block;
  }
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-right: 35px;
  }
`;

const Link = styled.a`
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
`;



function Nav() {
  return (
    <Wrapper>
        <List>
            {menu.map((el) => (
              <Item key={el.id}><Link href={el.path}>{el.title}</Link></Item>
            ))}
        </List>
    </Wrapper>
  )
}

export default Nav

