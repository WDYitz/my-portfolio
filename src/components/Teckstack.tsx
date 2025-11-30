import { technologies } from '@/static/technologies';
import { motion } from 'motion/react';
import Image from 'next/image';

export const TechStack = () => {

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-4">Tecnologias & Ferramentas</h2>
          <p className="text-white/60">Ferramentas que utilizo no dia a dia
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryTechs = technologies.filter(tech => tech.category === category);

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-wider text-orange-500 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {categoryTechs.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                    >
                      <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:border-orange-500/50 transition-all cursor-default">
                        <div className="flex items-center gap-2">
                          <Image
                            className="w-2 h-2 rounded-full"
                            src={tech.icon} alt={tech.name}
                            width="40"
                            height="40"
                          />
                          <span className="text-sm">{tech.name}</span>
                        </div>
                      </div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black border border-white/20 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {tech.category}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
