import { motion, useReducedMotion } from 'framer-motion'
import { BlogPostCard } from '@/components/ui/card-18'

const posts = [
  {
    tag: 'Solar basics',
    date: '5 MIN READ',
    title: 'How do solar panels turn sunlight into electricity?',
    description: 'A straightforward introduction to panels, inverters, and how a home solar system works together.',
    href: '#services',
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Rows of solar panels receiving sunlight.',
  },
  {
    tag: 'Energy storage',
    date: '4 MIN READ',
    title: 'Is a home battery right for your solar setup?',
    description: 'Learn what battery storage does, when it can be useful, and which questions to consider before choosing one.',
    href: '#plans',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Wind turbines generating renewable power across an open landscape.',
  },
  {
    tag: 'Sustainability',
    date: '6 MIN READ',
    title: 'Small steps toward a more energy-aware home',
    description: 'Explore practical ways to understand household energy use and make thoughtful changes over time.',
    href: '#why-ecoray',
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Sunlight passing through a green forest.',
  },
]

const featuredPost = {
  tag: 'Solar guide',
  date: '7 MIN READ',
  title: 'What to consider before going solar',
  description: 'From roof suitability and energy use to system size and battery options, here are the key questions to ask as you start exploring solar for your property.',
  href: '#services',
  imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=90',
  imageAlt: 'A contemporary home surrounded by a green landscape.',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

const Blogs = () => {
  const reduceMotion = useReducedMotion()
  const revealProps = reduceMotion
    ? { initial: false, whileInView: undefined }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.15 } }

  return (
    <section id="blogs" className="bg-[#f5f7ef] px-5 py-16 text-[#20382d] sm:px-8 md:py-24" aria-labelledby="blogs-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">The EcoRay journal</p>
          <h2 id="blogs-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            A little more about solar.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#5b6e61] sm:text-base">
            Clear, practical reading to help you understand clean energy and make informed decisions.
          </p>
        </div>

        <motion.div className="mb-7" variants={itemVariants} {...revealProps}>
          <BlogPostCard variant="featured" {...featuredPost} />
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3" variants={containerVariants} {...revealProps}>
          {posts.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blogs