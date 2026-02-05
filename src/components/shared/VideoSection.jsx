import { motion } from "framer-motion";

export default function VideoSection({
  src,
  autoPlay = true,
  loop = true,
  muted = true,
  className = ""
}) {
  return (
    <section className={`video-section ${className}`}>
      <motion.video
        className="section-video"
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
