/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // <=== enables static exports
  basePath: "/nativa-site",
  assetPrefix: "/nativa-site",
  publicRuntimeConfig: {
    basePath: "/nativa-site",
  },
  reactStrictMode: true,
}

export default nextConfig
