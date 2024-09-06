import Section from '@/components/Section';
import { motion } from 'framer-motion';

interface MotionScrollSectionProps {
  children: React.ReactNode;
}

const MotionScrollSection: React.FC<MotionScrollSectionProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
      {...rest}
    >
      <Section>{children}</Section>
    </motion.section>
  );
};

export default MotionScrollSection;
