/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the root so a stray lockfile in a parent folder is never picked up.
  turbopack: { root: import.meta.dirname },
  // The blog lives on its own site. Old /blog URLs here (Contentful ids) don't map
  // to its slugs, so send them all to the index. Temporary, in case the blog moves back.
  async redirects() {
    return [
      { source: "/blog/:path*", destination: "https://ihusam.tech/blog", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
