// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let kazuate=document.querySelector('button#submit')
kazuate.addEventListener('click',hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let a = document.querySelector('input[name="yoso"]');
  yoso = Number(a.value);
  
  kaisu = kaisu+1;
  console.log(kaisu+'回目の予想：'+yoso);
  let b =document.querySelector('span#kaisu');
  b.textContent=kaisu;
  
  let z=document.querySelector('span#answer');
  z.textContent=yoso;

  let result =document.querySelector('#result');

  if(kaisu<=2){                //回数が1,2回目の時の処理
    if(yoso<kotae){
        result.textContent='まちがい。答えはもっと大きいですよ'
        //console.log('まちがい。答えはもっと大きいですよ');  
    }else if(yoso>kotae){
        result.textContent='まちがい。答えはもっと小さいですよ'
        //console.log('まちがい。答えはもっと小さいですよ');
    }if(yoso===kotae){  
    result.textContent='正解です。おめでとう！'
        //console.log('正解です。おめでとう！');
    }
}else if(kaisu===3){      //回数が3回目(最後)の時の処理
    if(yoso===kotae){
    result.textContent='正解です。すでにゲームは終わっています';
    }else if(yoso!==kotae){
    result.textContent='まちがい。残念でした答えは'+kotae+'です'
    //console.log('まちがい。残念でした答えは'+kotae+'です');
    }
}else if(kaisu>=4){         //回数が4回以上で3回をオーバーしてる時
    result.textContent='答えは'+kotae+'でした。すでにゲームは終わっています'
    //console.log('答えは'+kotae+'でした。すでにゲームは終わっています');
}
}




  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
