import { motion } from "framer-motion";

export const FadeInFromRight = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInFromLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
};
