import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardVariants = cva('eco-comparison-card w-full overflow-hidden')

export function Card({ className, ...props }) {
  return <div className={cn(cardVariants(), className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('eco-comparison-header p-5 md:p-6', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('eco-comparison-title', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('p-5 md:p-6', className)} {...props} />
}