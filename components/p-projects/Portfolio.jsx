'use client';
import initIsotope from '@/common/initIsotope';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import VideoViewer from './VideoViewer';
import data from "@/data/project"

function Portfolio() {
  const [open,setOpen] = useState(false)
  const [index,setIndex] = useState(0)
  const [name,setName] = useState('all')
  const [rearrangedData, setRearrangedData] = useState([...data]);
  const closeView = () => {
    setOpen(false)
  }
 const onFilter = (name) =>{
  setName(name)
  if (name == 'all')return setRearrangedData([...data])
  const  filtred = data.filter(proj => proj.category.toLowerCase() == name)
  setRearrangedData(filtred)
  }
  const openVideo = (i) => {
    setIndex(i)
    setOpen(true)
      if (i !== undefined && i >= 0 && i < data.length) {
          const [selectedVideo] = rearrangedData.splice(i, 1);
          rearrangedData.unshift(selectedVideo);
          setRearrangedData(rearrangedData)
        }
  }
  return (
    <section className="work-grid section-padding pb-0">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10">DISCOVER OUR CASES</h6>
              <h3>Latest Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span  onClick={()=> onFilter('all')} className={`${name == 'all' && "active"}`} data-count="06">
                  All
                </span>
                <span  onClick={()=> onFilter('events')} className={`${name == 'events' && "active"}`} data-count="03">
                  Events
                </span>
                <span  onClick={()=> onFilter('ads')} className={`${name == 'ads' && "active"}`} data-count="03">
                  Advertisement
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-2">
        {rearrangedData.map((dt,i) => (
          <div key={i} onClick={()=> openVideo(i)} className="relative h-64 bg-gray-200 flex items-center justify-center">
            <img src={dt.poster} alt={dt.title} className='h-full object-cover' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-black bg-opacity-50'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white h-8 w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </div>
          </div>
        ))}
</div>  
      </div>
      {open && 
      <div style={{zIndex: 99}} className='absolute fixed inset-0 bg-black '>
        <VideoViewer close={closeView} data={rearrangedData} i={index} />
      </div>
      }
    </section>
  );
}

export default Portfolio;
