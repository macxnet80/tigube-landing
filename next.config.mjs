/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  output: 'standalone',
  async redirects() {
    return [
      { source: '/start', destination: '/?utm_source=auto&utm_medium=offline&utm_campaign=auto-werbung', permanent: false },
      { source: '/kn', destination: '/?utm_source=uni&utm_medium=offline&utm_campaign=uni-kn', permanent: false },
      { source: '/aktion', destination: '/?utm_source=plakat&utm_medium=offline&utm_campaign=plakat-aktion', permanent: false },
    ]
  },
}

export default nextConfig