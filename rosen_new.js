

class Boarding {
  constructor( hashData ) {
    /** @type {Array} 地点座標 */
    this.arrayed_hash = hashData;
    /** @type {Number} 現在地から近いと判定する際の経度・緯度の許容範囲 */
    this.range = 0.01;
  }

  /**
   * this.arrayed_haseに入っている位置データから，現在地に近いものだけを取り出す
   * @param {Number} lat GPSから取得した緯度
   * @return {Boarding} 位置が近い点
   */
  lat_filter( lat ) {
    return new Boarding( this.arrayed_hash.filter( data => ( lat - this.range < data.lat ) && ( data.lat < lat + this.range ) ) );
  }
  /**
   * this.arrayed_haseに入っている位置データから，現在地に近いものだけを取り出す
   * @param {Number} lng GPSから取得した経度
   * @return {Boarding} 位置が近い点
   */
  lng_filter( lng ) {
    return new Boarding( this.arrayed_hash.filter( data => ( lng - this.range < data.lng ) && ( data.lng < lng + this.range ) ) );
  }
  /**
   * this_arrayed_hashから，重複しない形で路線名を取り出す
   * @return {Array.<>} 路線名の配列
   */
  get_lines() {
    return this.arrayed_hash.map( data => data.line ).filter( ( element, index, array ) => array.indexOf(element) == index );
    // arrayed_hash内の駅名のみを取得し，重複を削除
  }

  /**
   * 路線ごとに最も近いポイントを返す
   * @param {String[]} lines 路線一覧
   * @param {Number} lat 現在地の緯度
   * @param {Number} lng 現在地の経度
   * @return {Object[]} 路線ごとに最も近いポイント
   */
  get_points( lines, lat, lng ) {
    console.log(this.arrayed_hash);
    return lines.map( (line, i, array) => {
      console.log(line);
      let x = this.arrayed_hash.filter( li => li.line == line );
      console.log(x);
      return x.reduce( (a,b) => {
         if(
          ( ( lat - a.lat ) ** 2 + (lng - a.lng) ** 2 ) <
          ( ( lat - b.lat ) ** 2 + (lng - b.lng) ** 2 ) ) return a;
          else return b; } );
    });
  }

  getMin( lat, lng ) {
    let min = (lat - this.hash[0].lat)**2 + (lng - this.hash[0].lng)**2;
    let minObj = hash[0];
    for( let obj of hash ) {
      if( ((lat-obj.lat)**2 + (lng-obj.lng)**2 ) < min ) {
        min = (lat-obj.lat)**2 + (lng-obj.lng)**2;
        minObj = obj;
      }
    }
    return minObj;
  }
  getStation( id, direction ) {
    let end_condition;
    if( direction == -1 ) end_condition = 0;
    else  end_condition = hash.length;

    let now = id;
    while( id != end_condition ) {
      if( "id" in this.hash[now] ) {
        return this.hash[now];
      }
      now += direction;
    }
  }
  getNear( min ) {
    let min_id = this.hash.indexOf( min );
    let rosen1 = getStation( hash, min_id, -1 );
    let rosen2 = getStation( hash, min_id, 1 );
    console.log(rosen1);
    return [rosen1, rosen2]
  }
}

let br = new Boarding( dataList );

window.addEventListener('load', () => {


console.log("test1");
  // 現在地の設定
//navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
navigator.geolocation.getCurrentPosition(dummy, errorCallback);
});
function dummy(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  let near = br.lat_filter( lat ).lng_filter( lng ); // 緯度・経度でフィルターをかける
  let lines = near.get_lines(); // 近傍の路線一覧を取得
  let nearest = near.get_points( lines, lat, lng );
  console.log( nearest );

  for( let n of nearest ) {
    console.log( "路線候補：" + sta_num[n.line].name );
  }
  let base = document.querySelector('#lines');
  base.innerHTML = '';
  for( let n of nearest ) {
    let s = document.createElement('span');
    s.innerText = sta_num[n.line].name;
    base.appendChild(s);
    let b1 = document.createElement('button');
    b1.setAttribute('type','button');
    b1.setAttribute('value',sta_num[n.line].dir1);
    b1.innerText = sta_num[n.line].dir1;
    base.appendChild(b1);
    let b2 = document.createElement('button');
    b2.setAttribute('type','button');
    b2.setAttribute('value',sta_num[n.line].dir2);
    b2.innerText = sta_num[n.line].dir2;
    base.appendChild(b2);
    let br = document.createElement('br');
    base.appendChild(br);
  }
}
/***** ユーザーの現在の位置情報を取得 *****/
function successCallback(position) {
  var lat = 35.70232182921357        //position.coords.latitude;
  var lng = 139.97757647875227      //position.coords.longitude;



/*
  let min = getMin( dataList, lat, lng );
  if( "sta" in min ) {
    console.log("sta", min);
    document.querySelector('#sta').innerText = min.sta;
    let line_id = min.id;
    //console.log(sta_num);
    let line_name = sta_num[ line_id.match(/^[a-zA-Z]+/) ];
    //console.log( line_name );
    document.querySelector('#line').innerText = line_name;
  } else {
    let near = getNear( dataList, min );

    console.log("min", min);
    console.log("near",near);
    document.querySelector('#sta1').innerText = near[0].sta;
    document.querySelector('#sta2').innerText = near[1].sta;
    let line_id = near[0].id;
    console.log(near[0]);
    console.log(near[1]);

    //console.log(sta_num);
    let line_name = sta_num[ line_id.match(/^[a-zA-Z]+/) ];
    console.log( line_name );
    document.querySelector('#line').innerText = line_name;
  }
  */
}

/***** 位置情報が取得できない場合 *****/
function errorCallback(error) {
  var err_msg = "";
  switch (error.code) {
    case 1:
      err_msg = "位置情報の利用が許可されていません";
      break;
    case 2:
      err_msg = "デバイスの位置が判定できません";
      break;
    case 3:
      err_msg = "タイムアウトしました";
      break;
  }
  document.getElementById("show_result").innerHTML = err_msg;
  //デバッグ用→　document.getElementById("show_result").innerHTML = error.message;
}
