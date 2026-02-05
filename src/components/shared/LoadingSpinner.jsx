import { motion } from "framer-motion";

export default function LoadingSpinner({ size = "medium", text = "로딩 중..." }) {
  const sizeMap = {
    small: 24,
    medium: 48,
    large: 64
  };

  const spinnerSize = sizeMap[size] || sizeMap.medium;

  return (
    <div className="loading-spinner-container">
      <motion.div
        className="loading-spinner"
        style={{
          width: spinnerSize,
          height: spinnerSize,
          border: `3px solid rgba(255, 255, 255, 0.1)`,
          borderTopColor: "white",
          borderRadius: "50%"
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}
