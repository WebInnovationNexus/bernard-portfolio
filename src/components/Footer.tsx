import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-sm">
                © 2025 Bernard Makgopa. All rights reserved.
              </p>
            </div>
            
            <div>
              <p className="text-sm">
                Designed by{' '}
                <a
                  href="https://webinnovationnexus.com/"
                  className="font-semibold text-primary-light"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Innovation Nexus
                </a>
              </p>
            </div>

          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 pt-6 border-t border-background/20"
          >
            <p className="text-xs text-background/70">
              Vote for Marketing & Recruitment - Faculty of Education, NWU
            </p>
            <p className="text-xs text-background/70">
              September 29th - 30th, 2025
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;