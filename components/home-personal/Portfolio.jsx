'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Portfolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Selected <span className="fw-200">Works.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/portfolio-grid"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    
                    <h4>Triathlon Premium Cup Larache</h4>
                  </div>
                  <div>
                    <p>
                    On July 7th, 2024, athletes from around the world gathered in the historic city of Larache, Morocco, to compete in the Triathlon Premium Cup. This prestigious event brought together elite competitors in a test of endurance, strength, and determination across swimming, cycling, and running disciplines. Our video captures the energy, spirit, and breathtaking scenery of this remarkable day, showcasing the dedication of the athletes and the vibrant culture of Larache. Dive into the action and experience the triumphs of the Triathlon Premium Cup Larache 2024.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                <video controls poster="/assets/imgs/works/1/cover_1.jpg" className="w-full h-full object-cover " >
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>                 
              </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                    </div>
                    <h4>Kaftan Photo Session</h4>
                  </div>
                  <div>
                    <p>
                    Immerse yourself in the elegance and tradition of the kaftan with our latest photo session. This video showcases the timeless beauty of the kaftan dress, capturing its intricate details and flowing grace. Set against a stunning backdrop, the session highlights the artistry and craftsmanship that make the kaftan a symbol of cultural heritage and modern sophistication. Join us in celebrating the allure of this iconic garment through a visual journey that blends fashion and tradition.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img" style={{ width: 'inherit' }}>
                <video controls poster="/assets/imgs/works/1/cover_2.jpg" className="w-full h-full object-cover " >
                <source src="/videos/photo_session.mp4" type="video/mp4" />
              </video>                  
              </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                    </div>
                    <h4>Discover Istanbul: A City of Timeless Wonders</h4>
                  </div>
                  <div>
                    <p>
                    Experience the captivating blend of history and modernity in our latest video showcasing the vibrant city of Istanbul. Through carefully crafted edits, we take you on a journey through the city&apos;s iconic landmarks, bustling streets, and serene waters. From the majestic domes of the Hagia Sophia to the lively bazaars and the scenic Bosphorus, this video captures the essence of a city that stands at the crossroads of East and West. Join us in exploring the sights and sounds of Istanbul, where every corner tells a story.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
              <div className="img" style={{ width: 'inherit' }}>
                <video controls poster="/assets/imgs/works/1/cover_3.jpg" className="w-full h-full object-cover " >
                <source src="/videos/istanbul.mp4" type="video/mp4" />
              </video>                  
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            More than <span className="fw-600"> 200+ companies</span>
            trusted us worldwide
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
