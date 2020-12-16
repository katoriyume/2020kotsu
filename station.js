var dataList = [
    //総武線
    {"line":"JB", "id":"JB22","sta":"錦糸町駅","lat":35.696927, "lng":139.814419},
    { "line":"JB","lat":35.696960, "lng":139.817854 },
    { "line":"JB","lat":35.697059, "lng":139.820646 },
    { "line":"JB","lat":35.697256, "lng":139.823741 },
    {"line":"JB","id":"JB23","sta":"亀戸駅","lat":35.697532, "lng":139.826662},
    { "line":"JB","lat":35.697724, "lng":139.832298 },
    { "line":"JB","lat":35.699912, "lng":139.836856 },
    { "line":"JB","lat":35.703176, "lng":139.838936 },
    {"line":"JB","id":"JB24","sta":"平井駅","lat":35.706513, "lng":139.842293},
    { "line":"JB","lat":35.709160, "lng":139.846352 },
    { "line":"JB","lat":35.711846, "lng":139.850115 },
    { "line":"JB","lat":35.714236, "lng":139.853817 },
    {"line":"JB","id":"JB25","sta":"新小岩駅","lat":35.716964, "lng":139.858027},
    { "line":"JB","lat":35.720189, "lng":139.863430 },
    { "line":"JB","lat":35.725933, "lng":139.871291 },
    { "line":"JB","lat":35.729454, "lng":139.876383 },
    {"line":"JB","id":"JB26","sta":"小岩駅","lat":35.733327, "lng":139.882002},
    { "line":"JB","lat":35.735982, "lng":139.888705 },
    { "line":"JB","lat":35.734605, "lng":139.894393 },
    { "line":"JB","lat":35.731508, "lng":139.902178 },
    {"line":"JB","id":"JB27","sta":"市川駅","lat":35.728995, "lng":139.908068},
    { "line":"JB","lat":35.726938, "lng":139.912929 },
    { "line":"JB","lat":35.725171, "lng":139.917228 },
    { "line":"JB","lat":35.722809, "lng":139.922873 },
    {"line":"JB","id":"JB28","sta":"本八幡駅","lat":35.721370, "lng":139.927277},
    { "line":"JB","lat":35.719155, "lng":139.931568 },
    { "line":"JB","lat":35.717337, "lng":139.936137 },
    { "line":"JB","lat":35.716019, "lng":139.939250 },
    {"line":"JB","id":"JB29","sta":"下総中山駅","lat":35.714431, "lng":139.942931},
    { "line":"JB","lat":35.712709, "lng":139.947017 },
    { "line":"JB","lat":35.711141, "lng":139.951094 },
    { "line":"JB","lat":35.709782, "lng":139.954098 },
    {"line":"JB","id":"JB30","sta":"西船橋駅","lat":35.707504, "lng":139.958924},
    { "line":"JB","lat":35.704358, "lng":139.966244 },
    { "line":"JB","lat":35.702218, "lng":139.972162 },
    { "line":"JB","lat":35.702453, "lng":139.978297 },
    {"line":"JB","id":"JB31","sta":"船橋駅","lat":35.701932, "lng":139.985448},
    { "line":"JB","lat":35.701281, "lng":139.990242 },
    { "line":"JB","lat":35.700870, "lng":139.994861 },
    { "line":"JB","lat":35.700431, "lng":139.999480 },
    {"line":"JB","id":"JB32","sta":"東船橋駅","lat":35.700162, "lng":140.004083},
    { "line":"JB","lat":35.699317, "lng":140.009224 },
    { "line":"JB","lat":35.697881, "lng":140.012399 },
    { "line":"JB","lat":35.694892, "lng":140.016152 },
    {"line":"JB","id":"JB33","sta":"津田沼駅","lat":35.691284, "lng":140.020493},
    { "line":"JB","lat":35.688795, "lng":140.023370 },
    { "line":"JB","lat":35.685102, "lng":140.027628 },
    { "line":"JB","lat":35.677326, "lng":140.036866 },
    {"line":"JB","id":"JB34","sta":"幕張本郷駅","lat":35.672627, "lng":140.042194},
    { "line":"JB","lat":35.669002, "lng":140.046888 },
    { "line":"JB","lat":35.665431, "lng":140.051051 },
    { "line":"JB","lat":35.662742, "lng":140.054141 },
    {"line":"JB","id":"JB35","sta":"幕張駅","lat":35.659380, "lng":140.057838},
    //武蔵野線
    {"line":"JM","id":"JM15","sta":"新松戸駅","lat":35.826260, "lng":139.920958 },
    { "line":"JM","lat":35.821865, "lng":139.927112 },
    { "line":"JM","lat":35.812223, "lng":139.931501 },
    { "line":"JM","lat":35.803697, "lng":139.934869 },
    {"line":"JM","id":"JB14","sta":"新八柱駅","lat":35.792075, "lng":139.938341},
    { "line":"JM","lat":35.787177, "lng":139.939555 },
    { "line":"JM","lat":35.782549, "lng":139.940738 },
    { "line":"JM","lat":35.776985, "lng":139.942013 },
    {"line":"JM","id":"JM13","sta":"東松戸駅","lat":35.770598, "lng":139.943858},
    { "line":"JM","lat":35.767014, "lng":139.945083 },
    { "line":"JM","lat":35.763427, "lng":139.946327 },
    { "line":"JM","lat":35.759509, "lng":139.948065 },
    {"line":"JM","id":"JM12","sta":"市川大野駅","lat":35.756090, "lng":139.951413},
    { "line":"JM","lat":35.751080, "lng":139.954679 },
    { "line":"JM","lat":35.743312, "lng":139.959223 },
    { "line":"JM","lat":35.736794, "lng":139.963031 },
    {"line":"JM","id":"JM11","sta":"船橋法典駅","lat":35.730530, "lng":139.966790},
    { "line":"JM","lat":35.724766, "lng":139.968247 },
    { "line":"JM","lat":35.718018, "lng":139.965845 },
    { "line":"JM","lat":35.712323, "lng":139.961918 },
    {"line":"JM","id":"JM10","sta":"西船橋駅","lat":35.707504, "lng":139.958924},
    { "line":"JM","lat":35.702440, "lng":139.956582 },
    { "line":"JM","lat":35.694122, "lng":139.956593 },
    { "line":"JM","lat":35.690266, "lng":139.968386 },
    { "line":"JM","lat":35.686254, "lng":139.983784 },
    {"line":"JE","id":"JE11","sta":"南船橋駅","lat":35.681933, "lng":139.995731},
    { "line":"JM","lat":35.679347, "lng":140.000314 },
    { "line":"JM","lat":35.673814, "lng":140.003542 },
    { "line":"JM","lat":35.670524, "lng":140.007746 },
    {"line":"JE","id":"JE12","sta":"新習志野駅","lat":35.667437, "lng":140.012965},
    { "line":"JM","lat":35.663268, "lng":140.019607 },
    { "line":"JM","lat":35.658752, "lng":140.026103 },
    { "line":"JM","lat":35.652653, "lng":140.034980 },
    {"line":"JE","id":"JE13","sta":"海浜幕張駅","lat":35.648424, "lng":140.041890},
    //京葉線
    {"line":"JE06","sta":"葛西臨海公園駅","lat":35.645115, "lng":139.861532},
    { "line":"JE","lat":35.642959, "lng":139.865746 },
    { "line":"JE","lat":35.641199, "lng":139.870762 },
    { "line":"JE","lat":35.638882, "lng":139.876933 },
    {"line":"JE07","sta":"舞浜駅","lat":35.636267, "lng":139.883928},
    { "line":"JE","lat":35.634376, "lng":139.890483 },
    { "line":"JE","lat":35.643001, "lng":139.904517 },
    { "line":"JE","lat":35.638816, "lng":139.899539 },
    {"line":"JE08","sta":"新浦安駅","lat":35.649471, "lng":139.912224},
    { "line":"JE","lat":35.654156, "lng":139.917322 },
    { "line":"JE","lat":35.656428, "lng":139.918525 },
    { "line":"JE","lat":35.661860, "lng":139.921128 },
    {"line":"JE09","sta":"市川塩浜駅","lat":35.666615, "lng":139.923801},
    { "line":"JE","lat":35.674641, "lng":139.930683 },
    { "line":"JE","lat":35.681395, "lng":139.939240 },
    { "line":"JE","lat":35.686177, "lng":139.948162 },
    {"line":"JE10","sta":"二俣新町駅","lat":35.691511, "lng":139.959542},
    { "line":"JE","lat":35.690708, "lng":139.966556 },
    { "line":"JE","lat":35.688049, "lng":139.976951 },
    { "line":"JE","lat":35.685338, "lng":139.987322 },
    {"line":"JE11","sta":"南船橋駅","lat":35.681933, "lng":139.995731},
    { "line":"JE","lat":35.679347, "lng":140.000314 },
    { "line":"JE","lat":35.673814, "lng":140.003542 },
    { "line":"JE","lat":35.670524, "lng":140.007746 },
    {"line":"JE12","sta":"新習志野駅","lat":35.667437, "lng":140.012965},
    { "line":"JE","lat":35.663268, "lng":140.019607 },
    { "line":"JE","lat":35.658752, "lng":140.026103 },
    { "line":"JE","lat":35.652653, "lng":140.034980 },
    {"line":"JE13","sta":"海浜幕張駅","lat":35.648424, "lng":140.041890},
    { "line":"JE","lat":35.646517, "lng":140.045054 },
    { "line":"JE","lat":35.644125, "lng":140.049030 },
    { "line":"JE","lat":35.640771, "lng":140.054128 },
    {"line":"JE14","sta":"検見川浜駅","lat":35.637473, "lng":140.059256},
    { "line":"JE","lat":35.635047, "lng":140.062124 },
    { "line":"JE","lat":35.632583, "lng":140.065552 },
    { "line":"JE","lat":35.630530, "lng":140.069053 },
    {"line":"JE15","sta":"稲毛海岸駅","lat":35.629705, "lng":140.073678},
    { "line":"JE","lat":35.628225, "lng":140.079716 },
    { "line":"JE","lat":35.621738, "lng":140.087454 },
    { "line":"JE","lat":35.614518, "lng":140.094965 },
    {"line":"JE16","sta":"千葉みなと駅","lat":35.606779, "lng":140.102822},
    { "line":"JE","lat":35.601012, "lng":140.108599 },
    { "line":"JE","lat":35.598628, "lng":140.116059 },
    { "line":"JE","lat":35.591117, "lng":140.121979 },
    { "line":"JE","lat":35.588544, "lng":140.127083 },
    {"line":"","sta":"蘇我駅","lat":35.581537, "lng":140.131045},
];