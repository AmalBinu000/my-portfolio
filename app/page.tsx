"use client";

import { Nav } from '@/components/nav';
import { SectionHeading } from '@/components/section-heading';
import { AnimatedSection } from '@/components/animated-section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { useRef } from 'react';

const projects = [
  {
    title: "CollabHub",
    description: "Developed a social media post app using React and Tailwind CSS, allowing users to share images, comment on posts, and create groups. Designed for a seamless user experience with an intuitive interface and dynamic interactions.",
    image: "/images/project1.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/sakshi1703/Error_404",
    demo: "https://teal-sable-2fe58a.netlify.app/"
  },
  {
    title: "Text to Speech",
    description: "Developed text-to-speech application using JavaScript's SpeechSynthesis API with multi-voice selection, enabling users to customize voice settings for a personalized experience. Designed an intuitive interface with real-time conversion, ensuring clear audio output, accessibility, and optimal performance.",
    image: "/images/project2.jpg",
    tech: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/AmalBinu000/Text-To-Speech",
    demo: "https://elaborate-syrniki-b90267.netlify.app/"
  },
];

const skills = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <main className="min-h-screen bg-background" ref={targetRef}>
      <Nav />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
        <motion.div
          style={{ opacity, scale, y }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Image
            src="/images/profile.jpg" // Make sure this path is correct
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full mx-auto shadow-xl object-cover object-center"
            />
          </motion.div>
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Amal Binu
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Frontend Developer
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1qEhqOReByE4wWgDCM2iNtRJGs6Xsf_KF/view?usp=sharing
"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <SectionHeading>About Me</SectionHeading>
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <motion.p 
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              I'm a passionate frontend developer specializing in creating responsive, interactive web experiences with React, Next.js, and Tailwind CSS. With strong skills in HTML, CSS, and JavaScript, I transform design concepts into clean, efficient code that delivers exceptional user experiences across all devices. I stay current with emerging technologies while focusing on building accessible, scalable applications. My approach balances technical expertise with creative problem-solving, allowing me to craft intuitive interfaces that effectively connect user needs with business goals.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <SectionHeading>Skills & Technologies</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center p-4 bg-background rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)"
                }}
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mb-2"
                />
                <p className="text-sm font-medium">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <SectionHeading>Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-20 bg-muted/30 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <SectionHeading>GitHub Contributions</SectionHeading>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GitHubCalendar
              username="amalbinu000"
              colorScheme="light"
              fontSize={12}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <SectionHeading>Get In Touch</SectionHeading>
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              {[
                { icon: Mail, text: "amalbinu000@gmail.com" },
                { icon: Phone, text: "+91 6238877396" },
                { icon: Github, text: "GitHub Profile", href: "https://github.com/amalbinu000" },
                { icon: Linkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/amal-binu-228959173/" }
              ].map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10
                  }}
                >
                  <contact.icon className="w-6 h-6" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}