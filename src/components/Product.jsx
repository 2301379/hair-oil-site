import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Argan Hair Oil",
    description: "乾燥した髪に潤いを。",
    image: "/image/track.jpg",
    amazon: "https://a.r10.to/hktUfI",
  },
  {
    id: 2,
    name: "Rosemary Hair Oil",
    description: "すっきり、まとまる髪へ。",
    image: "/image/track.jpg",
    amazon: "https://a.r10.to/hktUfI",
  },
  {
    id: 3,
    name: "Coconut Hair Oil",
    description: "うるさら質感、毎日のケアに。",
    image: "/image/track.jpg",
    amazon: "https://a.r10.to/hktUfI",
  },
];

function Product() {
  return (
    <section
      id="product"
      className="min-h-screen bg-zinc-950 py-32 px-8"
    >
      <h2 className="text-white text-6xl text-center mb-20 font-light">
        Collection
      </h2>

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          place-items-center
        "
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{
              y: -20,
              rotateX: 10,
              rotateY: -10,
            }}
            transition={{
              duration: 0.4,
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="
              w-[350px]
              bg-zinc-900
              rounded-[40px]
              p-8
              shadow-2xl
              text-center
            "
          >
            <motion.img
  src={product.image}
  alt={product.name}
  style={{
    width: "384px",
    height: "384px",
    objectFit: "contain",
  }}
/>

            <h3 className="text-white text-3xl mt-8">
              {product.name}
            </h3>

            <p className="text-zinc-400 mt-4">
              {product.description}
            </p>

            <a
              href={product.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-15
                px-15
                py-10
                rounded-full
                bg-amber-400
                text-black
                font-semibold
                hover:scale-105
                duration-500
              "
            >
              Amazonで購入
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Product;