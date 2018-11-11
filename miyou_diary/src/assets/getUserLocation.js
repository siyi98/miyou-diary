let currentCity = '';

function getCurrentCity(result) {
  currentCity = result.name;
  console.log("当前定位城市：" + currentCity);
}
let myCity = new BMap.LocalCity();
myCity.get(getCurrentCity);
console.log('aaa' + currentCity);
export default currentCity
