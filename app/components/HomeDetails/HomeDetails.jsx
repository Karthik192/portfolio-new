import React from "react";
import Image from "next/image";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import SkillBadge from "./SkillBadge";
import localFont from "next/font/local";
import RingsImg from "../../assets/images/rings.svg";
import { Globe } from "@/components/ui/globe";
import { Marquee } from "@/components/ui/marquee";
import Sparkles from "./Sparkles";

const nyghtFont = localFont({
  src: "../../../public/fonts/NyghtSerif-LightItalic.otf",
  weight: "500", // Set correct weight
  display: "block", // Prevents FOUT by ensuring font loads before rendering
  variable: "--font-nyght", // Allows usage in Tailwind
});

function HomeDetails() {
  return (
    <section className="px-4">
      <div className="grid w-full grid-cols-6 gap-4 md:auto-rows-[19rem] container mx-auto mb-20 md:my-20">
        {/* Collaboration Item */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-4 max-md:h-[21rem]">
          <div className="size-full">
            <button className="absolute flex h-[300px] w-full flex-col">
              <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)] bg-[url('/images/collaboration.jpg')] bg-cover bg-center w-full flex justify-center items-center">
                <div className="bg-[url('/images/rings.svg')]"></div>
                <Image src={RingsImg} alt="rings" />
              </div>
            </button>
          </div>
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart-handshake size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
              aria-hidden="true"
            >
              <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path>
            </svg>
            <h3 className="max-w-lg font-mono text-neutral-400">
              Collaboration
            </h3>
            <p className="font-semibold text-neutral-700 text-xl tracking-wide dark:text-neutral-300">
              I prioritize client collaboration, fostering open communication
            </p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="/contact"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 rounded-md px-3 has-[&gt;svg]:px-2.5 pointer-events-auto"
              data-slot="button"
            >
              Book a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>
        {/* Passionate technologies */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:min-h-[35rem]">
          <div className="size-full">
            <div className="absolute inset-0">
              <div className="relative size-full">
                <h3
                  className={`${nyghtFont.variable} font-nyght absolute top-10 w-full select-none bg-gradient-to-b from-[#fd81e298] to-[#da7bda] bg-clip-text px-4 text-center font-bold font-instrument-serif text-3xl leading-[100%] text-transparent tracking-wide dark:from-[#edeffd] dark:to-[#da7bda]`}
                >
                  Passionate about cutting-edge technologies
                </h3>
                <div className="relative flex h-full flex-col items-center justify-end">
                  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <ScrollVelocityContainer className="text-2xl font-bold tracking-[-0.02em] md:text-2xl md:leading-[5rem]">
                      <ScrollVelocityRow
                        baseVelocity={5}
                        direction={1}
                        className="group flex p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row my-10"
                      >
                        <SkillBadge
                          title={"ReactJS"}
                          url={"https://cdn.simpleicons.org/react"}
                        />
                        <SkillBadge
                          title={"NextJS"}
                          url={"https://cdn.simpleicons.org/nextdotjs/white"}
                        />
                        <SkillBadge
                          title={"Typescript"}
                          url={"https://cdn.simpleicons.org/typescript"}
                        />
                        <SkillBadge
                          title={"Tailwind CSS"}
                          url={"https://cdn.simpleicons.org/tailwindcss"}
                        />
                        <SkillBadge
                          title={"Javascript"}
                          url={"https://cdn.simpleicons.org/javascript"}
                        />
                        <SkillBadge
                          title={"flutter"}
                          url={"https://cdn.simpleicons.org/flutter"}
                        />
                      </ScrollVelocityRow>
                      <ScrollVelocityRow
                        baseVelocity={5}
                        direction={-1}
                        className="group flex p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row my-10"
                      >
                        <SkillBadge
                          title={"MongoDB"}
                          url={"https://cdn.simpleicons.org/mongodb"}
                        />
                        <SkillBadge
                          title={"ExpressJS"}
                          url={"https://cdn.simpleicons.org/express/white"}
                        />
                        <SkillBadge
                          title={"NodeJS"}
                          url={"https://cdn.simpleicons.org/nodedotjs"}
                        />
                        <SkillBadge
                          title={"MySQL"}
                          url={"https://cdn.simpleicons.org/mysql/white"}
                        />
                        <SkillBadge
                          title={"Python"}
                          url={"https://cdn.simpleicons.org/python"}
                        />
                      </ScrollVelocityRow>
                      <ScrollVelocityRow
                        baseVelocity={5}
                        direction={1}
                        className="group flex p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row my-10"
                      >
                        <SkillBadge
                          title={"Git"}
                          url={"https://cdn.simpleicons.org/git"}
                        />
                        <SkillBadge
                          title={"GitHub"}
                          url={"https://cdn.simpleicons.org/github/white"}
                        />
                        <SkillBadge
                          title={"Docker"}
                          url={"https://cdn.simpleicons.org/docker"}
                        />
                        <SkillBadge
                          title={"Kubernetes"}
                          url={"https://cdn.simpleicons.org/kubernetes"}
                        />
                      </ScrollVelocityRow>
                    </ScrollVelocityContainer>
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
                  </div>
                  <div className="absolute bottom-0 z-10 flex items-center justify-center">
                    <div className="w-[12rem] h-[12rem] opacity-[0.7] -translate-x-1/2 absolute left-1/2 rounded-full border border-slate-200 dark:border-neutral-700"></div>
                    <div className="w-[16rem] h-[16rem] opacity-[0.6] -translate-x-1/2 absolute left-1/2 rounded-full border border-slate-200 dark:border-neutral-700"></div>
                    <div className="w-[20rem] h-[20rem] opacity-[0.5] -translate-x-1/2 absolute left-1/2 rounded-full border border-slate-200 dark:border-neutral-700"></div>
                    <div className="w-[24rem] h-[24rem] opacity-[0.3999999999999999] -translate-x-1/2 absolute left-1/2 rounded-full border border-slate-200 dark:border-neutral-700"></div>
                    <div className="w-[28rem] h-[28rem] opacity-[0.29999999999999993] -translate-x-1/2 absolute left-1/2 rounded-full border border-slate-200 dark:border-neutral-700"></div>
                  </div>
                  <div className="group relative bottom-0 z-20 h-44 w-56 overflow-hidden rounded-t-md border border-neutral-200 border-b-0 transition-all duration-300 group-hover:translate-y-4 dark:border-neutral-800 mt-10">
                    <div className="relative z-30 flex h-3 w-full items-center justify-start gap-x-1 bg-gray-100 px-2 dark:bg-neutral-800">
                      <div className="size-1.5 rounded-full bg-red-500"></div>
                      <div className="size-1.5 rounded-full bg-slate-300"></div>
                      <div className="size-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="relative flex h-full flex-1 flex-col items-center bg-neutral-300 dark:bg-neutral-900"
                    >
                      <div className="mt-2 flex h-4 w-[4rem] items-center justify-end rounded-full bg-neutral-400 px-1 transition-all duration-300 group-hover:w-[6rem] group-hover:bg-neutral-500 dark:bg-neutral-600 dark:group-hover:bg-neutral-800">
                        <div className="h-2 w-2 rounded-full bg-neutral-50 transition-all duration-300 group-hover:bg-neutral-200 dark:bg-neutral-900"></div>
                      </div>
                      <div className="mt-6">
                        <p className="relative z-20 bg-gradient-to-b from-slate-700 to-slate-800 bg-clip-text text-center font-bold text-base text-transparent dark:from-slate-100 dark:to-slate-400">
                          Work that stand out <br />
                          and make a difference
                        </p>
                        <div className="mt-4 flex justify-center gap-x-2">
                          <button className="w-14 rounded-sm bg-gradient-to-br from-purple-500 to-indigo-600 py-1 text-[6px] text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700">
                            Get started
                          </button>
                          <button className="w-14 rounded-sm border border-slate-600 py-1 text-[6px] text-black hover:border-slate-200 dark:text-white">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Globe */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:h-[32rem]">
          <div className="size-full">
            <h3 className="mt-6 w-full select-none text-balance bg-gradient-to-b from-[#81a2fd98] to-[#7b9cda] bg-clip-text px-4 text-center font-bold font-instrument-serif text-3xl text-transparent leading-[100%] tracking-wide md:mt-12 dark:from-[#edeffd] dark:to-[#7b9cda]">
              I'm very flexible with time zone communications
            </h3>
            <Globe className="mt-28" rotationSpeed={0} />
          </div>
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
              aria-hidden="true"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h3 className="max-w-lg font-mono text-neutral-400">Remote</h3>
            <p className="font-semibold text-neutral-700 text-xl tracking-wide dark:text-neutral-300">
              India
            </p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="/contact"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 rounded-md px-3 has-[&gt;svg]:px-2.5 pointer-events-auto"
              data-slot="button"
            >
              Connect now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Middle section */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]">
          <div className="size-full">
            <div className="flex size-full flex-col items-center justify-center bg-[linear-gradient(to_right_top,#34158c,#551991,#6f1f96,#88279b,#9e319f,#a645a8,#af57b2,#b768bb,#b680c7,#b796d0,#bbabd5,#c4bed8)]">
              <div className="h-40 w-full bg-blue absolute inset-0">
                <Sparkles />
              </div>
              <span className="relative text-white/70 -translate-y-4 w-full max-w-80 text-balance py-2 text-center font-bold font-instrument-serif text-4xl">
                Let's work together on your next project
              </span>
              <div className="relative flex">
                {/* <button
                  className="items-center gap-2 py-2 font-light text-base text-black outline-hidden transition-all duration-300 dark:text-white/75 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-full justify-center rounded-sm border border-black/10 bg-black/10 px-8 dark:border-white/10 dark:bg-white/10"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-copy"
                    aria-hidden="true"
                  >
                    <rect
                      width="14"
                      height="14"
                      x="8"
                      y="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                  </svg>
                  hello@karthik.in
                </button> */}
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>
        {/* Marquee */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] col-span-6 md:col-span-6 lg:col-span-4 max-md:h-[21rem]">
          <div className="size-full">
            <div className="group w-full flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row absolute top-5 font-instrument-serif [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] flex-row">
                <Marquee pauseOnHover className="[--duration:20s]">
                  <figure className="relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu blur-[1px]  duration-300 ease-out hover:blur-none">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-col">
                        <figcaption className="font-medium text-sm dark:text-white">
                          Report Generation Automation
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-xs">
                      A scheduled process logs-in, scrapes the data and insert
                      it into a MsSQL database.
                    </blockquote>
                  </figure>
                  <figure className="h-38 relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu blur-[1px]  duration-300 ease-out hover:blur-none">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-col">
                        <figcaption className="font-medium text-sm dark:text-white">
                          System Integration Testing
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-xs">
                      Analysis of root cause when integration of Airport's
                      operational database to the Situational Awareness
                      subsystem.
                    </blockquote>
                  </figure>
                  <figure className="relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu blur-[1px] duration-300 ease-out hover:blur-none">
                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-col">
                        <figcaption className="font-medium text-sm dark:text-white">
                          Frontend Page for Cabs Availability
                        </figcaption>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-xs">
                      Integrated with API and display the cabs count for the
                      passengers
                    </blockquote>
                  </figure>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 group-hover:-translate-y-10 transform-gpu transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-panels-top-left size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75"
              aria-hidden="true"
            >
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <h3 className="max-w-lg font-mono text-neutral-400">
              Ongoing projects
            </h3>
            <p className="font-semibold text-neutral-700 text-xl tracking-wide dark:text-neutral-300">
              Currently learning Adobe After Effects
            </p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 text-base tracking-wider opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a
              href="/#work"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap font-medium text-sm outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 gap-1.5 rounded-md px-3 has-[&gt;svg]:px-2.5 pointer-events-auto"
              data-slot="button"
            >
              View Recent work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right ml-2 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeDetails;
