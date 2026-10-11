import type { SVGProps } from "react";

// Rebuilt from svgl's full-color tensorflow-icon-light.svg: its generated component (and the
// dark variant) lost the CSS classes that tie each gradient to its clip path, leaving black
// boxes. Filling the two clip shapes with their gradients draws the same mark without CSS.
// viewBox is cropped to the mark (the source canvas is ~25% padding) so it matches the other logos.
const TensorFlow = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="54.90 56.02 156.98 156.98">
    <title>TensorFlow</title>
    <defs>
      <linearGradient
        id="tensorflow__gradient-1"
        x1="60.08"
        y1="134.33"
        x2="218.39"
        y2="134.33"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6f00" />
        <stop offset="1" stopColor="#ffa800" />
      </linearGradient>
      <linearGradient
        id="tensorflow__gradient-2"
        x1="59"
        y1="134.33"
        x2="217.32"
        y2="134.33"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#ff6f00" />
        <stop offset="1" stopColor="#ffa800" />
      </linearGradient>
    </defs>
    <polygon fill="url(#tensorflow__gradient-1)" points="200.76 95.86 136.29 59.02 136.29 210 162.05 195.04 162.05 152.57 181.5 163.82 181.39 134.77 162.05 123.72 162.05 106.85 200.85 129.27 200.76 95.86" />
    <polygon fill="url(#tensorflow__gradient-2)" points="66.03 95.86 130.5 59.02 130.5 210 104.74 195.04 104.74 106.85 65.94 129.27 66.03 95.86" />
  </svg>
);

export { TensorFlow };
