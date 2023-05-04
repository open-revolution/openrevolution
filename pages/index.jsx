import { useId } from 'react';
import SignupForm from '../components/SignupForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
            <div className="relative text-center lg:text-left z-10 mx-auto max-w-xl lg:max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight text-primary">
                Become An Expert on the Digital Economy in 7 Days
              </h1>
              <p className="mt-6 text-lg text-primary">
                {/* Strapline here */}
                Everything you need to start navigating the digital world as a citizen, entrepreneur or policy-maker.
              </p>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] xl:h-[768px] w-[1026px] xl:w-[512px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-48 xl:ml-0" />
              <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-0 xl:-bottom-32">
                {/* Hero image here */}
                <div className="mx-auto md:max-w-[512px]">
                  <img src='/assets/undraw_revenue.svg' />
                </div>
              </div>
            </div>
            <div className="relative mt-16 lg:col-span-7 lg:mt-0 xl:col-span-6">
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                {/* SendInBlue form */}
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Book Signup Section */}
      <div>
        <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100/20">
          <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 grid lg:grid-cols-2 lg:gap-x-8 px-8 lg:py-40">
            <div className="px-6 lg:px-0 lg:pt-4 mt-16 lg:mx-0 lg:mt-0 md:mx-auto md:max-w-2xl">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <ul className="mt-6 text-lg leading-7 text-primary list-outside list-['\2713']">
                    <li className="pl-2">5 day course + 2 bonus sessions</li>
                    <li className="pl-2">Over 5000 words</li>
                    <li className="pl-2">3 simple powerful principles</li>
                    <li className="pl-2">5 intuitive insights</li>
                    <li className="pl-2">Understand key trends from the rise of the tech giants to the election of Donald Trump.</li>
                    <li className="pl-2">Simple frameworks you can start using to build sustainable digital businesses and ecosystems, today.</li>
                  </ul>
                  <h1 className="mt-10 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                    Everything you need to start understanding 
                    the digital world as a citizen, entrepreneur
                    and policy-maker.
                  </h1>
                  <p className="mt-6 text-lg leading-7 text-primary">
                    Written by Rufus Pollock and Theo Cox,
                    creators of the Open Revolution
                    and advisers on digital strategy
                    to governments, IGOs and companies for over two decades.
                  </p>
                  <div className="">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-2xl mt-20 sm:mt-24 lg:mx-0 lg:mt-0 order-first">
              <div className="px-4 py-6 sm:p-10 border shadow-sm rounded-3xl">
                <div className="relative">
                  <h2 className="text-center text-2xl text-primary font-semibold font-headings">
                    Understanding the digital economy in 5 days
                  </h2>
                </div>
                {/* Book cover */}
                <div className="py-10">
                  <div className="relative bg-secondary grid grid-flow-row grid-rows-3 justify-center h-[400px] w-[300px] mx-auto shadow-2xl rounded-sm ring-1 ring-gray-900/10 sm:px-3">
                    <h3 className="pt-6 text-md text-center font-medium">
                      🗺️ The Diginomics Introductory Masterclass
                    </h3>
                    <p className="self-center px-16 text-2xl font-semibold text-center flex flex-col gap-1 max-w-xs mx-auto">
                      <span>How to Understand</span>
                      <span className="font-extrabold text-4xl">Digital Economics</span>
                    </p>
                    <span className="pb-6 self-end font-medium text-xs text-center">by <br/> Rufus Pollock and Theo Cox</span>
                  </div>
                </div>
                <div>
                  <p className="text-primary text-center text-lg py-4">Key principles learned over 20 years in a simple guide.</p>
                </div>
                <div className="pt-4">
                  <form className="w-full max-w-md mx-auto text-primary">
                    <div className="flex flex-col gap-y-4">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md max-w-xs mx-auto bg-secondary px-12 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        Sign me up to the masterclass and send me lesson 1
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
