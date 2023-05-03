import { useId } from 'react';
import SignupForm from '../components/SignupForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-2">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
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
            <div className="relative -mt-16 lg:col-span-7 lg:mt-0 xl:col-span-6">
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                {/* SendInBlue form */}
                <SignupForm />
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
