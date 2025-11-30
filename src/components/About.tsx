import { motion } from 'motion/react';
import { Briefcase, Code, Heart, Lightbulb, Target, Users, Download, ExternalLink } from 'lucide-react';
import { Timeline, TimelineItem } from './Timeline';

export const About = () => {

  const journey = [
    {
      year: '2019',
      title: 'Curso de Excel Avançado',
      description: 'curso de Excel avançado e comecei a explorar o mundo do desenvolvimento web, aprendendo HTML, CSS e JavaScript básico.'
    },
    {
      year: '2021',
      title: 'Curso Técnico em Tecnologia da Informação',
      description: 'Iniciei um curso técnico que me proporcionou uma base sólida em conceitos de TI e desenvolvimento de software e desktop.'
    },
    {
      year: '2022',
      title: 'Aprendizado Avançado',
      description: 'Aprofundei meus conhecimentos em linguagens de programação e frameworks, participando de cursos e desenvolvendo projetos pessoais.'
    },
    {
      year: '2022',
      title: 'Início da Graduação',
      description: 'Comecei minha graduação em Sistemas de Informação, aprofundando meus conhecimentos em algoritmos, estruturas de dados e desenvolvimento de software.'
    },
    {
      year: '2022',
      title: '14° Evento de Empreendedorismo na area portuaria de Santos',
      description: 'Participei do evento focado em inovação e empreendedorismo, onde pude colocar em pratica meus conhecimentos técnicos e fazer networking com profissionais da área.'
    },
    {
      year: '2023',
      title: 'Projetos Freelance',
      description: 'Desenvolvi projetos freelance, aplicando meus conhecimentos em desenvolvimento web e colaborando com clientes para criar soluções personalizadas.'
    },
    {
      year: '2023',
      title: 'Certificações e Especializações',
      description: 'Obtive certificações em tecnologias específicas como React, Node, Banco de daodos e participei de especializações para aprimorar minhas habilidades técnicas.'
    },
    {
      year: '2024',
      title: 'Desenvolvedor Mobile',
      description: 'Consegui minha primeira oportunidade na área de desenvolvimento, onde trabalhei com aplicações mobile utilizando React Native e Expo.'
    },
  ];

  const values = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Código Limpo',
      description: 'Acredito que código bem escrito é código que outros desenvolvedores conseguem entender e manter facilmente.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Aprendizado Contínuo',
      description: 'Estou sempre buscando aprender novas tecnologias e ferramentas.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Trabalho em Equipe',
      description: 'Valorizo a colaboração e acredito que as melhores soluções surgem quando há trabalho em equipe.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Foco em Resultados',
      description: 'Código é o meio, não fim. O objetivo é sempre resolver problemas reais e criar valor para os usuários.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="text-white" size={36} />
            </motion.div>

            <h1 className="mb-6">Sobre Mim</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Sou Yitzhak Ben Rodriguez, Desenvolvedor Fullstack apaixonado por criar experiências digitais que fazem a diferença. Com mais de 2 anos de experiência, transformo ideias em produtos digitais.
            </p>
          </motion.div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Briefcase className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Trajetória Profissional</h3>
                  <p className="text-white/60 text-sm">2+ anos de experiência</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Minha jornada como Desenvolvedor começou com a curiosidade e a paixão por tecnologia. Trabalhei como Freelancer e Desenvolvedor Mobile, sempre focado em entregar soluções de qualidade.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">Full Stack</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">Front-end</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">Back-end</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm">DevOps</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                  <Heart className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Desenvolvimento Pessoal</h3>
                  <p className="text-white/60 text-sm">Além do código</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                Acredito que ser um bom desenvolvedor vai além de escrever código. Valorizo o equilíbrio, comunicação, empatia, organização. Quando não estou programando, gosto de aprender sobre design, UX/UI e novas tendências tecnológicas.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/curriculo_pt.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="mb-4">Minha Jornada</h2>
            <p className="text-white/60">A evolução da minha carreira como desenvolvedor</p>
          </motion.div>

          <Timeline>
            {journey.map((item, index) => (
              <TimelineItem
                key={item.year}
                year={item.year}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </Timeline>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">Valores & Princípios</h2>
            <p className="text-white/60">O que guia meu trabalho como desenvolvedor</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 text-orange-500">
                  {value.icon}
                </div>
                <h3 className="mb-3 text-lg">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="mb-4">Quer conhecer meu trabalho?</h2>
            <p className="text-white/70 mb-8 text-lg max-w-2xl mx-auto">
              Confira meus projetos e veja como transformo ideias em realidade através do código.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
            >
              Ver Projetos
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
