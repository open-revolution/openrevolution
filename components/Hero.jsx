export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl lg:mx-0 lg:flex-1 text-primary">
        <h1 className="mt-10 lg:mt-0 max-w-lg text-4xl font-bold tracking-tight sm:text-6xl">
          Diginomics
        </h1>
        <p className="mt-6 text-2xl leading-8">
          Learn the rules of the digital economy and how to use them to increase access to just about anything.
        </p>
        <div className="mt-8 sm:mx-auto sm:max-w-full sm:text-center lg:mx-0 lg:text-left">
          <form action="#" method="POST" className="mt-3 sm:flex gap-x-4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              className="block w-full rounded-md border border-primary p-3 text-base placeholder-gray-500 shadow-sm focus:border-secondary focus:ring-secondary sm:flex-1"
              placeholder="Name"
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-32 rounded-md border border-primary p-3 text-base placeholder-gray-500 shadow-sm focus:border-secondary focus:ring-secondary sm:flex-auto"
              placeholder="Email"
            />
            <button
              type="submit"
              className="mt-3 ml-0 w-full rounded-md border border-transparent bg-secondary px-6 py-3 text-base font-medium text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
            >
              Get updates
            </button>
          </form>
          <p className="mt-3 text-sm font-medium">
            Get short updates approx monthly as we release new material.
          </p>
        </div>
      </div>
      <div className="mt-16 sm:mt-24 lg:mt-0 lg:max-w-full lg:flex-1">
        <img src="/assets/hero_image.png" alt="" className="mx-auto w-full cover" />
      </div>
    </section>
  )
}