
/* koaBody 配置 */

const koaBodyConfig = {
  multipart: true,
  // parsedMethods默认是['POST', 'PUT', 'PATCH']
  parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'],

}

module.exports = koaBodyConfig;