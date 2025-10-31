"use client";
import React from "react";
import { useOverlayStore } from "../../store/overlayStore";
import { Drawer } from "vaul";
import useContactStore from "@/app/store/contactStore";

function Overlay() {
  const openOverlay = useOverlayStore((state) => state.openOverlay);
  const toggleOpenOverlayFn = useOverlayStore(
    (state) => state.toggleOpenOverlay
  );

  const email = useContactStore((state) => state.email);
  const setEmailFn = useContactStore((state) => state.setEmail);
  const message = useContactStore((state) => state.message);
  const setMessageFn = useContactStore((state) => state.setMessage);

  return (
    <>
      {openOverlay && (
        <div className="">
          <Drawer.Root open={openOverlay} onOpenChange={toggleOpenOverlayFn}>
            <Drawer.Overlay className="fixed inset-0 bg-black/80 data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut z-50" />

            {/* Drawer content */}
            <Drawer.Portal>
              <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-xl rounded-t-2xl bg-zinc-900 p-6 text-white">
                {/* Drawer Handle */}
                <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-white/20" />

                {/* Social Links */}
                <div className="flex my-6 justify-center gap-4">
                  <a
                    href="https://linkedin.com/in/karthik192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://github.com/karthik192"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 transition-colors hover:text-neutral-100"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </div>

                <div className="">
                  <a
                    href="mailto:devakarthik03102001ece@gmail.com?subject=Let's%20catch%20up%20for%20a%20cool%20opportunity!"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Karthik"
                    className="flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 w-full bg-zinc-800/40 font-light text-white hover:bg-zinc-700/50"
                  >
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
                      className="mr-2 w-5 h-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    devakarthik03102001ece@gmail.com
                  </a>
                </div>
                <div className="mx-auto text-white/80 my-4 w-full text-center text-xs text-muted-foreground">
                  Or send a message
                </div>
                {/* Contact Form */}
                <form className="flex flex-col gap-y-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-zinc-800/40"
                    placeholder="Your email"
                    id=":rb:-form-item"
                    aria-describedby=":rb:-form-item-description"
                    aria-invalid="false"
                    value={email}
                    onChange={(e) => setEmailFn(e.target.value)}
                    name="email"
                  />
                  <div className="flex flex-col gap-y-2">
                    <textarea
                      className="flex w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-h-[200px] min-h-[100px] bg-zinc-800/40"
                      placeholder="Your message"
                      name="message"
                      id=":rc:-form-item"
                      aria-describedby=":rc:-form-item-description"
                      aria-invalid="false"
                      value={message}
                      onChange={(e) => setMessageFn(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      )}
    </>
  );
}

export default Overlay;
