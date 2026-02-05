import { motion } from "framer-motion";

export default function ImageTextSection({
  title,
  quote,
  children,
  imageSrc,
  imageAlt = "",
  imagePosition = "left", // "left" or "right"
  className = ""
}) {
  const isImageLeft = imagePosition === "left";

  const imageElement = (
    <motion.div
      className="image-text-image"
      initial={{ x: isImageLeft ? -80 : 80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img src={imageSrc} alt={imageAlt} />
    </motion.div>
  );

  const contentElement = (
    <motion.div
      className="image-text-content"
      initial={{ x: isImageLeft ? 80 : -80, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {quote && <p className="quote">{quote}</p>}
      <div className="section-text">{children}</div>
    </motion.div>
  );

  return (
    <section className={`image-text-section ${className}`}>
      <div className="image-text-container">
        {isImageLeft ? (
          <>
            {imageElement}
            {contentElement}
          </>
        ) : (
          <>
            {contentElement}
            {imageElement}
          </>
        )}
      </div>
    </section>
  );
}
