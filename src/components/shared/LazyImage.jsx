import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function LazyImage({
  src,
  alt,
  className = "",
  style = {},
  placeholderColor = "rgba(255, 255, 255, 0.1)"
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px"
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={imgRef}
      className={`lazy-image-wrapper ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: placeholderColor,
        ...style
      }}
    >
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
          {!isLoaded && (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{
                  width: 24,
                  height: 24,
                  border: "3px solid rgba(255, 255, 255, 0.1)",
                  borderTopColor: "white",
                  borderRadius: "50%"
                }}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
