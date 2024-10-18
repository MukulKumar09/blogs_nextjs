import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row gap-16 lg:gap-28 justify-center">
      <Image
        alt="placeholder"
        src="/images/site/me.jpg"
        height={200}
        width={200}
        className="m-auto rounded-xl"
      />
      <div className="flex flex-col gap-10">
        <div>
          <div className="text-4xl text-center lg:text-left">
            Hi, It&apos;s Mukul!
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
          I&apos;ve developed NextBLOG, a cutting-edge fullstack webapp built
          using NextJS, MongoDB, Vercel Blob.
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
          <div className="pt-10">
            <span className="text-4xl">About Me</span>
          </div>
        </div>
      </div>
    </section>
  );
}
