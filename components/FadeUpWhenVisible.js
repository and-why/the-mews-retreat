import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { LinkBox } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MotionBox = motion(LinkBox);

export default function FadeUpWhenVisible({ children }) {
  const [start, setStart] = useState({ opacity: 0 });
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setStart({ opacity: 1, y: 0 });
    } else if (!inView) {
      setStart({ opacity: 0, y: 20 });
    }
  }, [inView]);

  return (
    <MotionBox
      ref={ref}
      animate={start}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      w='100%'
      h='100%'
      exit={{ opacity: 0 }}
    >
      {children}
    </MotionBox>
  );
}
