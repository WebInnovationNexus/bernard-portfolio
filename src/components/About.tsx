import { motion } from 'framer-motion';
import { MapPin, BookOpen, Music, Video, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import bernardCasual from '@/assets/bernard-casual.jpg';

const About = () => {
  const hobbies = [
    { icon: Video, label: 'TikTok video creation', color: 'text-pink-500' },
    { icon: BookOpen, label: 'Reading novels', color: 'text-blue-500' },
    { icon: Users, label: 'Playing soccer', color: 'text-green-500' },
    { icon: Music, label: 'NWU Serenaders member', color: 'text-purple-500' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Bernard</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src={bernardCasual}
                alt="Bernard Makgopa"
                className="w-full max-w-md rounded-lg shadow-campaign"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary rounded-full shadow-campaign flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="shadow-campaign">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">My Story</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I was born in Limpopo province, from a small village called Moroke. A proud Pedi man, 
                  now a second-year student in the Faculty of Education at NWU. I am also a member of 
                  the NWU Serenaders, where I've learned the value of teamwork, dedication, and bringing 
                  people together through shared passion.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-campaign">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-4">Hobbies & Interests</h3>
                <div className="grid grid-cols-2 gap-4">
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <hobby.icon className={`h-6 w-6 ${hobby.color}`} />
                      <span className="text-foreground/80">{hobby.label}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground p-6 rounded-lg shadow-campaign"
            >
              <p className="text-lg font-medium">
                "From Moroke to NWU, my journey has been about connection, creativity, and community. 
                I believe in bringing people together and making every voice count."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;