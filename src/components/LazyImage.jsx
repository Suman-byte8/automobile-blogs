import { useState, useRef, useEffect } from "react";
import noImage from "../assets/no-image.png";

export default function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
}) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const imgRef = useRef(null);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      className={`overflow-hidden bg-gray-200 ${className}`}
      style={{ width, height }}
    >
      {inView ? (
        <>
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-gray-300" />
          )}
          <img
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => {
              setImgSrc(noImage);
              setLoaded(true);
            }}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </>
      ) : (
        <div className="h-full w-full animate-pulse bg-gray-300" />
      )}
    </div>
  );
}
