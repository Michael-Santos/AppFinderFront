/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN_MAPBOX_TOKEN
    }
};

export default nextConfig;
