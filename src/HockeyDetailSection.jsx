import { motion } from "framer-motion";

export default function HockeyDetailSection() {
  return (
    <section className="detail">
      <motion.div
        className="detail-image"
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/mackinnon-1.jpg"
          alt="Nathan MacKinnon"
          className="detail-img"
        />
      </motion.div>

      <motion.div
        className="detail-text"
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3>Speed · Impact · Chaos</h3>

        <p>
          얼음 위에서 펼쳐지는 이 경기는 처음 마주한 순간부터 다른 스포츠와는
          전혀 다른 긴장감을 준다.
        </p>

        <p>
          스케이팅으로 만들어지는 압도적인 스피드, 그 속에서도 작은 퍽을
          자유자재로 다루는 기술, 그리고 경기 중 허용되는 강력한 바디체크와
          격투는 아이스하키만의 백미다.
        </p>

        <p>
          TV 화면으로는 절대 다 전달되지 않는 이 속도감과 충돌의 에너지는 반드시
          경기장에서 직접 경험해야 한다.
        </p>
      </motion.div>
    </section>
  );
}
