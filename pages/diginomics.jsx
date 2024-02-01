import { CalendarIcon } from "@heroicons/react/outline"

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-20 lg:pt-2 grid lg:grid-cols-2 lg:gap-x-10 px-2 lg:py-10">
          <div className="px-6 lg:px-0 lg:pt-4 mt-16 lg:mx-0 lg:mt-0 md:mx-auto md:max-w-2xl">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <ul className="mt-6 text-xl leading-8 text-red-600 list-outside">
                  <li>30 pages</li>
                  <li>Over 9000 words</li>
                  <li>5 key principles</li>
                  <li>Simple frameworks you can start using to build sustainable digital businesses and ecosystems, today.</li>
                </ul>
                <h1 className="mt-10 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  Everything you need to understand the key principles of the digital economy, and what this means for you and your society.
                </h1>
                <p className="mt-6 text-xl leading-8 text-primary">
                  Written by Rufus Pollock and Theo Cox,
                  creators of the Open Revolution
                  and advisers on digital strategy
                  to leading governments, IGOs and companies for over two decades.
                </p>
                <div className="py-10 font-bold text-center italic text-2xl leading-8">
                 "This is a $1,000,000 guide – and they just put it out there for free for anyone to have."
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl mt-16 lg:mx-0 lg:mt-0 order-first">
            <div className="px-2 py-4 sm:p-10">
              <div className="relative">
                <h2 className="text-center text-4xl text-primary font-semibold font-headings">
                  Become expert on the digital economy in 7 days
                </h2>
              </div>
              {/* Book cover */}
              <div className="mt-6 py-6 bg-slate-300 w-[300px] mx-auto">
                <div className="relative bg-secondary grid grid-flow-row grid-rows-3 justify-center h-[250px] w-[200px] mx-auto shadow-2xl rounded-sm ring-1 ring-gray-900/10 sm:px-3">
                  <p className="pt-2 mb-0 text-xs text-center font-medium">
                    🗺️ Diginomics Masterclass
                  </p>
                  <p className="self-center px-4 text-xl font-semibold text-center flex flex-col gap-1 max-w-xs mx-auto">
                    <span>How to</span>
                    <span>Understand</span>
                    <span className="text-md">the</span>
                    <span className="font-extrabold text-2xl">Digital Economy</span>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-primary text-center text-lg pt-4">Key principles learned over 20 years in a <span className="font-bold">FREE</span> simple guide</p>
                <p className="py-2 text-center text-lg font-bold">Over 10,000 downloads</p>
              </div>
              <div className="pt-4">
                <form
                  method="POST"
                  action="https://1ebb0834.sibforms.com/serve/MUIEABg79115rPtMI1fZhLoYmKiTdVgnX9y2kqJ2yyzRMcv_w3UsqZZV0CfFLdQsyyVVof0kHf012lqXLGL3aNloY3_yzN7OQyUxiMMWiTHJziOPYJXjbjX2CSNSHXrKU7brIv_gnrtlDXL03YzznNOPlPyXzUGktiyU0WUdfyR9dmsxq5Zal1JWKa8J_SykSjOF6aM8NOn5nIFU"
                  data-type="subscription"
                  className={"flex flex-col items-center gap-y-4 max-w-sm mx-auto"}
                >
                  <label htmlFor="EMAIL" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="EMAIL"
                    name="EMAIL"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-primary shadow-sm ring-2 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="mt-3 w-full rounded-md border border-transparent bg-secondary px-6 py-2 text-xl font-medium shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
                  >
                    Send Me the Diginomics Masterclass + Lesson #1
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 grid max-w-2xl gap-y-6 lg:mt-0 lg:max-w-7xl pb-24 lg:pb-20">
        <div className="px-8 lg:px-16 md:mx-auto space-y-8">
          <div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl text-center sm:text-left">
              Want to make sure this course is worth it before you sign up?
            </h1>
            <p className="mt-12 text-xl text-primary">
              Here’s everything that we will cover:
            </p>
            <ul role="list" className="mt-6 space-y-8 text-lg leading-7 text-primary">
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 1:</strong> We’re in a new digital economy
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 2:</strong> It’s more than digital, it’s information
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 3:</strong> Costless copying: the essential difference between bits and atoms
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 4:</strong> The magical apple tree: once upon a time in the digital economy
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 5:</strong> Exclusive rights and intellectual "property": one way to pay for the first copy
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 6:</strong> Costless copying revisited
                </span>
              </li>
              <li className="flex gap-x-3">
                <CalendarIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold underline underline-offset-4">Day 7:</strong> Core tension: access vs innovation
                </span>
              </li>
            </ul>
          </div>
          <div>
            <form
              method="POST"
              action="https://1ebb0834.sibforms.com/serve/MUIEABg79115rPtMI1fZhLoYmKiTdVgnX9y2kqJ2yyzRMcv_w3UsqZZV0CfFLdQsyyVVof0kHf012lqXLGL3aNloY3_yzN7OQyUxiMMWiTHJziOPYJXjbjX2CSNSHXrKU7brIv_gnrtlDXL03YzznNOPlPyXzUGktiyU0WUdfyR9dmsxq5Zal1JWKa8J_SykSjOF6aM8NOn5nIFU"
              data-type="subscription"
              className="flex flex-col items-center sm:items-start gap-y-4 max-w-sm"
            >
              <label htmlFor="EMAIL" className="sr-only">
                Email address
              </label>
              <input
                id="EMAIL"
                name="EMAIL"
                type="email"
                autoComplete="email"
                required
                className="w-full min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-primary shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full max-w-xs sm:justify-self-start rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-0"
              >
                Send me the FREE masterclass and Lesson #1
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
