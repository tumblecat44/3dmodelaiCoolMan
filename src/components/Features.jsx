import { motion } from 'framer-motion';
import { Layers, Zap, Box, Share2, Shield, LayoutGrid } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-neon" />,
    title: "Instant Generation",
    description: "Create complex 3D models in seconds using our proprietary diffusion models."
  },
  {
    icon: <Layers className="w-6 h-6 text-neon" />,
    title: "Production Ready",
    description: "Export in GLB, FBX, or OBJ with optimized topology and PBR textures."
  },
  {
    icon: <Box className="w-6 h-6 text-neon" />,
    title: "Style Consistency",
    description: "Train custom LoRAs to maintain your brand's unique visual identity."
  },
  {
    icon: <Share2 className="w-6 h-6 text-neon" />,
    title: "Collaborative Workspaces",
    description: "Share assets with your team and review changes in real-time 3D viewer."
  },
  {
    icon: <Shield className="w-6 h-6 text-neon" />,
    title: "Enterprise Security",
    description: "SOC2 compliant infrastructure ensures your intellectual property is safe."
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-neon" />,
    title: "API Integration",
    description: "Seamlessly integrate 3D generation into your existing pipeline or game engine."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Engineered for <span className="text-neon">Creativity</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A suite of powerful tools designed to accelerate your 3D workflow without compromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group hover:border-neon/30"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-surface border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
