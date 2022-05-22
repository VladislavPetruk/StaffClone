import React from "react";
import styled from "styled-components";
import { MdDarkMode } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import UseTheme from "../../hooks/UseTheme";

const IconWrapper = styled.div`
    > svg{
        font-size: 25px;
        color: var(--color-main);
        cursor: pointer;

        &:not(:last-child){
            margin-right: 12px;
        }
    }
`;



function HeaderIcons() {
  const { isLight, setIsLight } = UseTheme();

  return (
    <IconWrapper>
      <BiSearch />
      <AiOutlineHeart />
      <AiOutlineShoppingCart />
      <MdDarkMode onClick={() => setIsLight(!isLight)} />
    </IconWrapper>
  );
}

export default HeaderIcons;
