/* 資料google sheet：https://reurl.cc/24eqX6 */
var url = "https://spreadsheets.google.com/feeds/cells/127SD2az98sPOoeV2Sk4VunaZV5YUZTOQaqfMysw3qvU/1/public/values?alt=json";
var count = 0;
var Excuse = [];
var Excuse_EN = [];
var i;
var lang = "en";
var lang_data = $.getJSON("js/translate.json", function(data) {
    return data.responseJSON;
});
$(document).ready(function() {
  $(".gen_btn").attr("disabled", "disabled");
//   $.getJSON(url, function(data) {
//     count = (data.feed.entry.length-3) / 3;
//     for (var j = 4; j <= data.feed.entry.length; j+=3){
//       Excuse.push(data.feed.entry[j].gs$cell.$t);
//       Excuse_EN.push(data.feed.entry[j+1].gs$cell.$t);
//     }
//     $(".gen_btn").removeAttr("disabled");
//   });
  setLang();

  $(".lang_btn").click(function() {
    lang = lang == "en" ? "zh-tw" : "en";
    setLang();
    getExcuse(i);
  })

  $(".gen_btn").click(function() {
    i = getRandom(0, count-1);
    getExcuse(i);
  });
})

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setLang() {
  for (var item in lang_data[lang]) {
    $("." + item).text(lang_data[lang][item]);
  }
}

function getExcuse(i) {
  if (lang == "zh-tw") {
    $(".ans").text(Excuse[i]);
  } else if (lang == "en") {
    $(".ans").text(Excuse_EN[i]);
  }
}

function getJSONData(data){
  count = data.feed.entry.length;
    for (var j = 0; j <= count; j++){
      Excuse.push(data.feed.entry[j].gsx$excuse.$t);
      Excuse_EN.push(data.feed.entry[j+1].gsx$excuseen.$t);
    }
    $(".gen_btn").removeAttr("disabled");
}
