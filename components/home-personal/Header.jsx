'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Link from 'next/link';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="https://res.cloudinary.com/storeino-academy/image/upload/v1724448036/hero-6-1_tdgz4x.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448026/hi_afgmpz.png" alt="" />
                </span>{' '}
                Hello! there
              </h6>
              <h1 className="fw-700 mb-10">
                We are <span className="main-color">RawCreW</span>
              </h1>
              <h3>We are a Broadcasting & media production company</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      From the inception of a project to its completion, we
                      employ a comprehensive and holistic approach.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <Link
                      href="/page-contact"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Contact Me</span>
                    </Link>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448175/arrow-down-big_eizhlo.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">rawcrew@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Phone :</h6>
            <span className="p-color">+212 (0) 661-562-068</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Address :</h6>
            <span className="p-color">1 Er Etage، Quartier El Menzah N° 07<br/> Larache, Morocco</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
