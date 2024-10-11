import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex gap-28 justify-center ">
      <Image
        alt="placeholder"
        src="/images/site/me.jpg"
        height={200}
        width={200}
        className="m-auto rounded-xl"
      />
      <div className="flex flex-col gap-10">
        <div>
          <div className="text-4xl">Hi, It&apos;s Mukul!</div>
          <div className="flex gap-5 pt-5 ">
            <a
              href="https://www.linkedin.com/in/mukul-kumar-488b1119b/"
              className="underline"
            >
              LinkedIn
            </a>
            <a href="mailto:mukulyashi@gmail.com" className="underline">
              mukulyashi@gmail.com
            </a>
          </div>
        </div>
        <div>
          I&apos;ve developed NextBLOG, a cutting-edge fullstack webapp built
          using NextJS.
          <br /> This project showcases my ability to build modern, responsive
          web applications with a focus on user experience and scalability.
          <div className="flex gap-8 my-10">
            <Image
              alt="placeholder"
              src="/images/site/nextjs.png"
              height={50}
              width={50}
            />
            <Image
              alt="placeholder"
              src="/images/site/tailwindcss.png"
              height={50}
              width={50}
            />
            <Image
              alt="placeholder"
              src="/images/site/react.png"
              height={50}
              width={50}
            />
            <Image
              alt="placeholder"
              src="/images/site/mongodb.png"
              height={50}
              width={100}
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
            <li> in React.</li>
            <li>🌈 Using TailwindCSS for UI Tooling.</li>
            <li>⚡ Using MongoDB to store all blogs.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
