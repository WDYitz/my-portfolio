import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  icon?: ReactNode;
}

export function TimelineItem({ year, title, description, index, icon }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="relative"
    >
      {/* Mobile and Tablet Layout */}
      <div className="flex gap-6 md:hidden">
        {/* Timeline Line & Dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shrink-0 relative z-10 shadow-lg shadow-orange-500/50"
          >
            {icon || <span className="text-sm">{year.slice(-2)}</span>}
          </motion.div>
          {index !== 5 && (
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
              className="w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent flex-1 mt-2"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 pb-12">
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-white/10 transition-all"
          >
            
            <h3 className="mb-3">{title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
        {isEven ? (
          <>
            {/* Content Left */}
            <div className="text-right">
              <motion.div
                whileHover={{ x: -5, y: -2 }}
                className="inline-block max-w-md ml-auto"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-white/10 transition-all">
                  <div className="text-orange-500 text-sm mb-2">{year}</div>
                  <h3 className="mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            </div>

            {/* Dot Right */}
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white relative z-10 shadow-lg shadow-orange-500/50"
              >
                {icon || <span className="text-sm">{year}</span>}
              </motion.div>
            </div>
          </>
        ) : (
          <>
            {/* Dot Left */}
            <div className="flex items-center justify-end">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white relative z-10 shadow-lg shadow-orange-500/50"
              >
                {icon || <span className="text-sm">{year}</span>}
              </motion.div>
            </div>

            {/* Content Right */}
            <div className="text-left">
              <motion.div
                whileHover={{ x: 5, y: -2 }}
                className="inline-block max-w-md"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 hover:bg-white/10 transition-all">
                  <div className="text-orange-500 text-sm mb-2">{year}</div>
                  <h3 className="mb-3">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      {/* Desktop Center Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
        <div className="sticky top-20 h-screen">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent"
          />
        </div>
      </div>

      {/* Timeline Items */}
      <div className="space-y-0">
        {children}
      </div>
    </div>
  );
}
