"use client";
import Link from "next/link";
import { useState } from "react";

function About() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row justify-center lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img rounded-lg">
                <video
                  muted
                  loop
                  playsinline
                  className="w-full h-full object-cover"
                  poster="https://res.cloudinary.com/storeino-academy/image/upload/v1724519531/273646035_316236837126996_8970641440706135792_n_yqkgxq.jpg"
                >
                  <source
                    src="https://res.cloudinary.com/storeino-academy/video/upload/v1724442497/intro_lckanl.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <span className="icon">
                <img
                  src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448251/icon2_h8l9jk.png"
                  alt=""
                />
              </span>
              <span className="icon">
                <img
                  src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448251/icon1_ahpqcz.png"
                  alt=""
                />
              </span>
              <span className="icon">
                <img
                  src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448251/icon4_mlfgco.png"
                  alt=""
                />
              </span>
              <span className="icon">
                <img
                  src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448251/icon3_fi5dd7.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="numbers my-20">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+20</h3>
                          <h6 className="p-color sub-title">
                            Projects Completed
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="ml-auto vi-more">
                            <Link 
                              href="/portfolio-projects"
                              className="butn butn-sm butn-bord radius-30"
                            >
                              <span>View All</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clients Satisfaction
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img
                              src="https://res.cloudinary.com/storeino-academy/image/upload/v1724448017/arw0_dmiveg.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">About Us</h6>
              <div className="text">
                <h4 className="mb-30">
                  we are{" "}
                  <span className="fw-200">
                    a Broadcasting & Media Production company
                  </span>{" "}
                  specializing in creating impactful content from start to
                  finish.
                </h4>
                <p>
                  We employ a comprehensive and holistic approach to every
                  project,
                  {!seeMore && (
                    <span
                      onClick={() => setSeeMore(!seeMore)}
                      className="text main-color sub-title"
                    >
                      ... Read More <i className="ti-arrow-top-right"></i>
                    </span>
                  )}
                  {!seeMore
                    ? ""
                    : ` ensuring that every detail is meticulously crafted. Whether it's television, film, digital media, or live events, completing professionally prepared “news” reports, “reportages” and “documentary” tapes for television channels and audio-visual, electronic and written media. * Covering conferences, seminars, parties and events with modern digital cameras Completing audio-visual “advertising” segments for companies and public institutions in various fields. ** Filming “video clips” for emerging artists and talents. Filming teams composed of young professional photographers to film our goal is to bring your vision to life in the most creative and effective way possible.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
