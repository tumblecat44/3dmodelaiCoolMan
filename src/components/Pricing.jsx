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
            <span className={clsx("text-sm font-medium transition-colors", billingCycle === 'yearly' ? 'text-white' : 'text-gray-500')}>
              Yearly <span className="text-neon text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={clsx(
                "relative p-8 rounded-3xl border transition-all duration-300 flex flex-col h-full",
                plan.popular 
                  ? "bg-white/[0.03] border-neon shadow-[0_0_30px_rgba(204,255,0,0.1)] scale-105 z-10" 
                  : "bg-white/[0.01] border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-neon text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-serif font-bold text-white">
                    ${billingCycle === 'monthly' ? plan.price.monthly : Math.round(plan.price.yearly / 12)}
                  </span>
                  <span className="text-gray-500 ml-2">/ month</span>
                </div>
                {billingCycle === 'yearly' && plan.price.yearly > 0 && (
                    <div className="text-xs text-neon mt-1">Billed ${plan.price.yearly} yearly</div>
                )}
              </div>

              <div className="flex-grow mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-neon shrink-0 mr-3" size={18} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div key={feature} className="flex items-start opacity-50">
                    <X className="w-5 h-5 text-gray-600 shrink-0 mr-3" size={18} />
                    <span className="text-sm text-gray-500 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={clsx(
                  "w-full py-3 rounded-xl font-semibold transition-all duration-300",
                  plan.popular
                    ? "bg-neon text-black hover:bg-[#b3e600] shadow-[0_4px_14px_rgba(204,255,0,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
