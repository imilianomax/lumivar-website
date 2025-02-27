import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

export const Trust = () => {
  return (
    <section className="bg-white dark:bg-black py-24 md:py-32" id="trust">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center px-4"
        >
          Built on <Highlight>Trust and Impact</Highlight>
        </motion.h2>
        
        <div className="mt-6 md:mt-10">
          <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 leading-relaxed">
            We believe in the power of collaboration and integrity. Our mission is to create lasting relationships built on trust and mutual respect.
          </p>
        </div>
      </div>
    </section>
  );
};