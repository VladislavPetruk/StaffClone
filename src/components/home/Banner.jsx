import React from 'react';
import useMediaQuery from "../../hooks/UseMediaQuery"
import bannerDesktop from '../../assets/img/banner-desktop.jpeg';
import bannerMobile from '../../assets/img/banner-mobile.jpeg';

function Banner() {

    const isTablet = useMediaQuery('(max-width: 768px)');


  return (
    <section>
        <img src={isTablet ? bannerMobile : bannerDesktop} alt="Ukraine" />
    </section>
  )
}

export default Banner