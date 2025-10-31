"use client";
import localFont from "next/font/local";
import useOverlayStore from "./store/overlayStore";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

// Preload the custom font
const nyghtFont = localFont({
  src: "../public/fonts/NyghtSerif-LightItalic.otf",
  weight: "400", // Set correct weight
  display: "block", // Prevents FOUT by ensuring font loads before rendering
  variable: "--font-nyght", // Allows usage in Tailwind
});

export default function Home() {
  const toggleOpenOverlayFn = useOverlayStore(
    (state) => state.toggleOpenOverlay
  );

  return (
    <section
      id="home"
      className="relative mb-10 flex h-screen max-h-[1000px] min-h-[800px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="animate-fadeInUp relative z-20 mb-5 mx-auto flex max-w-full flex-col items-center justify-center px-3 delay-200 md:mt-36 md:max-w-4xl lg:max-w-5xl">
        <a
          href="https://karthik-delta.vercel.app"
          target="_blank"
          className="group flex cursor-pointer items-center rounded-full border border-black/5 bg-neutral-200 text-sm text-white backdrop-blur-xs transition-all ease-in lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
          rel="noreferrer"
        >
          <div className="z-10 flex items-center justify-center">
            <div>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Old Website</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
          </div>
        </a>
        <h2 className="animate-fadeInUp my-2 w-full py-px text-center text-4xl !leading-snug font-semibold text-balance text-zinc-700 opacity-90 delay-400 md:text-5xl lg:text-6xl dark:text-zinc-50">
          <span className="md:text-nowrap">I engineer intuitive software</span>
          <br className="hidden md:block" /> that turns
          <span
            className={`${nyghtFont.variable} font-nyght bg-gradient-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent`}
          >
            {" "}
            visions into reality.
          </span>
        </h2>

        <h1 className="gradient-text animate-fadeInUp relative z-10 mt-4 mb-7 flex flex-col items-center justify-center text-center text-xl delay-600 sm:flex-row md:text-xl lg:mt-7 lg:text-2xl">
          <span className="grad-white flex items-center justify-center">
            Hi, I'm Karthik Baduganti -{" "}
            <span
              className={`${nyghtFont.variable} font-nyght gradient-text leading-relaxed ml-2 !text-purple-400`}
            >
              a Full Stack Developer
            </span>
          </span>
        </h1>

        <div className="animate-fadeInUp z-40 mt-2 flex flex-col items-center justify-center gap-6 delay-700 md:mt-8 md:flex-row md:gap-10">
          <div
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3  md:pr-1"
            onClick={toggleOpenOverlayFn}
          >
            <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
              Let's Connect
            </span>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      {/* radial hero */}
      <div className="animate-scaleIn pointer-events-none relative z-20 mx-auto -mt-32 h-96 w-screen max-w-(--breakpoint-2xl) overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_40%)] before:opacity-60">
        <div className="absolute top-1/2 -left-1/2 z-50 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"></div>
      </div>

      {/* Radial mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-linear-to-t from-white opacity-100 dark:from-black"
      ></div>
    </section>
  );
}
