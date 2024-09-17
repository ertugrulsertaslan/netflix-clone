/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "wallpapercave.com" },
      { protocol: "https", hostname: "dark.netflix.io" },
      { protocol: "https", hostname: "dnm.nflximg.net" },
      { protocol: "https", hostname: "occ-0-7329-1489.1.nflxso.net" },
      { protocol: "https", hostname: "occ-0-8407-2219.1.nflxso.net" },
      { protocol: "https", hostname: "wallpapers.com" },
      { protocol: "https", hostname: "images8.alphacoders.com" },
      { protocol: "https", hostname: "images3.alphacoders.com" },
      { protocol: "https", hostname: "c4.wallpaperflare.com" },
    ],
  },
};

export default nextConfig;
