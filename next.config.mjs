/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/tele-dev-webapp",
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://woosweb.github.io/tele-dev-webapp/' : ''
};

export default nextConfig;
