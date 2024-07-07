import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import testimonials from "@content/testimonials";
import type { Testimonial } from 'src/types/Testimonial';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900 rounded-lg shadow-lg overflow-hidden"
      >
        <motion.div
          className="p-6"
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <p className="text-lg mb-4">"{testimonial.text}"</p>
          <div>
            <p className="font-bold text-indigo-400">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.role}</p>
          </div>
        </motion.div>
      </motion.div>
    );
  };
  
  const Testimonials = () => {
    return (
      <div className="text-white md:p-8">
        <h2 className="text-3xl font-bold text-center mb-10">Read about our Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  };
export default Testimonials;