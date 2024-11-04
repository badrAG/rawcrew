import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            {/* <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448445/5_gtz2p9.png" alt="" />
              </div>
              <h5>Broadcast Production</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Broadcast</span>
                </div>
                <p>
                We deliver high-quality broadcast production services, from live events to television shows. Our team ensures seamless execution with cutting-edge technology and creative direction..
                </p>
              </div>
              <a className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448444/3_o3tivd.png" alt="" />
              </div>
              <h5>Media Content Creation</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Media</span>
                  <span className="tag">Digital</span>
                </div>
                <p>
                Our expertise in media content creation spans across digital platforms, commercials, and branded content. We focus on delivering engaging and impactful stories that resonate with your audience.
                </p>
              </div>
              <a className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448444/4_ln2nin.png" alt="" />
              </div>
              <h5>Animation & Motion Graphics</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Graphics</span>
                  <span className="tag">Animation</span>
                </div>
                <p>
                We bring ideas to life with animation and motion graphics, adding a dynamic and visually appealing element to your content.
                </p>
              </div>
              <a className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
