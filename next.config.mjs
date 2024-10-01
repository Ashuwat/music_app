/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
            pathname: '/image/**',
          },
          {
            protocol: 'http',
            hostname: 'probablyprogramming.com',
            port: '',
            pathname: '/**'
          }
        ],
      },
};

export default nextConfig;
