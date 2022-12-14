/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: '*.cdninstagram.com',
            port: '',
            pathname: '/v/*/**',
        },
        {
            protocol: 'https',
            hostname: 'scontent-*.cdninstagram.com',
            port: '',
            pathname: '/v/t51.2885-15/**',
        },
        {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/**',
        },
        ],
    },
};

module.exports = nextConfig;
