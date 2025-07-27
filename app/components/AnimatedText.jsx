"use client";
import { motion } from "framer-motion";

export default function AnimatedText({
  text = "",
  className = "",
  isLine = false,
}) {
  const words = text.split(" ");

  return (
    <div className={`${className} inline-block`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.4, duration: 0.5 }}
          className="inline-block mr-2">
          {word}
        </motion.span>
      ))}

      {/* Se isLine true, mostra una <hr> animata */}
      {isLine && (
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: words.length * 0.4, duration: 0.6 }}
          className="origin-left border-2 rounded-md border-white w-[30px] md:w-[60px] mt-4 inline-block"
        />
      )}
    </div>
  );
}
