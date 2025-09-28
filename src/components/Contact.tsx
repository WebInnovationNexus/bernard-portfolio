import { motion } from 'framer-motion';
import { Mail, Facebook, Instagram, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      link: 'mailto:bernardmakgopa792@gmail.com',
      color: 'hover:text-blue-600',
      label: 'bernardmakgopa792@gmail.com'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      link: 'https://www.facebook.com/bernard.makgopa.3',
      color: 'hover:text-blue-600',
      label: 'Connect on Facebook'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      link: 'https://www.instagram.com/bernardmakgopa792/',
      color: 'hover:text-pink-600',
      label: 'Follow on Instagram'
    }
  /*   {
      name: 'TikTok',
      icon: Music,
      link: '#',
      color: 'hover:text-black',
      label: 'Watch on TikTok'
    } */
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to make a difference together? Get in touch and join the conversation!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <Card className="hero-gradient text-primary-foreground shadow-campaign">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">
                  <b>Vote Bernard Makgopa</b>
                </CardTitle>
                <p className="text-xl text-primary-foreground/90">
                  Marketing & Recruitment - Faculty of Education
                </p>
                <p className="text-lg text-primary-foreground/80 mt-2">
                  Voting: September 29th - 30th, 2025
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg mb-6 text-primary-foreground/90">
                  <b>"Let's work together to make your voice heard through voting."</b>
                </p>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-button"
                  onClick={() => window.open('https://wa.me/27796694136', '_blank')}
                >
                  Send Me a Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-campaign hover:shadow-lg transition-campaign group cursor-pointer">
                  <CardContent
                    className="p-6 text-center"
                    onClick={() => social.link !== '#' && window.open(social.link, '_blank')}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-campaign ${social.color}`}>
                      <social.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{social.name}</h3>
                    <p className="text-sm text-muted-foreground">{social.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Card className="shadow-campaign">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">Why Your Vote Matters</h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Your voice deserves to be heard, and your student experience should be nothing short of amazing. 
                  By voting for <b>Bernard Makgopa</b>, you're choosing stronger visibility, better marketing, and more 
                  opportunities for student engagement within our Faculty of Education.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <div className="text-2xl font-bold text-primary">221+</div>
                    <div className="text-sm text-muted-foreground">Students Reached</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-primary">0</div>
                    <div className="text-sm text-muted-foreground">Day to Vote</div>
                  </div>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-primary">1</div>
                    <div className="text-sm text-muted-foreground">Voice That Counts</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;