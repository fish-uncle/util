/**
 * @method hasOneOf
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 *
 */
const hasOneOf = (target, arr) => {
  return target.some(_ => arr.indexOf(_) > -1)
}

export default hasOneOf