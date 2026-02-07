import { motion } from 'framer-motion';
import { Banana, ScanLine, Sparkles } from 'lucide-react';

export default function Banana3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Container for the 3D visualization */}
      <div className="relative w-80 h-80 perspective-1000">
        
        {/* Animated Platform */}
        <motion.div 
          animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 border-2 border-neon/30 rounded-full border-dashed"
        />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-neon/5 rounded-full blur-xl" />

        {/* The Banana Object layers */}
        <div className="relative z-10 filter drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
            {/* Wireframe Layer */}
            <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 text-neon"
            >
                <Banana size={200} strokeWidth={1} className="opacity-50" />
            </motion.div>

            {/* Solid "Rendered" Layer with Clip Path for Scanning Effect */}
            <motion.div
                animate={{ clipPath: ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 100% 0%)"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative text-yellow-400"
            >
                 <Banana size={200} strokeWidth={2} fill="currentColor" className="drop-shadow-2xl" />
            </motion.div>

             {/* Scan Line */}
             <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 h-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,1)] z-20"
            >
                <div className="absolute right-0 -top-3 text-xs font-mono text-white bg-black/50 px-1 rounded">Scanning...</div>
            </motion.div>
        </div>

        {/* Floating UI Elements */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-0 right-0 bg-dark-surface/90 backdrop-blur border border-white/10 p-3 rounded-xl shadow-2xl"
        >
            <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                <Sparkles size={12} className="text-neon" />
                <span>AI Processing</span>
            </div>
            <div className="text-white font-mono text-sm">Generating Mesh...</div>
            <div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
                <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="h-full bg-neon" 
                />
            </div>
        </motion.div>

      </div>
    </div>
  );
}
