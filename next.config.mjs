/** @type {import('next').NextConfig} */
const nextConfig = {
  // Without this, opening the dev server on a LAN address (phone testing,
  // another machine) blocks every /_next/ chunk as cross-origin. The CSS still
  // lands, so `.reveal { opacity: 0 }` sticks and the page renders blank below
  // the masthead. Dev-only; ignored by the production build.
  allowedDevOrigins: ["192.168.0.146", "*.local", "*.localhost"],
};

export default nextConfig;
