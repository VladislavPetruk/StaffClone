import React from "react";
import styled from "styled-components";
import { BsInstagram, BsTelegram, BsYoutube, BsFacebook } from "react-icons/bs";

const Social = styled.div`
    // padding: ${({test}) => test ? "15px" : "0"};
    a {
        display: inline-block;
        &:not(:last-child) {
        margin-right: 15px;
        }
        svg {
        font-size: 25px;
        }
    }
    `;



function Socials() {

    // const Social = styled.div`
    // padding: ${props.test ? "15px" : "0"};
    // a {
    //     display: inline-block;
    //     &:not(:last-child) {
    //     margin-right: 15px;
    //     }
    //     svg {
    //     font-size: 25px;
    //     }
    // }
    // `;

  return (
    <Social >
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <BsYoutube />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <BsFacebook />
      </a>
    </Social>
  );
}

export default Socials;
