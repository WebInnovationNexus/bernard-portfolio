import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bernardPoster from '@/assets/bernard-campaign-poster.png';

const Hero = () => {
  const scrollToManifesto = () => {
    const element = document.getElementById('manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-lighter to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            BERNARD
            <br />
            <span className="text-primary-lighter">MAKGOPA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              Marketing & Recruitment
            </p>
            <p className="text-sm text-white/80 mb-6">
              Faculty of Education - NWU
            </p>
            
            <div className="typewriter text-lg md:text-xl text-white font-medium">
              "Let's work together to make your voice heard through voting."
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <Button
              onClick={scrollToManifesto}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-button transition-campaign"
            >
              View My Manifesto
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.img
              src={bernardPoster}
              alt="Bernard Makgopa Campaign Poster"
              className="w-full max-w-md rounded-lg shadow-campaign"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-campaign flex items-center justify-center"
            >
              <span className="text-2xl">🗳️</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/70 cursor-pointer"
          onClick={scrollToManifesto}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;