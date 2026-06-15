import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen bg-black flex items-center justify-center overflow-hidden relative">

      {/* 背景のゴールドの光 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-amber-400/20 blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* メインコンテンツ */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10"
      >
        <motion.h1
          initial={{
            opacity: 0,
            letterSpacing: "0px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "12px",
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="text-white text-7xl md:text-8xl font-light"
        >
          LUMIÈRE OIL
        </motion.h1>

        <p className="text-zinc-400 mt-6 text-xl">
          髪に、光を。
        </p>

        <motion.a
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="#product"
          className="
            inline-block
            mt-10
            px-8
            py-4
            rounded-full
            bg-amber-400
            text-black
            font-semibold
            shadow-lg
          "
        >
          SHOP NOW
        </motion.a>
      </motion.div>

      {/* スクロール誘導 */}
      <motion.div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-zinc-500
          text-sm
          tracking-[4px]
        "
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        ↓ SCROLL
      </motion.div>
    </section>
  );
}

export default Hero;