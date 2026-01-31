"use client";
import Animated from "./hooks/Animated";
import { useReveal } from "./hooks/useReveal";

export default function Secondary(){
  const {ref,show}=useReveal(120);
  return (
    <section className="relative bg-[#e9e5df] -mt-[13vh]" ref={ref}>
      <div className="mx-auto max-w-[1600px] px-[3.75vw] lg:pl-[2vw] lg:pr-[3.75vw] pt-35 pb-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[8vw] items-center">

          <div className="text-center md:text-left">
            <Animated show={show} delay={0}>
              <h1 className="font-medium text-[#223614] leading-[1.15] text-[clamp(2.75rem,3.8vw,4rem)]">
                Live a fulfilling life
              </h1>
            </Animated>
            <Animated show={show} delay={120}>
              <p className="mt-6 text-lg text-gray-700">
                {`Life can be challenging—especially when you're trying to balance your personal and professional life. `}
              </p>
            </Animated>
            <Animated show={show} delay={220}>
              <p className="mt-4 text-lg text-gray-700">
                {`It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.`}
              </p>
            </Animated>
            <Animated show={show} delay={320}>
              <div className="mt-8">
                <button className="border px-6 py-3 text-sm tracking-wide">
                  Get in touch
                </button>
              </div>
            </Animated>
          </div>
          <Animated show={show} delay={180}>
            <div className="h-[70vh] md:h-[80vh] w-full overflow-hidden">
              <img src="/hero-2.jpg" alt="" className="h-full w-full object-cover"/>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  )
}