import Link from "next/link";

export default function SubscribedPage() {
  return (
    <section className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pt-48">
        <div className="mx-auto px-4 sm:px-8 sm:w-3/4 lg:w-1/2">
          <h1 className="text-2xl font-headings font-bold tracking-tight text-primary xl:text-4xl flex flex-col">
            Thank you for signing up!
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-primary sm:text-base md:mt-5 md:max-w-3xl">
            The Diginomics Masterclass lesson #1 is on its way to you!
          </p>
          <Link
            href="/"
            className="inline-flex flex-shrink-0 w-auto max-w-xs mt-6 rounded-md border border-transparent bg-primary px-6 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
