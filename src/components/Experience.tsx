import { motion } from 'framer-motion';
import { Award, Users, MessageCircle, Lightbulb, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import trophyImage from '@/assets/trophy.jpg';

const Experience = () => {
  const experiences = [
    {
      title: 'Head of Marketing',
      organization: 'Phafane Senior Secondary School',
      period: '2021',
      description: 'Led marketing initiatives and managed social media presence for school events and activities.',
      achievements: [
        'Increased social media engagement by 200%',
        'Successfully promoted major school events',
        'Created promotional materials and campaigns',
        'Managed team of student marketers'
      ],
      icon: Award
    },
    {
      title: 'NWU Serenaders Member',
      organization: 'North-West University',
      period: '2024-Present',
      description: 'Active member of the university choir, participating in competitions and performances.',
      achievements: [
        'Competed in national choir competitions',
        'Performed at university ceremonies',
        'Collaborated with diverse team members',
        'Developed discipline and teamwork skills'
      ],
      icon: Trophy
    }
  ];

  const skills = [
    { name: 'Problem-solving', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Communication', icon: MessageCircle, color: 'bg-blue-100 text-blue-800' },
    { name: 'Teamwork', icon: Users, color: 'bg-green-100 text-green-800' },
    { name: 'Social Media Management', icon: Award, color: 'bg-purple-100 text-purple-800' },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:pl-80">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building leadership through action and achievement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Cards */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="shadow-campaign hover:shadow-lg transition-campaign">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <exp.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills & Trophy */}
          <div className="space-y-6">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-campaign">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Core Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <skill.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <Badge className={skill.color}>{skill.name}</Badge>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Trophy Achievement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-campaign">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">Recent Achievement</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    src={trophyImage}
                    alt="GACMA Eisteddfod 2022 Gold Overall Position 1 Trophy"
                    className="w-full rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-primary mb-2">GACMA EISTEDDFOD 2022</h4>
                  <p className="text-sm text-muted-foreground mb-2">GOLD OVERALL - POSITION 1</p>
                  <p className="text-foreground/80">
                    Achieved first place in a competitive cultural competition, demonstrating excellence 
                    in performance and teamwork.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;