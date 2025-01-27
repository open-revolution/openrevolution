import { siteConfig } from "../config/siteConfig.js";

const testimonials = [
  {
    name: "Cory Doctorow",
    image: "/img/cory-doctorow.jpg",
    role: "Journalist and Activist",
    text: "The richest, most powerful people in the world have bet everything on the control of information in all its guises; Pollock's fast-moving, accessible book explains why seizing the means of attention and information is the only path to human freedom and flourishing.",
  },
  {
    name: "Beth Noveck",
    image: "/img/beth-noveck.jpg",
    role: "Professor and Director, the Governance Lab, NYU and former director of the White House Open Government Initiative",
    text: "A manifesto for the future, Open Revolution is a powerful call to arms. It rallies all of us to take up the cause of Open information against the forces of monopolization, surveillance and control of information. Be inspired! Read this book!",
  },
  {
    name: "Geoff Mulgan",
    image: "/img/geoff-mulgan.jpg",
    role: "CEO of NESTA, Former Director of the Prime Minister's Strategy Unit",
    text: "I hope this book will stimulate a much more imaginative, and balanced, debate about the many ways a knowledge based economy can be organised",
  },
  {
    name: "Audry Tang",
    image: "/img/audrey-tang.jpg",
    role: "Taiwan’s Digital Minister",
    text: 'This book\'s practical insights are invaluable in guiding our "Open by Default" philosophy … beyond artificial scarcity and zero-sum games',
  },
  {
    name: "James Boyle",
    image: "/img/james-boyle.jpg",
    role: "William Neal Reynolds Professor of Law and co-founder of the Center for the Study of the Public Domain at Duke Law School",
    text: 'Rufus Pollock has worked tirelessly to show us the importance of access to knowledge and data. He makes a compelling and lucidly argued case that our society needs an open "information environment." Whether one cares about democracy, economic efficiency, innovation… Pollock’s work makes fascinating reading.',
  },
  {
    name: "David Levine",
    image: "/img/david-levine.jpg",
    role: "Professor of Economics, European University Institute & John H. Biggs Distinguished Professor Emeritus, Washington University",
    text: "This book draws the distinction between the open world in which we might live - a world in which all information available to humankind is available to each of us instantly - and the closed world of intellectual property monopoly rights in which we currently operate …. From music to medicine, Pollock shows how the closed world is an unnecessary evil.",
  },
  {
    name: "Mark Surman",
    image: "/img/mark-surman.jpg",
    role: "Executive Director of the Mozilla Foundation",
    text: "The Internet and our digital future are under threat and this timely and accessible book shows why and what we can do about it. Essential reading for anyone interested in creating a fair, free and innovative future for the Internet age",
  },
  {
    name: "David Bollier",
    image: "/img/david-bollier.png",
    role: "Director of Reinventing the Commons Program, Schumacher Center for a New Economics",
    text: "In The Open Revolution, Rufus Pollock deftly explains how open access to knowledge and creativity generates enormous benefits for all of us. Openness is not just a way to liberate ourselves from oppressive systems of proprietary control. It can help us develop the commons as a powerful tool for assuring democratic engagement, fairness, innovation, and accountability in countless contexts.",
  },
  {
    name: "James Bessen",
    image: "/img/james-bessen.png",
    role: "Executive Director, Technology & Policy Research Initiative Director, Boston University",
    text: "Using easily accessible examples, Rufus Pollock argues for a world of Open information. The revolution in information technology makes the old world of Closed information obsolete and Pollock presents bold ideas on how to replace it. An enjoyable yet provocative read.",
  },
];

const amazonLinks = {
  US: "",
  DE: "https://www.amazon.de/Open-Revolution-New-rules-world/dp/1983033227/",
};

