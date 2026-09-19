/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  // loader: "akamai",
  // path: "",
  // },
  // output: "export", // <=== enables static exports
  // basePath: "/nativa-site",
  // assetPrefix: "/nativa-site",
  // publicRuntimeConfig: {
  //   basePath: "/nativa-site",
  // },
  reactStrictMode: true,
  images: {
    // ElevatED logo is served from LearnWorlds until we have our own file
    remotePatterns: [{ protocol: "https", hostname: "lwfiles.mycourse.app" }],
  },
}

export default nextConfig
