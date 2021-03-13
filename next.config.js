const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')
const _ = require('lodash')

module.exports = (phase, { defaultConfig }) => {

  // if (phase == PHASE_DEVELOPMENT_SERVER) {
  //   return {}
  // } else if (phase == PHASE_PRODUCTION_SERVER) {
  //   return {
  //     assetPrefix: 'https://cdn.funders.watch'
  //   }
  // } else if (phase == PHASE_PRODUCTION_BUILD) {
  //   return {}
  // }

  return _.defaultsDeep({}, defaultConfig, {
    assetPrefix: PHASE_PRODUCTION_SERVER ? "https://cdn.funders.watch" : "",
    rewrites() {
      return [
        { source: '/basket', destination: '/api/user-info' },
        { source: '/checkout', destination: '/api/commerce/checkout' },
        { source: '/logout', destination: '/api/commerce/customers/logout?redirect_to=/' }
      ]
    }
  })

}