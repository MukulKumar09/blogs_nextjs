import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 items-center">
      <div className="w-full lg:w-1/3 flex flex-col gap-20 items-center">
        <div className="relative">
          <Image
            alt="placeholder"
            src="/images/site/me.jpg"
            height={200}
            width={200}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-row lg:flex-col xl:flex-row gap-8 items-center bg-gray-800 px-8 py-3 rounded-xl">
          <Image
            src="/images/site/tabber_logo.png"
            height={70}
            width={70}
            style={{ objectFit: "contain" }}
            className="rounded-xl"
          />
          <div className="flex flex-col items-start lg:items-center xl:items-start">
            <span className="text-gray-500">Download my App</span>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.tabber">
                <span className="text-xl">Tabber - File Manager</span>
              </a>
              <br />
              <span className="text-sm text-gray-400">
                ⭐ 4.8 (500+ Downloads)
              </span>
            </div>
            <a href="https://play.google.com/store/apps/details?id=com.tabber">
              <Image
                src="/images/site/google_play.png"
                height={150}
                width={150}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col gap-10">
        <div>
          <div className="text-4xl text-center lg:text-left">
            {"Hi, It's Mukul!"}
          </div>
          <div className="flex flex-wrap align-middle justify-center lg:justify-start gap-5 pt-5 ">
            <a
              href="https://github.com/MukulKumar09/blogs_nextjs"
              className="text-cyan-200"
            >
              <img
                alt="placeholder"
                src="/images/site/github.jpg"
                style={{ height: "20px", width: "auto" }}
              />
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://www.linkedin.com/in/mukul-kumar-488b1119b/"
              className="text-cyan-200"
            >
              <img
                alt="placeholder"
                src="/images/site/linkedin.png"
                style={{ height: "20px", width: "auto" }}
              />
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:mukulyashi@gmail.com" className="text-cyan-200">
              <img
                alt="placeholder"
                src="/images/site/gmail.png"
                style={{ height: "20px", width: "auto" }}
              />
            </a>
          </div>
        </div>
        <div>
          I've developed NextBLOG, a cutting-edge fullstack webapp built using
          NextJS, MongoDB, Vercel Blob.
          <br /> This project showcases my ability to build fullstack
          applications with a focus on user experience and scalability. It
          harnesses server and client hybrid capabilities of NextJS.
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 my-10">
            <img
              alt="placeholder"
              src="/images/site/nextjs.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/tailwindcss.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/react.png"
              style={{ height: "50px", width: "auto" }}
            />
            <img
              alt="placeholder"
              src="/images/site/mongodb.png"
              style={{ height: "50px", width: "auto" }}
            />
          </div>
          Key features include:
          <ul>
            <li>
              ✨ Efficient integration of server-side, client-side components
            </li>
            <li>🔄 APIs built in NextJS api route.</li>
            <li>
              🚀 Using NextJS useRouter hook for fast and optimized page
              switching
            </li>
            <li>🛠️ Debouncing Search, DOM Manipulation using React hooks.</li>
            <li>📷 Using Vercel Blob to store and fetch images.</li>
            <li>🌈 Using TailwindCSS for UI Tooling.</li>
            <li>⚡ Using MongoDB to store all blogs.</li>
          </ul>
          <div className="flex flex-col gap-10 pt-20">
            <span className="text-4xl border-b-2 border-gray-800">
              About Me
            </span>
            <ul className="flex flex-col gap-3">
              <li>
                ✔️ 2 Years of proven experience as Frontend & QA Analyst. Gained
                a vast skillset by working on diverse set of projects with
                clients across the globe.{" "}
              </li>
              <li>
                ✔️ Javascript specialist. Successfully delivered projects like
                Automated User Provisioning Solution for Department of
                Communities (Australian Govt. Undertaking), DallasTrading.net,
                Shambhoo etc{" "}
              </li>
              <li>
                ✔️ I've worked with libraries like ReactJS, Redux TailwindCSS,
                SeleniumJS, MS Playwright for highly scalable webapps. I build
                code which is maintainable, easy to migrate and expand.{" "}
              </li>
              <li>
                ✔️ Contributed to unit, regression, user acceptance testing,
                test report generation, bug lifecycle in my QA Journey.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
