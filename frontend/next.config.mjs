/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        // API (użytkownicy, frontend)
        {
          source: '/api/:path*',
          destination: 'http://localhost:1337/api/:path*',
        },
        {
            source: '/uploads/:path*',
            destination: 'http://localhost:1337/uploads/:path*',
          },          
        // Admin panel (ładowanie interfejsu)
        {
          source: '/admin/:path*',
          destination: 'http://localhost:1337/admin/:path*',
        },
        {
          source: '/admin',
          destination: 'http://localhost:1337/admin',
        },
  
        // Wewnętrzne endpointy admina (dashboard, collections, typy, etc.)
        {
          source: '/content-manager/:path*',
          destination: 'http://localhost:1337/content-manager/:path*',
        },
        {
          source: '/content-type-builder/:path*',
          destination: 'http://localhost:1337/content-type-builder/:path*',
        },
        {
          source: '/upload/:path*',
          destination: 'http://localhost:1337/upload/:path*',
        },
        {
          source: '/i18n/:path*',
          destination: 'http://localhost:1337/i18n/:path*',
        },
        {
          source: '/users-permissions/:path*',
          destination: 'http://localhost:1337/users-permissions/:path*',
        },
        {
          source: '/admin-users-permissions/:path*',
          destination: 'http://localhost:1337/admin-users-permissions/:path*',
        },
        {
          source: '/admin-settings/:path*',
          destination: 'http://localhost:1337/admin-settings/:path*',
        },
        {
          source: '/admin-plugins/:path*',
          destination: 'http://localhost:1337/admin-plugins/:path*',
        },
        {
          source: '/admin-graphql/:path*',
          destination: 'http://localhost:1337/admin-graphql/:path*',
        },
      ];
    },
  };  
    
export default nextConfig;
