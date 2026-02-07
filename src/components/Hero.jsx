import { motion } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import Banana3D from './Banana3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-glow/10 via-dark-bg to-dark-bg z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Generative 3D AI</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Imagine in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">Dimensions.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
            Turn text prompts into production-ready 3D assets in seconds. High-fidelity meshes, PBR textures, and quad topology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center">
                Start Generating <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-neon transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
            
            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-medium text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              View Showcase
            </button>
          </div>
        </motion.div>

        {/* Visual Content (3D Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative h-[500px] w-full flex items-center justify-center perspective-1000"
        >
            <Banana3D />
        </motion.div>

      </div>
    </section>
  );
}
