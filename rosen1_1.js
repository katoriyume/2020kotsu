// 現在地の設定
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

/***** ユーザーの現在の位置情報を取得 *****/
function successCallback(position) {
  var lat = 35.696387236293795        //position.coords.latitude;
  var lng = 139.96703258972653     //position.coords.longitude;

  const getMin = ( hash, lat, lng ) => {
    let min = (lat - hash[0].lat)**2 + (lng - hash[0].lng)**2;
    let minObj = hash[0];
    for( let obj of hash ) {
      if( ((lat-obj.lat)**2 + (lng-obj.lng)**2 ) < min ) {
        min = (lat-obj.lat)**2 + (lng-obj.lng)**2;
        minObj = obj;
      }
    }
    return minObj;
  }

  /*
  const getLine = ( hash, lat, lng ) => {
    let line =
  }
*/
  const getStation = ( hash, id, direction ) => {
    let end_condition;
    if( direction == -1 ) end_condition = 0;
    else  end_condition = hash.length;

    let now = id;
    while( id != end_condition ) {
      if( "sta" in hash[now] ) {
        return hash[now];
      }
      now += direction;
    }
  }
  const getNear = ( hash, min ) => {
    let min_id = hash.indexOf( min );
    let line1 = getStation( hash, min_id, -1 );
    let line2 = getStation( hash, min_id, 1 );
    return [line1, line2]
  }
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
    let line_id1 = near[0].id;
    let line_id2 = near[1].id;
    //console.log(near[0]);
    //console.log(near[1]);
   
    //console.log(sta_num);
    let line_name1 = sta_num[ line_id1.match(/^[a-zA-Z]+/) ];
    let line_name2 = sta_num[ line_id2.match(/^[a-zA-Z]+/) ];
    console.log( line_name1 );
    console.log( line_name2 );
    document.querySelector('#line1').innerText = line_name1;
    document.querySelector('#line2').innerText = line_name2;
  }
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
