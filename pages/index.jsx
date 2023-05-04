import SignupForm from '../components/SignupForm';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 grid lg:grid-cols-2 lg:gap-x-10 px-8 lg:py-20">
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
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
