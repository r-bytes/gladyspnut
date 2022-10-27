/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'scontent-ams4-1.cdninstagram.com',
            port: '',
            pathname: '/v/t51.2885-15/**',
        },
        {
            protocol: 'https',
            hostname: 'scontent-ams2-1.cdninstagram.com',
            port: '',
            pathname: '/v/t51.2885-15/**',
        },
        ],
    },
};

module.exports = nextConfig;
