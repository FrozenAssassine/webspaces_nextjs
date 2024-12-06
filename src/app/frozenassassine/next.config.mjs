/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/git',
          destination: 'https://github.com/frozenassassine',
          permanent: true
        },
        {
          source: '/insta',
          destination: 'https://instagram.com/frozenassassine',
          permanent: true
        },
        {
            source: '/fpv',
            destination: 'https://instagram.com/droneventurefpv',
            permanent: true
          },
      ];
    },
  };

export default nextConfig;