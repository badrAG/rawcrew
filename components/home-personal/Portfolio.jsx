'use client';
import Link from 'next/link';
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
  const data = [
    {
      title: 'Triathlon Premium Cup Larache',
      desc: 'On July 7th, 2024, athletes from around the world gathered in the historic city of Larache, Morocco, to compete in the Triathlon Premium Cup. This prestigious event brought together elite competitors in a test of endurance, strength, and determination across swimming, cycling, and running disciplines. Our video captures the energy, spirit, and breathtaking scenery of this remarkable day, showcasing the dedication of the athletes and the vibrant culture of Larache. Dive into the action and experience the triumphs of the Triathlon Premium Cup Larache 2024.',
      poster:'https://res.cloudinary.com/storeino-academy/image/upload/v1724448050/cover_1_d5hae4.jpg',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1724442497/intro_lckanl.mp4'
    },
    {
      title: 'THE SEA FESTIVAL',
      desc: 'Opening of the third session of the Sea Festival in Larache, Morocco Jul 13, 2024 - The festive carnival started from August 20 Square, passing through Mohammed V Street, then Tahrir Square and Casablanca Street, arriving at the historic Bab El Bahr Square.',
      poster:'https://res-console.cloudinary.com/storeino-academy/thumbnails/v1/video/upload/v1726249222/MDkxM194OHR1YWs=/grid_landscape',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1726249222/0913_x8tuak.mp4'
    },
    {
      title: 'Fruit congel du nord',
      desc: 'Celebrating excellence and dedication: honoring the hardworking team behind Red Fruits Production Company\'s success.',
      poster:'https://res-console.cloudinary.com/storeino-academy/thumbnails/v1/video/upload/v1726250761/MDkxM18xX3o0Y2xnag==/grid_landscape',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1726250761/0913_1_z4clgj.mp4'
    },
    {
      title:'Nafora school film',
      desc:'Exploring the Heart of Education: A documentary exploring the study strategies, challenges and triumphs of our schools. Also documenting the end-of-year celebration with an atmosphere full of joy among the students and pride among the parents.',
      poster:'https://res-console.cloudinary.com/storeino-academy/thumbnails/v1/video/upload/v1726254054/MDkxM18yX2JmdXZ4cw==/grid_landscape',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1726254054/0913_2_bfuvxs.mp4'
    },
    {
      title:'Maroc telecom',
      desc:'Connecting Morocco with unparalleled speed and reliability - Maroc Telecom, your gateway to seamless communication.',
      poster:'https://res-console.cloudinary.com/storeino-academy/thumbnails/v1/video/upload/v1726256347/MDkxM18zX3lmYTNxaQ==/grid_landscape',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1726256347/0913_3_yfa3qi.mp4'
    },
    {
      title:'Localisation by drone',
      desc:'Elevate your perspective: Drones provide new perspectives to determine your location or the location of your project to make it easier to know where you are and attract more customers, by capturing every detail from above',
      poster:'https://res.cloudinary.com/storeino-academy/image/upload/v1726254907/preview_mmmcrg.jpg',
      src:'https://res.cloudinary.com/storeino-academy/video/upload/v1726307212/0914_1_t8uq0u.mp4'
    }
    // ,  {
    //   title: 'Kaftan Photo Session',
    //   desc: 'Immerse yourself in the elegance and tradition of the kaftan with our latest photo session. This video showcases the timeless beauty of the kaftan dress, capturing its intricate details and flowing grace. Set against a stunning backdrop, the session highlights the artistry and craftsmanship that make the kaftan a symbol of cultural heritage and modern sophistication. Join us in celebrating the allure of this iconic garment through a visual journey that blends fashion and tradition.',
    //   poster:'https://res.cloudinary.com/storeino-academy/image/upload/v1724448022/cover_2_rhej62.jpg',
    //   src:'https://res.cloudinary.com/storeino-academy/video/upload/v1724442686/photo_session_bfihzr.mp4'
    // }
  ]
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
              <Link
                href="/portfolio-projects"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </Link>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          { data.map((data,i)=>(
             <div key={i} className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    
                    <h4>{data.title}</h4>
                  </div>
                  <div>
                    <p>
                    {data.desc}
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
                <video controls poster={data.poster} className="w-full h-full object-cover " >
                <source src={data.src} type="video/mp4" />
              </video>                 
              </div>
              </div>
            </div>
          </div>
          ))
          }
          
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
