// [49.2268484, 16.5964398], 14);

jQuery(document).ready(main)

function main() {
  var mymap = L.map('venue-map', {
    center: [49.2268484, 16.5964398],
    zoom: 17,
  });

//  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'kejbaly2/cistajxwr001z2znwolxm2yzm',
//    id: 'mapbox.streets',
//    accessToken: 'pk.eyJ1Ijoia2VqYmFseTIiLCJhIjoiY2lzdGF6cTd2MDAyajJ5bnpyNnVocThlOSJ9.PBaaiFJzzI0wlHJ56Wf55g'
    accessToken: 'pk.eyJ1Ijoia2VqYmFseTIiLCJhIjoiY2lzdGF6cTd2MDAyajJ5bnpyNnVocThlOSJ9.PBaaiFJzzI0wlHJ56Wf55g'
  }).addTo(mymap);

  var marker = L.marker([49.2268484, 16.5964398]).addTo(mymap);
  var popup = L.popup()
    .setLatLng([49.2268484, 16.5964398])
    .setContent("<b><center>Faculty of Information Technology</b></br>Brno University of Technology (VUT FIT).<br/><br/><i>Božetěchova 1/2, <br/>612 66 Královo Pole, Brno</i><br/><br/><a href='https://www.google.cz/maps/place/Faculty+of+Information+Technology+Brno+University+of+Technology,+Bo%C5%BEet%C4%9Bchova+1%2F2,+612+66+Brno-Kr%C3%A1lovo+Pole/@49.226851,16.5945971,17z/data=!3m1!4b1!4m5!3m4!1s0x471294099f6249fb:0x46a6dce891d1b33d!8m2!3d49.226851!4d16.5967858' target='_blank'>( <i class='fa fa-map-o' aria-hidden='true'></i> map )</a></center>")
    .openOn(mymap);

}



