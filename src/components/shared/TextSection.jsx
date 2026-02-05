import { motion } from "framer-motion";

export default function TextSection({
  title,
  quote,
  children,
  className = "",
  layout = "full" // "full" or "split"
}) {
  const sectionClass = layout === "split" ? "text-section split" : "text-section full";

  return (
    <motion.section
      className={`${sectionClass} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {quote && <p className="quote">{quote}</p>}
      <div className="section-content">{children}</div>
    </motion.section>
  );
}
