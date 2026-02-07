import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import clsx from 'clsx';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for hobbyists and testing the waters.',
    features: [
      '50 Generations / month',
      'Standard Quality Mesh',
      'Personal License',
      'Community Support',
      'Public Showcase',
    ],
    missing: ['Commercial License', 'High-res Textures', 'API Access'],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 290 },
    description: 'For professional creators and indie developers.',
    features: [
      'Unlimited Generations',
      'High Quality Quad Mesh',
      'Commercial License',
      '4K PBR Textures',
      'private_LoRA training',
      'Priority Support',
    ],
    missing: ['API Access'],
    cta: 'Get Pro',
    popular: true,
  },
  {
    name: 'Studio',
    price: { monthly: 99, yearly: 990 },
    description: 'For game studios and enterprise teams.',
    features: [
      'Everything in Pro',
      'API Access',
      'Team Collaboration',
      'SSO & Advanced Security',
      'Dedicated Success Manger',
      'Custom Model Finetuning',
    ],
    missing: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'

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

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={clsx("text-sm font-medium transition-colors", billingCycle === 'monthly' ? 'text-white' : 'text-gray-500')}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="w-14 h-8 bg-white/10 rounded-full p-1 relative transition-colors focus:outline-none focus:ring-2 focus:ring-neon/50"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={clsx(
                  "w-6 h-6 bg-neon rounded-full shadow-md",
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                )}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
