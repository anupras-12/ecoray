import { ArrowUpRight } from 'lucide-react'

export function BlogPostCard({
  variant = 'default',
  tag,
  date,
  title,
  description,
  href = '#contact',
  imageUrl,
  imageAlt = '',
}) {
  if (variant === 'featured') {
    return (
      <article className="grid overflow-hidden border border-[#d7dfd3] bg-[#fffef8] md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-64 md:min-h-96">
          <img className="absolute inset-0 h-full w-full object-cover" src={imageUrl} alt={imageAlt} loading="lazy" />
          <span className="absolute left-5 top-5 bg-[#dce94d] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#20382d]">
            Featured · {tag}
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9 md:p-11">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#718074]">{date}</p>
          <h3 className="mt-4 font-[Georgia,serif] text-3xl font-normal leading-tight text-[#20382d] sm:text-4xl">{title}</h3>
          <p className="mt-4 text-sm leading-6 text-[#5b6e61]">{description}</p>
          <a className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#1d563d] hover:text-[#34734e]" href={href}>
            Explore this topic <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </article>
    )
  }

  return (
    <article className="flex h-full flex-col border border-[#d7dfd3] bg-[#fffef8]">
      <div className="relative aspect-4/3 overflow-hidden bg-[#e6edce]">
        <img className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105" src={imageUrl} alt={imageAlt} loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#718074]">
          <span className="text-[#54725d]">{tag}</span>
          <span>{date}</span>
        </div>
        <h3 className="mt-4 font-[Georgia,serif] text-2xl font-normal leading-tight text-[#20382d]">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#5b6e61]">{description}</p>
        <a className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#1d563d] hover:text-[#34734e]" href={href}>
          Explore this topic <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

export default BlogPostCard