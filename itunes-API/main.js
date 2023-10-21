// https://syncer.jp/itunes-api-matome APIまとめ


const limit = 10;
let currentPage = 0;

function onSearch(page){
  // 入力した要素を取得
  let inputKeyword = document.getElementById('inputKeyword');

  //ラジオボタンのフォーム要素を取得
  let attributeForm = document.getElementById('attributeForm');

  //結果要素を取得
  let content = document.getElementById('resultContent');

  //リクエストURLを定義 ItunesAPI
  let url = 'https://itunes.apple.com/search?term=' + inputKeyword.value +
        '&country=jp&media=music&attribute=' + attributeForm.attribute.value +
        '&limit=' + limit + '&offset=' + (limit * page);

  //HTTPリクエストオブジェクトを生成
  let request = new XMLHttpRequest();

  //HTTPメソッド、リクエストURL、レスポンス型を設定
  request.open('GET', url);
  request.responseType = 'json';

  //検索結果の応答を受け取った時の処理
  request.onload = function() {

    currentPage = page;

    //結果要素をクリア　innnerHTMLはHTMLの要素を取得・変更ができる
    content.innerHTML = '';

    //　結果の件数文繰り返す
    request.response.results.forEach(function(item){

      //楽曲要素を作成
      let div = document.createElement('div');
      div.classList.add('result-item')
      div.innerHTML =　'<img src=' + item.artworkUrl100 + '>' +  //画像
        '<div class="track-name">' + item.trackName + '</div>' //曲名
        '<div class="artist-name">' + item.artistName + '</div>'; //アーティスト名

      //  クリックイベントリスナー設定
      div.addEventListener('click', function(event){
        //itunesのページを新しいウィンドウで開く
        window.open(item.trackViewUrl, 'trackView', 'width=400, height=600');
      });

      //　結果要素の子要素に楽曲要素を追加
      content.appendChild(div);

      document.getElementById('pageIndex').innerText = (currentPage + 1);
    });
  }

  // 検索実行
  request.send();
}

function onNext() {
  onSearch(currentPage + 1);
}

function onPrev() {
  if (0 < currentPage){
    onSearch(currentPage - 1);
  }
}

