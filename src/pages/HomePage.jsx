import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const players = [
  {
    sport: "Baseball · MLB",
    name: "Shohei Ohtani",
    image: "/images/ohtani.jpg",
    link: "/baseball/intro",
  },
  {
    sport: "Basketball · NCAA",
    name: "Cooper Flagg",
    image: "/images/flagg.jpg",
  },
  {
    sport: "Ice Hockey · NHL",
    name: "Nathan MacKinnon",
    image: "/images/mackinnon.jpg",
    link: "/hockey/intro",
  },
  {
    sport: "American Football · NFL",
    name: "Saquon Barkley",
    image: "/images/barkley.jpg",
    position: "center 30%",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sports Athletes";
  }, []);

  return (
    <div className="container">
      {players.map((p, i) => (
        <section
          className="section"
          key={i}
          onClick={() => p.link && navigate(p.link)}
          style={{ cursor: p.link ? "pointer" : "default" }}
        >
          <motion.img
            src={p.image}
            alt={p.name}
            className="bg"
            style={p.position ? { objectPosition: p.position } : {}}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="content"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>{p.sport}</h2>
            <h1>{p.name}</h1>
          </motion.div>
        </section>
      ))}
    </div>
  );
}
