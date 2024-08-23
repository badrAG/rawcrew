import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <Link href='/' className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo_rwcw.png" alt="" />
            </Link>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
              1 Er Etage، Quartier El Menzah N° 07 <br /> Larache, Morocco
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="#0">rawcrew@gmail.com</a>
              </h6>
              <a href="#0" className="underline">
                <span className="fz-22 main-color">+212 (0) 661-562-068</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/">About</Link>
                </li>
                <li className="mb-15">
                  <Link href="/">Services</Link>
                </li>
                <li className="mb-15">
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/page-contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/rawcrew.maroc" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © {(new Date().getFullYear())} Webfolio is Proudly Powered by{' '}
              <span className="underline main-color">
                <a href="https://github.com/badrAG" target="_blank">
                  Badr_ag
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
