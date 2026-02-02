"use client";

type AnimatedProps = {
  children: React.ReactNode;
  show: boolean;
  delay?: number;
};

export default function Animated({ children, show, delay = 0 }: AnimatedProps) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}