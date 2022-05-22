import React, { useState } from "react";
import useMediaQuery from "../../hooks/UseMediaQuery"
import Nav from "./Nav";
import styled from "styled-components";
import HeaderIcons from "./HeaderIcons";
import {GiHamburgerMenu} from "react-icons/gi"
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: var(--color-bg);
  transition: background-color .2s linear;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 991px) {
    padding: 0 10px;
  }

  > a{
    @media (max-width: 568px) {
      flex: 1;
    }
  }
`;

// const Link = styled.a`
//   margin-right: 20px;
// `;
const Logo = styled.svg`
  max-width: 120px;
  height: auto;
  display: flex;
  align-items: center;
  color: var(--color-main);
  transition: color 2s linear;

  path{
    transition: fill .2s linear;
  }
`;

const Burger = styled(GiHamburgerMenu)`
  cursor: pointer;
  z-index: 4;
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

function HeaderBottom() {

  const [open, setOpen] = useState(false);

  const click = () => {
    setOpen(!open)
  }

  const isDesktop = useMediaQuery('(max-width: 991px)');


 

  return (
    <Wrapper>
      <Container>
        {isDesktop && <Burger onClick={click} />}
        <Link to='/'>
          <Logo
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            viewBox="0 60 192.756 70"
          >
            <g fillRule="evenodd" clipRule="evenodd">
              <path fill="var(--color-bg)" d="M0 0h192.756v192.756H0V0z" />
              <path fill="var(--color-main)" d="M8.581 78.844h10.072l.228 24.818s.071 5.996-3.527 8.934c-2.788 2.275-5.944 2.441-8.536 1.992-2.572-.443-3.983-1.48-3.983-1.48v-8.537s.91.74 2.161 1.139c1.252.398 2.075.713 3.187-.398.569-.568.513-2.389.513-2.389l-.115-24.079zm10.724 23.965s-1.403 12.121 12.407 12.121c12.753 0 12.061-11.459 12.061-12.578 0-1.117-.113-23.561-.113-23.561H33.587l.058 23.049s.283 3.586-2.163 3.586c-2.446 0-2.104-3.357-2.104-3.357l-.171-23.22H19.134l.171 23.96zm43.826-13.486-.063-9.051s-4.241-2.168-8.737-2.168c-6.122 0-8.705 4.526-8.705 4.526s-2.345 3.266-1.534 7.592c.537 2.861 1.609 4.415 3.934 6.705 1.06 1.045 3.084 2.682 3.621 3.219.537.537 2.397 1.695 2.101 3.621-.192 1.258-.893 2.127-3.263 2.057-2.995-.09-6.482-2.996-6.482-2.996l.045 9.254s3.979 2.896 8.225 2.816c4.738-.09 7.018-1.654 8.583-2.906 2.34-1.871 4.157-5.9 3.532-10.326-.626-4.426-4.604-7.331-5.722-8.27s-3.621-2.771-4.068-3.8c-.447-1.028.402-2.682 1.341-2.816.939-.134 2.498-.899 7.192 2.543zm.387-1.586h5.926v26.384h10.021V87.737h5.637V78.83H63.518v8.907zm98.347 0h5.926v26.384h10.021V87.737h5.637V78.83h-21.584v8.907zm-69.873 26.449h10.996c2.281 0 14.082-.535 14.082-18.297 0-17.359-13.008-17.023-13.008-17.023H92.059l-.067 35.32zm10.192-25.939s1.41-.134 2.012.202c.605.335 2.482 1.407 2.482 8.444 0 7.039-1.543 7.912-2.549 8.447s-2.012.268-2.012.268l.067-17.361zm28.701-10.388s-13.479-.469-13.479 18.164c0 20.174 13.479 18.832 13.479 18.832s13.947 1.811 13.947-18.43-13.947-18.566-13.947-18.566zm.066 8.713c.939 0 3.219-.669 3.219 9.854 0 10.32-2.682 9.381-3.152 9.381-.469 0-3.285.672-3.285-9.314-.001-10.256 2.279-9.921 3.218-9.921zm20.117 27.547h10.125V78.865h-10.26l.135 35.254zm27.565-4.89c0 2.789 2.295 5.656 5.605 5.656 2.896 0 5.684-2.059 5.684-5.682 0-2.607-2.189-5.605-5.684-5.605-2.607 0-5.605 2.111-5.605 5.631z" />
            </g>
          </Logo>
        </Link>
        {!isDesktop ? <Nav /> : (open && <NavMobile />)}
        <HeaderIcons />
      </Container>
    </Wrapper>
  );
}

export default HeaderBottom;
