function onSearch(){
  // 入力した要素を取得
  let inputKeyword = document.getElementById('inputKeyword');

  //結果要素を取得
  let content = document.getElementById('resultContent')

  //リクエストURLを定義
  let url ='https://itunes.apple.com/seach?term=' + inputKeyword.value + '&country=jp&media=music&attribute=artistTerm';

  //HTTPリクエストオブジェクトを生成
  let request = new XMLHttpRequest();

  //HTTPメソッド、リクエストURL、レスポンス型を設定
  request.open('GET', url);
  request.responseType = 'json';

  //検索結果の応答を受け取った時の処理
  request.onload = function() {

    //結果要素をクリア　innnerHTMLはHTMLの要素を取得・変更ができる
    content.innerHTML = '';

    //　結果の件数文繰り返す
    for (let index in results){
      let item = results[index];

      let div = document.createElement('div');
      div.innerHTML =　'<img src=' + item.artworkUrl100 + '>' +  //画像
        '<div class="track-name">' + item.trackName + '</div>' //曲名
        '<div class="artist-name">' + item.artistName + '</div>'; //アーティスト名

      //　結果要素の子要素に楽曲要素を追加
      content.appendChild(div);
    }
  }

  // 検索実行
  request.send();
}