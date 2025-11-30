"use client"
import { motion } from 'motion/react';
import { Linkedin, Github, Mail, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { TechStack } from '@/components/Teckstack';
import { useEffect, useRef } from 'react';

export const Home = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const experiences = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Excel Avançado - SENAC',
      subtitle: 'Experiência em criação de planilhas complexas e automação de tarefas',
      description: 'Curso focado em técnicas avançadas de Excel, incluindo tabelas dinâmicas, macros e análise de dados.',
      period: '2019'
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Tecnologia da Informação - SENAC',
      subtitle: 'Experiência em projetos web e desktop - Full Stack',
      description: 'Graduado em Tecnologia da Informação com ênfase em desenvolvimento web, redes de computadores e segurança da informação.',
      period: '2021 - 2023'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Cursos & Certificações',
      subtitle: 'Aprendizado contínuo',
      description: 'Diversos cursos em desenvolvimento web, incluindo React avançado, Node.js, bancos de dados, UX/UI, Docker e metodologias ágeis.',
      period: '2021 - Presente'
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: 'Sistemas de Informação - Descomplica',
      subtitle: 'Experiência em desenvolvimento de software e gestão de TI',
      description: 'Graduação em andamento com foco em desenvolvimento de software, análise de sistemas e gestão de projetos de TI.',
      period: '2022 - 2026'
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: 'Beegray Marketing Digital',
      subtitle: 'Desenvolvedor Mobile na Beegray Marketing Digital',
      description: 'Atuação no desenvolvimento de soluções mobile utilizando tecnologias modernas, focando em experiência do usuário e usabilidade.',
      period: '2024 - 3 Meses'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    const animation = "motion-scale-in-[0.43] motion-translate-x-in-[-30%] motion-translate-y-in-[40%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.53s]/scale motion-duration-[0.57s]/translate motion-duration-[0.64s]/opacity motion-duration-[0.63s]/rotate motion-duration-[0.35s]/blur delay-500"
    imageRef.current?.classList.add(...animation.split(" "));
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-500 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6"
              >
                <span className="text-orange-500">Software Developer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight"
              >
                Yitzhak Ben Rodriguez
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/70 mb-8 text-lg"
              >
                Movido pelo desejo de aprender e inovar. Entusiasta de tecnologias de desenvolvimento web com forte base no frontend.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/yitzhakbenrodriguez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/WDYitz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                >
                  <Github size={20} />
                  GitHub
                </motion.a>
              </motion.div>

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                href="mailto:contato@exemplo.com"
                className="inline-flex items-center gap-2 text-white/60 hover:text-orange-500 transition-colors"
              >
                <Mail size={18} />
                yitzhakrodriguez.0901@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
            >
              <div className="relative" ref={imageRef}>
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"
                />
                <div className="relative w-72 sm:w-96 sm:h-[400px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl overflow-hidden">
                  <ImageWithFallback
                    src="/me-2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4">Formação & Experiência</h2>
            <p className="text-white/60">Minha trajetória acadêmica e profissional.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                  {exp.icon}
                </div>
                <div className="text-sm text-orange-500 mb-2">{exp.period}</div>
                <h3 className="mb-2">{exp.title}</h3>
                <div className="text-sm text-white/60 mb-3">{exp.subtitle}</div>
                <p className="text-white/50 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code2 className="text-orange-500" size={32} />
              </div>
              <h2 className="mb-4">Bora trabalhar juntos?</h2>
              <p className="text-white/70 mb-8 text-lg">
                Sempre em busca de novos desafios. Se você tem um projeto em mente ou só quer trocar uma ideia sobre tech, meu inbox tá aberto!
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:yitzhakrodriguez.0901@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
              >
                <Mail size={20} />
                Entrar em contato
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
