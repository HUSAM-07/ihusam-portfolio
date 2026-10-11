import type { SVGProps } from "react";

// Uses currentColor for the triangle so it stays visible in both light and dark mode.
const Vercel = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 222" preserveAspectRatio="xMidYMid">
    <path fill="currentColor" d="m128 0 128 221.705H0z" />
  </svg>
);

export { Vercel };
