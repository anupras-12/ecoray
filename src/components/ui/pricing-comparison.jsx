import { Check, Minus, MoveRight } from 'lucide-react'

function FeatureValue({ value }) {
  if (value === true) {
    return <Check className="mx-auto text-[#34734e]" size={18} aria-label="Included" />
  }

  if (value === false) {
    return <Minus className="mx-auto text-[#9aa69b]" size={18} aria-label="Not included" />
  }

  return <span className="text-xs font-medium text-[#354c3d]">{value}</span>
}

export default function PricingComparison({ plans, categories }) {
  return (
    <section className="bg-[#f5f7ef] px-5 py-16 text-[#20382d] sm:px-8 md:py-24" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">Plans & pricing</p>
          <h2 id="pricing-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            The right solar setup starts with a conversation.
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5b6e61] sm:text-base">
            Every property is different. Compare the basics, then talk with our team about a system and quote tailored to your needs.
          </p>
        </div>

        <div className="overflow-x-auto border border-[#d7dfd3] bg-[#fffef8]">
          <table className="w-full min-w-155 border-collapse text-left">
            <thead>
              <tr className="bg-[#e6edce]">
                <th className="w-[40%] px-5 py-5 text-xs font-semibold uppercase tracking-[0.08em] text-[#718074]">Compare options</th>
                {plans.map((plan) => (
                  <th className="px-5 py-5 text-center" key={plan.name}>
                    <span className="block text-lg font-semibold text-[#20382d]">{plan.name}</span>
                    <span className="mt-1 block text-xs font-normal text-[#718074]">{plan.description}</span>
                    <span className="mt-4 block font-[Georgia,serif] text-2xl font-normal text-[#315440]">{plan.price}</span>
                    <a
                      className="mt-4 inline-flex min-h-10 items-center justify-center gap-2 bg-[#1b513a] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#276b4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
                      href="#contact"
                    >
                      {plan.cta} <MoveRight size={15} aria-hidden="true" />
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <CategoryRows category={category} plans={plans} key={category.title} />
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs leading-5 text-[#718074]">
          System suitability, pricing, and savings depend on your property, energy use, location, and selected equipment.
        </p>
      </div>
    </section>
  )
}

function CategoryRows({ category, plans }) {
  return (
    <>
      <tr className="border-t border-[#d7dfd3] bg-[#f7f8f2]">
        <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#66806d]" colSpan={plans.length + 1}>
          {category.title}
        </th>
      </tr>
      {category.items.map((item) => (
        <tr className="border-t border-[#e7ebe3]" key={item.key}>
          <th className="px-5 py-4 text-sm font-medium text-[#354c3d]">{item.label}</th>
          {plans.map((plan) => (
            <td className="px-5 py-4 text-center" key={plan.name}>
              <FeatureValue value={plan.features[item.key]} />
            </td>
          ))}
        </tr>
      ))}
    </>
  )
}