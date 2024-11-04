import { useEffect, useRef, useState } from 'react';

export default function ReelsGallery({ data, i,close }) {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    // Scroll to the selected video based on the index passed in
    if (i >= 0 && videoRefs.current[0]) {
      videoRefs.current[0].scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center', // Center the video in the viewport
      });
      setPlayingIndex(0);
    }
  }, [0]); // Dependency on 'i' to respond to prop changes

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          const index = videoRefs.current.indexOf(video);

          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.error('Error trying to play the video:', error);
            });
            setPlayingIndex(index);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.7 } // Adjust this threshold if needed
    );

    // Observe all video elements
    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    // Cleanup the observer on unmount
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {data.map((item, index) => (
        <div 
          key={index} 
          className="h-screen flex flex-col items-center justify-center snap-center relative"
          style={{ backgroundImage: `url(${item.poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <video 
            ref={(el) => (videoRefs.current[index] = el)} // Assign ref directly to the video element
            src={item.src}             
            poster={item.poster} 
            loop 
            muted 
            className="h-full w-full object-cover"
          />
          {playingIndex !== index && (
            <div className="absolute bottom-8 left-4 text-white p-4 bg-black bg-opacity-50 rounded-md max-w-md transition-opacity duration-500">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          )}
          <div onClick={()=>close()} className="absolute top-8 left-4 cursor-pointer text-white p-2 bg-black bg-opacity-50 rounded-full transition-opacity duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
            </div>
        </div>
      ))}
    </div>
  );
}
