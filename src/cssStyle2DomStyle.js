/**
 * @method cssStyle2DomStyle
 * @description 连字符转驼峰
 *
 */
const cssStyle2DomStyle =(sName)=> {
  return sName.replace (/^\-/, '').replace (/\-(\w)(\w+)/g, function (a, b, c) {
    return b.toUpperCase () + c.toLowerCase ()
  })
}

export default cssStyle2DomStyle