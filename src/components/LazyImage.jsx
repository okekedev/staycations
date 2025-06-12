import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && !isLoaded) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observer.unobserve(imageRef);
            }
          });
        },
        { threshold: 0.01, rootMargin: '100px' }
      );
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [imageRef, isLoaded]);

  useEffect(() => {
    if (isInView && !isLoaded) {
      setImageSrc(src);
    }
  }, [isInView, isLoaded, src]);

  return (
    <div 
      ref={setImageRef} 
      className={`relative overflow-hidden ${className || ''}`}
      style={style}
    >
      {/* Placeholder with blur effect */}
      <div 
        className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
      />
      
      {/* Actual image */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className || ''}`}
          style={{
            ...style,
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;