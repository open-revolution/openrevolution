import Link from 'next/link'

import {getAllFilesFrontMatter} from '../lib/files'


function formatDate(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const now = new Date(date).toLocaleDateString(options)
  return now
}

export default function Page({ posts }) {
  return (
    <>
      <div className="relative max-w-5xl mx-auto px-2 sm-px-6 lg:px-8 pt-16">
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            News and Blog
          </h1>
        </div>
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link href={`/news/${slug}`} className="text-gray-900 dark:text-gray-100">
                          {title}
                        </Link>
                      </h3>
                    </div>
                    <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                      {summary}
                    </div>
                    <div>
                      {frontMatter.link &&
                      <a href={frontMatter.link} className="text-yellow-400">
                        Read more →
                      </a>
                      }
                      {!frontMatter.link &&
                        <Link href={`news/${slug}`}>
                          <a className="text-yellow-400">
                            Read more →
                          </a>
                        </Link>
                      }
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      </div>
    </>
  )
}

export function getStaticProps() {
  const posts = getAllFilesFrontMatter('news')

  return {
    props: {
      posts
    }
  }
}
