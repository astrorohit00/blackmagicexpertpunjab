/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'veb-assets.pages.dev',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
  };

export default nextConfig;
