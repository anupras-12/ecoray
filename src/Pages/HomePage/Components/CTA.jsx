import { Cta4 } from '@/components/ui/cta-4'

const CTA = () => {
  return (
    <Cta4
      title="Let’s find the right solar fit."
      description="Tell us what you need from your energy system. EcoRay can help you explore a considered solution for your home or business."
      buttonText="Compare solar plans"
      buttonUrl="#plans"
      items={[
        'Solar systems planned around your property',
        'Battery storage options available',
        'Clear guidance from first questions onward',
      ]}
    />
  )
}

export default CTA