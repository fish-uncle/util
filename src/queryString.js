/**
 * @method queryString
 * @description 获取游览器参数
 *
 */
const queryString = (queryName = '') => {
  let name
  let value = ''
  let i
  let str = window.location.href.toString () //获得浏览器地址栏URL串
  str = str.replace ("#", "&")
  let num = str.indexOf ("?")
  str = str.substr (num + 1) //截取“?”后面的参数串
  let arrtmp = str.split ("&") //将各参数分离形成参数数组
  for (i = 0; i < arrtmp.length; i++) {
    num = arrtmp[i].indexOf ("=")
    if (num > 0) {
      name = arrtmp[i].substring (0, num) //取得参数名称
      value = arrtmp[i].substr (num + 1) //取得参数值
      if (name.toUpperCase () === queryName.toUpperCase ()) {
        return decodeURI (value).replace ("#", "")
      }
    }
  }
  return null
}

export default queryString