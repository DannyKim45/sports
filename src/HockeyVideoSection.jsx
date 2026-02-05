import { motion } from "framer-motion";

export default function HockeyVideoSection() {
  return (
    <section className="video-section">
      <motion.video
        className="hockey-video"
        src="/videos/hockey.mp4"
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
