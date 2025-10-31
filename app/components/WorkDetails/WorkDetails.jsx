import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";
import SkillBadge from "../HomeDetails/SkillBadge";
import { MagicCard } from "@/components/ui/magic-card";

function WorkDetails() {
  return (
    <section className="container relative mx-auto mt-28 w-full py-10">
      <h2
        className="relative z-2 text-balance font-medium text-5xl tracking-tight sm:text-5xl md:text-6xl text-center mb-20 md:mb-24"
        style={{
          textShadow:
            "rgba(255, 255, 255, 0.05) 0px 4px 8px, rgba(255, 255, 255, 0.25) 0px 8px 30px",
        }}
      >
        <p className="mb-3 font-mono font-normal text-black/80 text-xs uppercase tracking-widest md:text-sm dark:text-white/70">
          FEATURED CASE STUDIES
        </p>
        <span className="font-instrument-serif">
          <span className="">Curated</span>{" "}
          <AuroraText className="italic">work</AuroraText>
        </span>
        {/* <div className="w-full max-w-sm p-0 border-none shadow-none mx-auto">
          <MagicCard className="p-0">
            <div className="p-4">
              <p>Hello World</p>
              <span>Hover me</span>
            </div>
          </MagicCard>
        </div> */}
      </h2>
      <div
        aria-label="Projects List"
        className="relative mx-auto p-10 flex w-full max-lg:max-w-xl"
        role="main"
      >
        <div className="mx-auto gap-y-6 flex flex-col lg:gap-y-28">
          <MagicCard className="">
            <div
              className="flex w-full flex-row will-change-auto"
              aria-label="Project Portfolio"
              role="article"
            >
              <div className="flex w-full flex-col ">
                <a
                  href=""
                  className="group relative block cursor-pointer overflow-hidden rounded-2xl border border-white-3 bg-[#f2f2f20c] p-1 shadow-2xl lg:rounded-3xl lg:p-2 dark:border-white/15"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)",
                    }}
                  ></div>
                  <div className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl max-lg:pt-2 lg:rounded-2xl">
                    <div
                      className="-z-10 absolute inset-0 transition-transform duration-500 ease-in-out "
                      style={{
                        background:
                          "linear-gradient(10deg, rgb(219, 39, 119) 49.9%, rgb(219, 39, 119) 81.7%, rgb(244, 114, 182) 99.88%)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)]",
                      }}
                    ></div>
                    <div className="hidden w-full flex-row items-center justify-between gap-8 px-10 py-8 text-white/70 lg:flex">
                      <h3 className="Afont-mono text-xl tracking-tightA xl:text-2xl">
                        A space for entrepreneurs to pitch ideas, explore
                        others, and gain exposure with clean design
                      </h3>
                      {/* Image section */}
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
                        className="lucide lucide-arrow-right size-6 shrink-0 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                    <Image src={Logo} alt="not" />
                  </div>
                </a>
              </div>
            </div>
          </MagicCard>
        </div>
        <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
          <div className="sticky top-32">
            <div className="flex">
              <div className="my-4 mr-4 h-[2px] min-w-6 bg-pink-500"></div>
              <div className="flex flex-col items-start lg:h-[500px]">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold font-instrument-serif text-3xl text-foreground">
                    Next Ventures
                  </h3>
                </div>
                <p className="my-2 font-light text-base text-primary/90">
                  A platform designed for early-stage entrepreneurs to pitch,
                  browse, and engage with startup ideas. It’s built to impress
                  both users and investors with blazing speed, compelling
                  visuals, and a modern tech stack.
                </p>
                <ul className="mt-4 flex flex-col gap-y-2 text-base text-primary/90">
                  <li className="flex items-center text-sm">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"
                    >
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Leveraged Partial Prerendering and After for faster loading.
                  </li>
                  <li className="flex items-center text-sm">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"
                    >
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Simplified idea submission with a clean, intuitive design.
                  </li>
                  <li className="flex items-center text-sm">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-600 dark:text-pink-400 bg-pink-600/20 lg:bg-white-1 dark:lg:bg-black"
                    >
                      <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
                    </svg>
                    Enhanced browsing with seamless performance optimization.
                  </li>
                </ul>
                <div className="mt-10 flex flex-wrap gap-3 text-sm">
                  <SkillBadge
                    title={"NextJS"}
                    url={"https://cdn.simpleicons.org/nextdotjs/white"}
                  />
                  <SkillBadge
                    title={"NextJS"}
                    url={"https://cdn.simpleicons.org/nextdotjs/white"}
                  />
                  <SkillBadge
                    title={"NextJS"}
                    url={"https://cdn.simpleicons.org/nextdotjs/white"}
                  />
                  <SkillBadge
                    title={"NextJS"}
                    url={"https://cdn.simpleicons.org/nextdotjs/white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkDetails;
