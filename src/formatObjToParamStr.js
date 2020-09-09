/**
 * @method formatObjToParamStr
 * @description post 类型 body 参数 转 get 类型 url 参数
 *
 */

const filter = (str) => { // 特殊字符转义
  str += '' // 隐式转换
  str = str.replace (/%/g, '%25')
  str = str.replace (/\+/g, '%2B')
  str = str.replace (/ /g, '%20')
  str = str.replace (/\//g, '%2F')
  str = str.replace (/\?/g, '%3F')
  str = str.replace (/&/g, '%26')
  str = str.replace (/\=/g, '%3D')
  str = str.replace (/#/g, '%23')
  return str
}

const formatObjToParamStr = (paramObj) => {
  const sdata = []
  for (let attr in paramObj) {
    sdata.push (`${attr}=${filter (paramObj[attr])}`)
  }
  return sdata.join ('&')
}

export default formatObjToParamStr