export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
};

export const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const menuItemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 },
};

export const submenuVariants = {
  closed: { 
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};