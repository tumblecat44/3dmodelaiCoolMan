import { motion } from 'framer-motion';

const showcaseItems = [
  { id: 1, type: 'Character', title: 'Cyber Samurai', image: 'bg-red-500/20' },
  { id: 2, type: 'Prop', title: 'Vintage Camera', image: 'bg-blue-500/20' },
  { id: 3, type: 'Environment', title: 'Floating Island', image: 'bg-green-500/20' },
  { id: 4, type: 'Vehicle', title: 'Hover Bike', image: 'bg-purple-500/20' },
  { id: 5, type: 'Character', title: 'Elf Archer', image: 'bg-yellow-500/20' },
  { id: 6, type: 'Prop', title: 'Magic Potion', image: 'bg-pink-500/20' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Made with <span className="text-neon">Nether</span>.
            </h2>
            <p className="text-gray-400">Explore what's possible with our generation engine.</p>
          </div>
          <button className="hidden md:block text-neon hover:text-white transition-colors text-sm font-medium border-b border-neon pb-1">
            View All Creations
          </button>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className={`w-full ${index % 2 === 0 ? 'h-96' : 'h-72'} ${item.image} relative transition-all duration-500 group-hover:scale-110`}>
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-neon uppercase tracking-wider font-semibold mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {item.type}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-1">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <button className="text-neon hover:text-white transition-colors text-sm font-medium border-b border-neon pb-1">
                View All Creations
            </button>
        </div>
      </div>
    </section>
  );
}