export default function Home() {
  return (
    <>
      <section className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{siteConfig.title}</span>{" "}
              <span className="block text-yellow-300 xl:inline">
                {siteConfig.tagline}
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {siteConfig.description}
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#get-book"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-yellow-300 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10"
                >
                  Get the Book
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#testimonials"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  What People are Saying
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-scale-down"
            src="/img/open-revolution-cover.jpg"
            alt=""
          />
        </div>
      </section>

      <section id="get-book">
        <div className="bg-gray-100">
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                  Get the Open Revolution Book
                </h2>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white pb-12 sm:mt-12">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Free and Open Version
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      In keeping with the philosophy of the book, The Open
                      Revolution is available "openly" and you can download it
                      directly for free. If you get value from it, please
                      consider making{" "}
                      <a href="/pay-what-feels-right/">a contribution back</a>.
                    </p>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      PDF
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>$0</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="/media/open-revolution.pdf"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a
                        href="/pay-what-feels-right/"
                        className="font-medium text-gray-900"
                      >
                        Make a Donation
                      </a>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      ePUB
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>$0</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="/media/open-revolution.epub"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          Download ePUB
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a
                        href="/pay-what-feels-right/"
                        className="font-medium text-gray-900"
                      >
                        Make a Donation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white pb-16 sm:mt-12">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-100" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Buy the Book
                    </h3>
                    <p className="mt-6 text-base text-gray-500">
                      Buy the book on Amazon in paperback or digital form and
                      support our work. Just choose the option and store that
                      works for you.
                    </p>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Paperback
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>$9.99</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="https://www.amazon.com/Open-Revolution-New-rules-world/dp/1983033227"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a href="/preview/" className="font-medium text-gray-900">
                        Read a free sample
                      </a>
                    </div>
                  </div>
                  <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p className="text-lg leading-6 font-medium text-gray-900">
                      Kindle
                    </p>
                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                      <span>$6.99</span>
                    </div>
                    <div className="mt-6">
                      <div className="rounded-md shadow">
                        <a
                          href="https://www.amazon.com/Open-Revolution-New-rules-world-ebook/dp/B07DDDFCG6"
                          className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      <a href="/preview/" className="font-medium text-gray-900">
                        Read a free sample
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-16 sm:pt-20" id="testimonials">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center pb-16">
          What People are Saying
        </h1>
        {testimonials.map((testy, index) => (
          <Testimonial key={index} {...testy} />
        ))}
      </section>

      <section className="max-w-prose mx-auto prose pt-20">
        <h1 className="text-4xl text-center">About the Author</h1>
        <img
          src="/img/rufus.jpg"
          className="h-32 w-32 rounded-full xl:h-36 xl:w-36 mx-auto"
        />

        <p>
          <strong>Dr Rufus Pollock</strong> is a researcher, technologist and
          entrepreneur. He has been a pioneer in the global Open Data movement,
          advising national governments, international organisations and
          industry on how to succeed in the digital world. He is the founder of
          Open Knowledge, a leading NGO with a presence in over 35 countries,
          empowering people and organizations with access to information so they
          can create insight and drive change. Formerly, he was the Mead Fellow
          in Economics at Emmanuel College, University of Cambridge. He has been
          the recipient of a $1m Shuttleworth Fellowship and is currently an
          Ashoka Fellow and Fellow of the RSA. He holds a PhD in Economics and a
          double first in Mathematics from the University of Cambridge.
        </p>

        <iframe
          src="https://www.youtube.com/embed/15L7i0201ms?autoplay=0&showinfo=0&controls=1"
          width="100%"
          allowFullScreen
        ></iframe>
      </section>

      <section className="relative pt-16 sm:pt-24 lg:pt-32 prose max-w-prose mx-auto">
        <h1 className="text-4xl text-center">
          The Open Revolution in a Nutshell
        </h1>
        <h3>
          An open world, a world in which information is openly and freely
          available to us all
        </h3>
        <p>
          Will the digital revolution give us digital dictatorships or digital
          democracies? Forget everything you think you know about the digital
          age. It’s not about privacy, surveillance, AI or blockchain&mdash;it's
          about ownership. Because, in a digital age, who owns information
          controls the future.
        </p>
        <p>
          Today, information is everywhere. From your DNA to the latest
          blockbusters, from lifesaving drugs to the app on your phone, from big
          data to algorithms. Our entire global economy is built on it and the
          rules around information affect us all every day.
        </p>
        <p>
          As information continues to move into the digital domain, it can be
          copied and distributed with ease, making access and control even more
          important. But the rules we have made for it, derived from how we
          manage physical property, are hopelessly maladapted to the digital
          world.
        </p>
        <p>
          In this urgent and provocative book, Rufus Pollock shows that we must
          make a choice between making information Open, shared by all, or
          making it Closed, exclusively owned and controlled, and how today’s
          Closed digital economy is the source of problems ranging from growing
          inequality, to unaffordable medicines, to the power of a handful of
          tech monopolies to control how we think and vote.
        </p>
        <p>
          Choosing Open is the path to a more equitable, innovative and
          profitable future for all.
        </p>
        <p>
          <a href="/preview/">Read more &raquo;</a>
        </p>

        <h2>Or Watch a Short Video</h2>
        <h3>A Robot Revolution for the 1%?</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nPTgpyBb7oU?start=215"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <h3>The Hidden Cause of Growing Inequality - TEDx</h3>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/6V6x7jySLvc?start=6"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </>
  );
}

function Testimonial(props) {
  return (
    <section className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
          />
        </svg>

        <svg
          className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
          />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-32 w-32 rounded-full xl:h-36 xl:w-36"
              src={props.image}
              alt=""
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-2xl leading-9 font-medium text-gray-900">
                <p>{props.text}</p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={props.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-900">
                      {props.name}
                    </div>
                    <div className="text-base font-medium text-indigo-600">
                      {props.role}
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
