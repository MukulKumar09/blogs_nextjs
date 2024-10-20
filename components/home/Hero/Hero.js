import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <div className="flex flex-col lg:hidden gap-6 items-center">
        <span className="font-sans text-4xl">Hi, It&apos;s Mukul!</span>
        <div className="flex flex-wrap gap-5">
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
        <div className="text-sm">
          With over 3 Years experience of delivering products, I can bring your
          concept to reality. With great problem solving skills and fullstack
          expertise, I can provide cutting-edge solutions for your business.
        </div>
      </div>
      <div className="lg:w-1/3 flex flex-col lg:gap-20 gap-10 items-center">
        <div className="relative">
          <Image
            alt="placeholder"
            src="/images/site/me.png"
            height={300}
            width={300}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-5 items-center p-5 rounded-2xl bg-slate-800 border-2 border-slate-600 shadow-[inset_0_0px_20px_#334155] ">
          <span className="text-gray-500">Download my App</span>
          <Image
            src="/images/site/tabber_logo.png"
            alt="tabber"
            height={70}
            width={70}
            className="rounded-xl"
          />
          <div className="flex flex-col items-center">
            <a href="https://play.google.com/store/apps/details?id=com.tabber">
              <span className="font-sans text-xl">Tabber - File Manager</span>
            </a>
            <span className="text-sm text-gray-400">
              ⭐ 4.8 (500+ Downloads)
            </span>
            <a href="https://play.google.com/store/apps/details?id=com.tabber">
              <Image
                src="/images/site/google_play.png"
                alt="googleplay"
                height={150}
                width={150}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex flex-col gap-10">
        <div className="lg:flex flex-col gap-6 hidden">
          <span className="font-sans text-4xl">Hi, It&apos;s Mukul!</span>
          <div className="flex flex-wrap gap-5">
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
          <div className="text-sm">
            With over 3 Years experience of delivering products, I can brings
            your concept to reality. With great problem solving skills and
            fullstack expertise, I can provide cutting-edge solutions for your
            business.
          </div>
        </div>
        <span className="font-sans text-4xl border-b-2 border-gray-800">
          About Me
        </span>
        <ul className="flex flex-col gap-8">
          <li>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              <img
                alt="placeholder"
                src="/images/site/nextjs.png"
                style={{ height: "50px", width: "auto" }}
              />
              <img
                alt="placeholder"
                src="/images/site/nodejs.png"
                style={{ height: "50px", width: "auto" }}
              />
              <img
                alt="placeholder"
                src="/images/site/react.png"
                style={{ height: "50px", width: "auto" }}
              />
              <img
                alt="placeholder"
                src="/images/site/tailwindcss.png"
                style={{ height: "50px", width: "auto" }}
              />
              <img
                alt="placeholder"
                src="/images/site/mongodb.png"
                style={{ height: "50px", width: "auto" }}
              />
            </div>
          </li>
          <li>
            ✔️ 2 Years of proven experience as Frontend & QA Analyst. Gained a
            vast skillset by working on diverse set of projects with clients
            across the globe.{" "}
          </li>
          <li>
            ✔️ Javascript specialist. Successfully delivered projects like
            Automated User Provisioning Solution for Department of Communities
            (Australian Govt. Undertaking), DallasTrading.net, Shambhoo etc{" "}
          </li>
          <li>
            ✔️ I&apos;ve worked with libraries like ReactJS, Redux TailwindCSS,
            SeleniumJS, MS Playwright for highly scalable webapps. I build code
            which is maintainable, easy to migrate and expand.{" "}
          </li>
          <li>
            ✔️ Contributed to unit, regression, user acceptance testing, test
            report generation, bug lifecycle in my QA Journey.
          </li>
        </ul>
      </div>
    </section>
  );
}
