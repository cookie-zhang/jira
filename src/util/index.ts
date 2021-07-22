
// 排除为0的情况
export const isFalse = (value:any) => (value === 0 ? false : !value);
// 清除地址栏没有数据的参数
export const clearnObject = function (object:any) {
  // Object.assign({}, object)
  // 换种浅拷贝方式
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalse(value)) {
      delete result[key];
    }
  });
  return result;
};

