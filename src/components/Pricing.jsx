import { Check, X } from 'lucide-react';


export default function Pricing() {

  return (
    <section id="pricing" className="py-24 bg-dark-bg relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Simple, transparent <span className="text-neon">pricing</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
            Choose the perfect plan for your creative needs.
          </p>

        </div>
      </div>
    </section>
  );
}
