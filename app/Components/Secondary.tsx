"use client";
import Animated from "./hooks/Animated";
import CTAButton from "./hooks/CTAbutton";
import { useReveal } from "./hooks/useReveal";
import Image from "next/image";

export default function Secondary() {
  const { ref, show } = useReveal(120);

  return (
    <section
      ref={ref}
      className="relative bg-muted sm:-mt-[13vh]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:min-h-[85vh]">
        
        <div className="grid grid-rows-[1fr_auto] order-last lg:order-0">

          <div className="flex justify-center sm:items-center pt-12 sm:pt-[4vh]">
            <div className="max-w-200 px-6 sm:px-0">
              <Animated show={show} delay={0}>
                <h1 className="heading-lg text-primary">
                  Live a fulfilling life
                </h1>
              </Animated>

              <Animated show={show} delay={120}>
                <p className="mt-6 body-md text-primary">
                  {`Life can be challenging—especially when you're trying to balance your personal and professional life.`}
                </p>
              </Animated>

              <Animated show={show} delay={220}>
                <p className="mt-4 body-md text-primary">
                  {`It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.`}
                </p>
              </Animated>
            </div>
          </div>

          <Animated show={show} delay={320}>
            <div className="border-t border-primary/40 mt-35 sm:mt-0">
              <CTAButton className="w-full py-6 text-sm font-medium tracking-wide text-primary transition-colors duration-500 ease-in-out hover:bg-primary hover:text-secondary cursor-pointer">
                GET IN TOUCH →
              </CTAButton>
            </div>
          </Animated>
        </div>

        <Animated show={show} delay={180}>
          <div className="relative order-first lg:order-0 h-[32vh] sm:h-[45vh] lg:min-h-full overflow-hidden">
            <Image
              src="/hero-2.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </Animated>
      </div>
    </section>
  );
}
