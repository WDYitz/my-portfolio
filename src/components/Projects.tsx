import { motion } from 'motion/react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { useState } from 'react';
import Image from 'next/image';

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'freelance' | 'academic'>('all');

  const projects = [
    {
      id: 1,
      category: 'freelance',
      title: 'Deck Lounge Restaurante',
      description: 'Landing page para um restaurante rustico e aconchegante, destacando seu cardápio, regras do restaurante, fotos, localização e contato.',
      image: '/projects/decklounge.png',
      technologies: ['React', 'Next', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://exemplo.com'
    },
    {
      id: 1,
      category: 'freelance',
      title: 'Deck Lounge Restaurante Cardápio',
      description: 'Cardápio digital para um restaurante rustico e aconchegante, permitindo aos clientes visualizar os ingredientes e preços dos pratos.',
      image: '/projects/cardapio.png',
      technologies: ['React', 'Next', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://exemplo.com'
    },
    {
      id: 2,
      category: 'freelance',
      title: 'Art Impressa Gráfica',
      description: 'Landing page para uma gráfica, destacando seus serviços de impressão, portfólio, depoimentos de clientes e informações de contato.',
      image: '/projects/artimpressa.png',
      technologies: ['Wordpress', 'Hostinger', 'HTML', 'CSS'],
      github: 'https://github.com',
      demo: 'https://exemplo.com'
    },
    {
      id: 3,
      category: 'academic',
      title: 'Supplify',
      description: 'Plataforma de gerenciamento de inventário que permite aos usuários criar e gerenciar seu estoque, controlando entradas e saídas de produtos com insights detalhados e personalizados.',
      image: '/projects/supplify.png',
      technologies: ['React', 'Next', 'TypeScript', 'PrismaORM', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
      github: 'https://github.com'
    },
    {
      id: 4,
      category: 'academic',
      title: 'Finance AI',
      description: 'Plataforma de gestão financeira que utiliza IA para monitorar transações e fornecer insights personalizados, facilitando o controle orçamentário dos usuários.',
      image: '/projects/finance_ai.png',
      technologies: ['React', 'Next', 'TypeScript', 'Recharts', 'Context API'],
      github: 'https://github.com'
    },
    {
      id: 5,
      category: 'academic',
      title: 'New Santos Food',
      description: 'Aplicativo móvel para pedidos de comida, permitindo aos usuários navegar por restaurantes locais, personalizar pedidos e acompanhar entregas em tempo real.',
      image: '/projects/nsf.png',
      technologies: ['React', 'Next', 'PostgreSQL', 'OAuth2', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://exemplo.com'
    },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

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
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Folder className="text-white" size={36} />
            </motion.div>

            <h1 className="mb-6">Meus Projetos</h1>
            <p className="text-white/70 text-lg mb-8">
              Uma seleção dos projetos que desenvolvi, abrangendo trabalhos freelance, acadêmicos e outros.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg transition-all ${filter === 'all'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
              >
                Todos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('freelance')}
                className={`px-6 py-2 rounded-lg transition-all ${filter === 'freelance'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
              >
                Freelance
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('academic')}
                className={`px-6 py-2 rounded-lg transition-all ${filter === 'academic'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
              >
                Acadêmicos
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-white/5">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm rounded-full text-xs uppercase tracking-wide">
                      {project.category === 'freelance' ? 'Freelance' : 'Acadêmicos'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
                    >
                      <Github size={16} />
                      Código
                    </motion.a>

                    {project.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Folder className="text-white/40" size={36} />
              </div>
              <p className="text-white/60">Vázio</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Technologies Section */}
      <section className="py-20 bg-white/5 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Tech Stack Highlights</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Principais tecnologias utilizadas nos projetos mais recentes
            </p>
          </motion.div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {[
              { name: 'React', icon: "/react.png", color: 'from-cyan-500 to-blue-500' },
              { name: 'TypeScript', icon: '/typescript.png', color: 'from-blue-600 to-blue-700' },
              { name: 'Next.js', icon: '/next.png', color: 'from-gray-800 to-black' },
              { name: 'Node.js', icon: '/node.png', color: 'from-green-600 to-green-700' },
              { name: 'Tailwind', icon: '/tailwindcss.png', color: 'from-cyan-400 to-blue-500' },
              { name: 'PostgreSQL', icon: '/postgresql.png', color: 'from-blue-500 to-indigo-600' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all h-full flex flex-col items-center justify-center gap-3">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg`}>
                    <Image
                      src={'/icons' + tech.icon}
                      className={`${tech.name === 'Next.js' ? '' : 'bg-white rounded-full p-1'}`}
                      alt={tech.name}
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="text-sm text-center group-hover:text-orange-500 transition-colors">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500/20 via-orange-600/20 to-pink-500/20 border border-orange-500/30 rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="mb-4">Veja mais</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Esses são apenas alguns dos projetos que desenvolvi. Se quiser ver mais, visite meu GitHub ou entre em contato!
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/WDYitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    Ver GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:yitzhakrodriguez.0901@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/20"
                  >
                    Enviar Email
                  </motion.a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Repositórios', value: '50+' },
                  { label: 'Projetos Concluídos', value: '10+' },
                  { label: 'Tecnologias', value: '20+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="text-2xl md:text-3xl text-orange-500 mb-1">{stat.value}</div>
                    <div className="text-xs text-white/60">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
