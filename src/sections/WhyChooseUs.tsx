import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '🚀',
    title: 'Cutting-edge Technology',
    description: 'Our robotic arms are powered by the latest advancements in AI and machine learning.'
  },
  {
    icon: '🛠️',
    title: 'Customizable Solutions',
    description: 'We offer tailored automation solutions to meet your specific industry needs.'
  },
  {
    icon: '🌿',
    title: 'Eco-friendly Operations',
    description: 'Our products are designed with sustainability in mind, reducing environmental impact.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-100">
          Why Choose <span
							className="text-indigo-400"
							>Armify</span> ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <motion.div 
                className="text-4xl mb-4"
                animate={{ rotate: [0, 1, 0, -1, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                {reason.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-200">{reason.title}</h3>
              <p className="text-gray-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;