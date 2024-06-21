import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(process.cwd(), 'src/app/components');
    config.resolve.alias['@styles'] = path.join(process.cwd(), 'src/styles');
    config.resolve.alias['@public'] = path.join(process.cwd(), 'public');
    return config;
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/sign-up' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sign-up' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
