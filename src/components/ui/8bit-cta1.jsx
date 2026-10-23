import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/8bit-card'

const defaultRows = [
  { feature: 'Energy source', yours: 'On-site solar', theirs: 'Utility grid' },
  { feature: 'Grid usage', yours: 'Can reduce usage', theirs: 'Full grid reliance' },
  { feature: 'Battery option', yours: 'Add storage', theirs: 'No on-site storage' },
  { feature: 'Daytime power', yours: 'Generate at home', theirs: 'Draw from the grid' },
]

export default function CTA1({
  title = 'Why EcoRay?',
  description = 'A clearer look at bringing solar home.',
  yoursLabel = 'EcoRay Solar',
  theirsLabel = 'Grid-Only Home',
  rows = defaultRows,
  className,
}) {
  return (
    <section className={cn('eco-comparison w-full px-4 py-16 md:py-20', className)}>
      <div className="mx-auto max-w-3xl">
        {(title || description) && (
          <div className="mb-10 text-center">
            {title && (
              <h2 className="eco-comparison-title mb-3">
                {title}
              </h2>
            )}
            {description && (
              <p className="eco-comparison-muted text-[13px]">{description}</p>
            )}
          </div>
        )}

        <Card>
          <CardHeader>
            <div className="grid gap-4 md:grid-cols-3">
              <CardTitle className="eco-comparison-muted text-xs font-semibold tracking-[0.08em]">FEATURE</CardTitle>
              <CardTitle className="text-center text-[13px] font-semibold text-[#315440]">
                {yoursLabel}
              </CardTitle>
              <CardTitle className="eco-comparison-muted text-center text-[13px] font-semibold">
                {theirsLabel}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              {rows.map((row) => (
                <div className="eco-comparison-row grid gap-2 py-4 md:grid-cols-3 md:gap-4" key={row.feature}>
                  <span className="eco-comparison-feature text-[13px] font-semibold">{row.feature}</span>
                  <span className="eco-comparison-value text-left text-[13px] md:text-center">
                    {row.yours}
                  </span>
                  <span className="eco-comparison-muted text-left text-[13px] md:text-center">
                    {row.theirs}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}