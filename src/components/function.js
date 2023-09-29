export const generate_icon = (arr_type, arr_icon, text) => {
  // Mengambil data type, data icon, dan kata jenis yang akan di saring
  let result = [];

  for (let i = 0; i < arr_type.length; i++) {
    result.push(arr_type[i]);
    result.push(arr_icon[i]);
  }
  result.push("ship0");

  return ["match", ["get", text], ...result];
};
