import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye, Megaphone, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Manifesto = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const promises = [
    {
      icon: Eye,
      title: 'Stronger Visibility',
      subtitle: 'Making SAC seen and heard',
      description: 'Through strategic social media campaigns and eye-catching poster designs, I will ensure that our Student Advisory Council becomes a visible and recognizable presence on campus.',
      details: [
        'Professional social media content creation across all platforms',
        'Strategic poster placement in high-traffic areas',
        'Regular updates on SAC activities and achievements',
        'Interactive digital campaigns to boost engagement',
      ]
    },
    {
      icon: Megaphone,
      title: 'Student-Friendly Marketing',
      subtitle: 'Content that speaks to you',
      description: 'Creating relatable, creative, and interactive content that resonates with students and makes SAC approachable and engaging for everyone.',
      details: [
        'TikTok-style video content showcasing SAC activities',
        'Meme-worthy posts that students actually want to share',
        'Interactive polls and Q&A sessions',
        'Behind-the-scenes content to humanize our council',
      ]
    },
    {
      icon: Users,
      title: 'More Recruitment Opportunities',
      subtitle: 'Growing our community',
      description: 'Establishing SAC Ambassador programs and creating partnerships with various societies to expand our reach and create more meaningful connections.',
      details: [
        'SAC Ambassador program for peer-to-peer outreach',
        'Partnerships with existing student societies',
        'Regular recruitment drives with fun activities',
        'Mentorship programs for new SAC members',
      ]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="manifesto" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">My Manifesto</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marketing & Recruitment for Faculty of Education
          </p>
        </motion.div>

        {/* Motivation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="shadow-campaign border-l-4 border-l-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Why I'm Running</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm running for Marketing & Recruitment because I want our SAC to be more than just a name... it should be 
                something students actually see, feel, and benefit from. Through my experience with content creation, 
                social media, and community building, I know how to make our council not just visible, but valuable 
                to every student in our faculty.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Promises */}
        <div className="grid gap-6 mb-12">
          {promises.map((promise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="shadow-campaign hover:shadow-lg transition-campaign">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <promise.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{promise.title}</h3>
                        <p className="text-muted-foreground">{promise.subtitle}</p>
                      </div>
                    </div>
                    {expandedCard === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-foreground/80 mb-4">{promise.description}</p>
                  
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <h4 className="font-semibold text-primary">Detailed Plan:</h4>
                      {promise.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="hero-gradient text-primary-foreground shadow-campaign">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Change?</h3>
              <p className="text-lg mb-6 text-primary-foreground/90">
                Vote for Bernard Makgopa on 29 - 30 September 2025, on eFundi, Education Chapter 2025, then Polls.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;