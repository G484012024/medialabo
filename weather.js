
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
    console.log('経度'+data.coord.lon);
    console.log('緯度'+data.coord.lat);
    console.log('天気'+data.weather[0].description);
    console.log('最低気温'+data.main.temp_min);
    console.log('最高気温'+data.main.temp_max);
    console.log('湿度'+data.main.humidity);
    console.log('風速'+data.wind.speed);
    console.log('風向'+data.wind.deg);
    console.log('都市名'+data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  const mae = document.querySelector('div#result');
  if (mae !== null) {
    mae.remove();
  }//前に検索した内容を削除する
const result = document.createElement('div');
result.setAttribute('class','result');
result.innerHTML = `
    <ul>
      <li>都市名: ${data.name}</li>
      <li>経度: ${data.coord.lon}</li>
      <li>緯度: ${data.coord.lat}</li>
      <li>天気: ${data.weather[0].description}</li>
      <li>最低気温: ${data.main.temp_min} ℃</li>
      <li>最高気温: ${data.main.temp_max} ℃</li>
      <li>湿度: ${data.main.humidity} %</li>
      <li>風速: ${data.wind.speed} m/s</li>
      <li>風向: ${data.wind.deg} 度</li>
    </ul>
  `;
  document.body.appendChild(result);
}

// 課題5-1 のイベントハンドラの定義
//function show()

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#search');
  b.addEventListener('click', sendRequest);

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
    // 入力欄から都市IDとる
    let cityId = document.querySelector('#city-id').value;
    let url = `https://www.nishita-lab.org/web-contents/jsons/openweather/${cityId}.json`;
    axios.get(url)
    .then(showResult) 
    .catch(showError) 
    .then(finish); 
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
    let data = resp.data;
    print(data);      // コンソール出力（課題3-2）
    printDom(data); 
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
