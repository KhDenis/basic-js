const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 domains = [
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]
function getDNSStats(domains) {
  const dnsObj = {}
  domains.forEach(element => {
    let subDomains = element.split(".")
    let dnsProp = ""
    for (let i = subDomains.length;i > 0; i--) {
      dnsProp += "."+subDomains[i-1]
      if(dnsObj.hasOwnProperty(dnsProp)==false){
        dnsObj[dnsProp]=1
      }
      else{dnsObj[dnsProp]++}
    }
  })
  return dnsObj
}

module.exports = {
  getDNSStats
};
