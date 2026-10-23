import { useState } from 'react'
import { Check, MoveRight } from 'lucide-react'

const defaultPlans = [
  {
    id: 'solar',
    title: 'Solar Essentials',
    desc: 'A tailored solar system designed around your property and energy use.',
    monthlyPrice: 'Custom quote',
    annuallyPrice: 'Custom quote',
    buttonText: 'Request a quote',
    features: [
      'Property and energy-use assessment',
      'Solar panels and inverter system',
      'System monitoring options',
      'Installation planning and support',
    ],
  },
  {
    id: 'solar-storage',
    title: 'Solar + Storage',
    desc: 'Solar power with battery storage for more flexibility at home.',
    monthlyPrice: 'Custom quote',
    annuallyPrice: 'Custom quote',
    badge: 'More flexibility',
    buttonText: 'Explore storage',
    features: [
      'Everything in Solar Essentials',
      'Battery sized to your needs',
      'Store surplus solar generation',
      'Use stored energy after sunset',
    ],
  },
]

export default function PricingFlow({ plans = defaultPlans, defaultBillPlan = 'annually' }) {
  const [billPlan, setBillPlan] = useState(defaultBillPlan)

  return (
    <section className="bg-[#f5f7ef] px-5 py-16 text-[#20382d] sm:px-8 md:py-24" aria-labelledby="pricing-flow-title">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">Plans & pricing</p>
          <h2 id="pricing-flow-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            Solar that fits your plans.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5b6e61] sm:text-base">
            Every home is different, so we create a quote around your property, energy use, and chosen equipment.
          </p>
        </div>

        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#66806d]">Quote preference</span>
          <div className="inline-flex border border-[#cbd4c5] bg-[#fffef8] p-1" role="group" aria-label="Choose quote preference">
            {[
              { id: 'monthly', label: 'Monthly' },
              { id: 'annually', label: 'Annually' },
            ].map((option) => (
              <button
                className={`min-h-10 min-w-24 px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440] ${
                  billPlan === option.id ? 'bg-[#20382d] text-white' : 'text-[#526657] hover:bg-[#edf1e8]'
                }`}
                type="button"
                key={option.id}
                aria-pressed={billPlan === option.id}
                onClick={() => setBillPlan(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {plans.map((plan) => {
            const price = billPlan === 'monthly' ? plan.monthlyPrice : plan.annuallyPrice
            return (
              <article className="relative flex flex-col border border-[#d7dfd3] bg-[#fffef8] p-6 sm:p-8" key={plan.id}>
                {plan.badge && (
                  <span className="absolute right-5 top-5 bg-[#e6edce] px-3 py-1 text-[11px] font-semibold text-[#315440] sm:right-8 sm:top-8">
                    {plan.badge}
                  </span>
                )}
                <h3 className="pr-28 text-xl font-semibold">{plan.title}</h3>
                <p className="mt-3 min-h-12 max-w-sm text-sm leading-6 text-[#718074]">{plan.desc}</p>
                <p className="mt-7 font-[Georgia,serif] text-3xl font-normal text-[#315440]">{price}</p>
                <p className="mt-1 text-xs text-[#718074]">{billPlan === 'monthly' ? 'Monthly quote preference' : 'Annual quote preference'}</p>
                <a
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-3 bg-[#1b513a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#276b4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
                  href="#contact"
                >
                  {plan.buttonText ?? 'Request a quote'} <MoveRight size={17} aria-hidden="true" />
                </a>
                <div className="my-7 h-px bg-[#e3e8df]" />
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-[#66806d]">What’s included</p>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li className="flex items-start gap-3 text-sm leading-5 text-[#405747]" key={feature}>
                      <Check className="mt-0.5 shrink-0 text-[#4e7956]" size={16} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
        <p className="mx-auto mt-6 max-w-5xl text-xs leading-5 text-[#718074]">
          Pricing depends on your location, property, energy use, and selected equipment. The quote preference helps us understand how you would like to discuss costs; it is not a financing offer.
        </p>
      </div>
    </section>
  )
}