import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ src, alt, placeholderSrc, ...props }) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={isIntersecting ? src : placeholderSrc}
      alt={alt}
      {...props}
    />
  )
}

export default LazyImage
