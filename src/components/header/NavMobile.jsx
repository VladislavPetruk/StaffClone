import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import menu from "../../menu.json";
import nav from "../../nav.json";
import Socials from "../Socials";

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 82px;
  right: 0;
  bottom: 0;
  background-color: rgb(192, 192, 192, 0.2);
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const MenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 4;
  height: 100%;
  transition: all 0.2s linear;
  overflow: hidden;
  max-width: 370px;
  overflow-y: auto;
  scroll-behavior: smooth;
  background-color: var(--color-bg);
  color: var(--color-main);
  box-shadow: 2px 15px 15px 0px rgba(51, 51, 51, 0.65);
  animation: animation 0.2s linear;

  @keyframes animation {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Category = styled.ul`
  padding: 15px;
  border-bottom: 1px solid #464646;
`;

const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const CategoryLink = styled.a`
  font-size: 14px;
  color: var(--color-main);
  font-weight: 500;
  text-transform: uppercase;
`;

const Menu = styled.ul`
  padding: 15px;
  border-bottom: 1px solid #464646;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;

  a {
    font-size: 14px;
    color: var(--color-main);
    font-weight: 500;
    text-transform: uppercase;
  }
`;


function NavMobile() {
  return (
    <Overlay>
      <MenuWrapper>
        <Category>
          {menu.map((el) => (
            <CategoryItem key={el.id}>
              <CategoryLink href={el.path}>{el.title}</CategoryLink>
            </CategoryItem>
          ))}
        </Category>
        <Menu>
          {nav.map((el) => (
            <MenuItem key={el.id}>
              <Link to={el.path}>{el.title}</Link>
            </MenuItem>
          ))}
        </Menu>

        <Socials test />
      </MenuWrapper>
    </Overlay>
  );
}

export default NavMobile;
