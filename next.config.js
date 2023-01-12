const withTM = require('next-transpile-modules')
const withPWA = require('next-pwa')

module.exports = withTM(['@tldraw/tldraw', '@tldraw/core'])(withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
}))