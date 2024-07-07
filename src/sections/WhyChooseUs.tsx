import { motion } from 'framer-motion';
import wcuReasons from "src/content/wcuReasons";

const WhyChooseUs = () => {
  return (
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-100">
          Why Choose <span className="text-indigo-400">Armify</span> ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {wcuReasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg relative"
              initial={{ borderColor: 'rgba(79, 70, 229, 0.1)' }}
              animate={{ borderColor: ['rgba(79, 70, 229, 0.1)', 'rgba(79, 70, 229, 0.3)', 'rgba(79, 70, 229, 0.1)'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ border: '1px solid' }}
            >
              <motion.div 
                className="absolute inset-0 bg-indigo-400/5 rounded-lg"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative z-10">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-200">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default WhyChooseUs;