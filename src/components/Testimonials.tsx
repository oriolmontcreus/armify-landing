import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Operations Manager at Tech Innovators Inc.",
    text: "Our production line efficiency has skyrocketed since integrating Armify's robotic arms. The advanced AI and machine learning capabilities ensure precision and adaptability like we've never seen before."
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CEO of Custom Solutions Ltd.",
    text: "Armify offered us a tailored automation solution that perfectly fits our unique manufacturing needs. Their team's expertise and willingness to adapt to our requirements made all the difference."
  },
  {
    id: 3,
    name: "Carlos Garcia",
    role: "Sustainability Officer at Green Manufacturing Co.",
    text: "We chose Armify not just for their superior robotic arms, but also for their commitment to sustainability. Their eco-friendly designs have significantly reduced our environmental footprint."
  },
  {
    id: 4,
    name: "Alex Rivera",
    role: "Head of R&D at Future Tech Dynamics",
    text: "Innovation is at the core of our business, and Armify's robotic arms have been pivotal in pushing our research and development forward. Their cutting-edge technology has allowed us to gain a competitive edge in the industry."
  }
];

//TODO: REFACTOR + TYPES
const TestimonialCard = ({ testimonial }: any) => {
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
          whileHover={{ scale: 1.02 }}
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
      <div className="text-white p-8">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;