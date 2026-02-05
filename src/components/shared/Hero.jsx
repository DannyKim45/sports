import { motion } from "framer-motion";

export default function Hero({ title, subtitle, backgroundImage, backgroundVideo, children }) {
  return (
    <section className="hero-section">
      {backgroundVideo ? (
        <motion.video
          className="hero-bg"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      ) : backgroundImage ? (
        <motion.img
          className="hero-bg"
          src={backgroundImage}
          alt={title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      ) : null}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        {title && <h1 className="hero-title">{title}</h1>}
        {children}
      </motion.div>
    </section>
  );
}
