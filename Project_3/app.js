const url = 'https://data.cityofnewyork.us/resource/p937-wjvj.json';
let monthdata=[0,0,0,0,0,0,0,0,0,0,0,0]
document.getElementById("pass").addEventListener("click", function() {
  var shape = document.getElementById("shape");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 100) + "px";
  shape.style.height = (height + 100) + "px";
});
document.getElementById("activity").addEventListener("click", function() {
  var shape = document.getElementById("shape2");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 25) + "px";
  shape.style.height = (height + 25) + "px";
});
document.getElementById("bait").addEventListener("click", function() {
  var shape = document.getElementById("shape3");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 23.5) + "px";
  shape.style.height = (height + 23.5) + "px";
});
document.getElementById("failed").addEventListener("click", function() {
  var shape = document.getElementById("shape4");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 15) + "px";
  shape.style.height = (height + 15) + "px";
});
document.getElementById("shape3").addEventListener("click", function() {
  var shape = document.getElementById("shape3");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width + 100) + "px";
  shape.style.height = (height + 100) + "px";
});
document.getElementById("shape3").addEventListener("click", function() {
  var shape = document.getElementById("shape2");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width - 50) + "px";
  shape.style.height = (height - 50) + "px";
});
document.getElementById("shape3").addEventListener("click", function() {
  var shape = document.getElementById("shape4");
  var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
  var height = parseInt(window.getComputedStyle(shape).getPropertyValue("height"));
  shape.style.width = (width - 50) + "px";
  shape.style.height = (height - 50) + "px";
});

fetch(url)
  .then(function(response) {
          //new google.maps.Marker({ position: pos, map: map, title: "Data Location", });
          response.json().then(function(data) {

          const NYCposition = { lat: 40.7831, lng: -73.9712 };
console.log(data);

          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14.5,
            center: NYCposition,
            mapId: '5a318806032bcd4d'
          })
          const NYCposition2 = { lat: 40.713389240782, lng: -73.963859600172 }; 
          new google.maps.Marker({ position: NYCposition2, map: map, title: "Data Location", });
          const NYCposition3 = { lat: 40.676239666437, lng: -73.875239473989 }; 
          new google.maps.Marker({ position: NYCposition3, map: map, title: "Data Location", });
          const NYCposition4 = { lat: 40.669120541272, lng: -73.889416046474 }; 
          new google.maps.Marker({ position: NYCposition4, map: map, title: "Data Location", });
          const NYCposition5 = { lat: 40.724476527783, lng: -73.979792775529 }; 
          new google.maps.Marker({ position: NYCposition5, map: map, title: "Data Location", });
          const NYCposition6 = { lat: 40.694944645317, lng: -73.913173882126 }; 
          new google.maps.Marker({ position: NYCposition6, map: map, title: "Data Location", });
          const NYCposition7 = { lat: 40.682615309615, lng: -73.888070356704 }; 
          new google.maps.Marker({ position: NYCposition7, map: map, title: "Data Location", });
          const NYCposition8 = { lat: 40.699806572184, lng: -73.930666020738 }; 
          new google.maps.Marker({ position: NYCposition8, map: map, title: "Data Location", });
          const NYCposition9 = { lat: 40.674388949108, lng: -73.887803020399 }; 
          new google.maps.Marker({ position: NYCposition9, map: map, title: "Data Location", });
          const NYCposition10 = { lat: 40.728006168983, lng: -73.979077320945 }; 
          new google.maps.Marker({ position: NYCposition10, map: map, title: "Data Location", });
          const NYCposition11 = { lat: 40.686527695777, lng: -73.926796511282 }; 
          new google.maps.Marker({ position: NYCposition11, map: map, title: "Data Location", });
          const NYCposition13 = { lat: 40.684911080197, lng: -73.922702284521 }; 
          new google.maps.Marker({ position: NYCposition13, map: map, title: "Data Location", });
          const NYCposition14 = { lat: 40.705072848875, lng: -73.944012656808 }; 
          new google.maps.Marker({ position: NYCposition14, map: map, title: "Data Location", });
          const NYCposition15 = { lat: 40.729288114043, lng: -73.979856255752 }; 
          new google.maps.Marker({ position: NYCposition15, map: map, title: "Data Location", });
          const NYCposition16 = { lat: 40.712482159336, lng: -73.959924707103 }; 
          new google.maps.Marker({ position: NYCposition16, map: map, title: "Data Location", });
          const NYCposition17 = { lat: 40.684674148312, lng: -73.95099592211 }; 
          new google.maps.Marker({ position: NYCposition17, map: map, title: "Data Location", });
          const NYCposition18 = { lat: 40.721482379669, lng: -73.982160289543 }; 
          new google.maps.Marker({ position: NYCposition18, map: map, title: "Data Location", });
          const NYCposition19 = { lat: 40.712377755643, lng: -73.959632592452 }; 
          new google.maps.Marker({ position: NYCposition19, map: map, title: "Data Location", });
          const NYCposition20 = { lat: 40.721732244525, lng: -73.982755482936 }; 
          new google.maps.Marker({ position: NYCposition20, map: map, title: "Data Location", });
          const NYCposition22 = { lat: 40.694461786122, lng: -73.950469413704 }; 
          new google.maps.Marker({ position: NYCposition22, map: map, title: "Data Location", });
          const NYCposition23 = { lat: 40.693315839248, lng: -73.947379843446 }; 
          new google.maps.Marker({ position: NYCposition23, map: map, title: "Data Location", });
          const NYCposition24 = { lat: 40.723744980883, lng: -73.989569997889 }; 
          new google.maps.Marker({ position: NYCposition24, map: map, title: "Data Location", });
          const NYCposition25 = { lat: 40.693367783811, lng: -73.946932645952 }; 

	    //  for (let i = 0; i < data.length; i++){
          //try { let x = data[i].latitude;
         //   let y = data[i].longitude;
      //       console.log(y);
      //       let pos = {lat: x, lng: y};
      //       new google.maps.Marker({ position: pos, map: map, title: "Data Location", });}
      //   catch(err) {
      //     console.log(err);
      //   }
      // }
          loadChart(data)
      
        });
    }
  )
  fetch(url)
  .then(function(response) {
          //new google.maps.Marker({ position: pos, map: map, title: "Data Location", });
          response.json().then(function(data) {

          const NYCposition = { lat: 40.7831, lng: -73.9712 };
console.log(data);

          const map2 = new google.maps.Map(document.getElementById("map2"), {
            zoom: 14.5,
            center: NYCposition,
            mapId: '5a318806032bcd4d'
          })
          const NYCposition2 = { lat: 40.865754480579, lng: -73.904153531579 }; 
          new google.maps.Marker({ position: NYCposition2, map: map2, title: "Data Location", });
          const NYCposition3 = { lat: 40.865867180005, lng: -73.904352220531 }; 
          new google.maps.Marker({ position: NYCposition3, map: map2, title: "Data Location", });
          const NYCposition4 = { lat: 40.865330244776, lng: -73.905600330101 }; 
          new google.maps.Marker({ position: NYCposition4, map: map2, title: "Data Location", });
          const NYCposition5 = { lat: 40.865324787978, lng: -73.905640107953 }; 
          new google.maps.Marker({ position: NYCposition5, map: map2, title: "Data Location", });
          const NYCposition6 = { lat: 40.865313844679, lng: -73.905683509071 }; 
          new google.maps.Marker({ position: NYCposition6, map: map2, title: "Data Location", });
          const NYCposition7 = { lat: 40.865302898399, lng: -73.905723294719 }; 
          new google.maps.Marker({ position: NYCposition7, map: map2, title: "Data Location", });
          const NYCposition8 = { lat: 40.734385513036, lng: -73.982088263439 }; 
          new google.maps.Marker({ position: NYCposition8, map: map2, title: "Data Location", });
          const NYCposition9 = { lat: 40.772339737326, lng: -73.807804255054 }; 
          new google.maps.Marker({ position: NYCposition9, map: map2, title: "Data Location", });
          const NYCposition10 = { lat: 40.895844124388, lng: -73.85603109462 }; 
          new google.maps.Marker({ position: NYCposition10, map: map2, title: "Data Location", });
          const NYCposition11 = { lat: 40.696249989299, lng: -73.961102928513 }; 
          new google.maps.Marker({ position: NYCposition11, map: map2, title: "Data Location", });
          const NYCposition12 = { lat: 40.867923288137, lng: -73.908091401094 }; 
          new google.maps.Marker({ position: NYCposition12, map: map2, title: "Data Location", });
          const NYCposition13 = { lat: 40.850107339681, lng: -73.886692192152 }; 
          new google.maps.Marker({ position: NYCposition13, map: map2, title: "Data Location", });
          const NYCposition14 = { lat: 40.853308443856, lng: -73.916393193404 }; 
          new google.maps.Marker({ position: NYCposition14, map: map2, title: "Data Location", });
          const NYCposition15 = { lat: 40.713389240782, lng: -73.942560817686 }; 
          new google.maps.Marker({ position: NYCposition15, map: map2, title: "Data Location", });
          const NYCposition16 = { lat: 40.694489104256, lng: -73.956946057135 }; 
          new google.maps.Marker({ position: NYCposition16, map: map2, title: "Data Location", });
          const NYCposition17 = { lat: 40.714388624517, lng: -73.853762400886 }; 
          new google.maps.Marker({ position: NYCposition17, map: map2, title: "Data Location", });
          const NYCposition18 = { lat: 40.869153707213, lng: -73.890210202019 }; 
          new google.maps.Marker({ position: NYCposition18, map: map2, title: "Data Location", });
          const NYCposition19 = { lat: 40.668553710041, lng: -73.944191224004 }; 
          new google.maps.Marker({ position: NYCposition19, map: map2, title: "Data Location", });
          const NYCposition20 = { lat: 40.694190400093, lng: -73.791957777081 }; 
          new google.maps.Marker({ position: NYCposition20, map: map2, title: "Data Location", });
          const NYCposition21 = { lat: 40.865291952105, lng: -73.905763080354 }; 
          new google.maps.Marker({ position: NYCposition21, map: map2, title: "Data Location", });
          const NYCposition22 = { lat: 40.865281005797, lng: - 73.905802865975 }; 
          new google.maps.Marker({ position: NYCposition22, map: map2, title: "Data Location", });
          const NYCposition23 = { lat: 40.887023024009, lng: -73.830202075345 }; 
          new google.maps.Marker({ position: NYCposition23, map: map2, title: "Data Location", });
          const NYCposition24 = { lat: 40.895718513942, lng: -73.856548616438 }; 
          new google.maps.Marker({ position: NYCposition24, map: map2, title: "Data Location", });
          const NYCposition25 = { lat: 40.86918935755, lng: -73.890177601874 }; 
          new google.maps.Marker({ position: NYCposition25, map: map2, title: "Data Location", });
          const NYCposition26 = { lat: 40.694530133019, lng: -73.956567383485 }; 
          new google.maps.Marker({ position: NYCposition26, map: map2, title: "Data Location", });
          const NYCposition27 = { lat: 40.865237184925, lng: -73.9059186229 }; 
          new google.maps.Marker({ position: NYCposition27, map: map2, title: "Data Location", });
          const NYCposition28 = { lat: 40.68624956786, lng: -73.929735474409 }; 
          new google.maps.Marker({ position: NYCposition28, map: map2, title: "Data Location", });
          const NYCposition29 = { lat: 40.668563744644, lng: -73.942284301016 }; 
          new google.maps.Marker({ position: NYCposition29, map: map2, title: "Data Location", });
          const NYCposition30 = { lat: 40.694541076549, lng: -73.956473616091 }; 
          new google.maps.Marker({ position: NYCposition30, map: map2, title: "Data Location", });
          const NYCposition31 = { lat: 40.713389240782, lng: -73.963859600172 }; 
          new google.maps.Marker({ position: NYCposition31, map: map2, title: "Data Location", });
          const NYCposition32 = { lat: 40.895825994935, lng: -73.856899245161 }; 
          new google.maps.Marker({ position: NYCposition32, map: map2, title: "Data Location", });
          const NYCposition33 = { lat: 40.869260658197, lng: -73.890112401476 }; 
          new google.maps.Marker({ position: NYCposition33, map: map2, title: "Data Location", });
          const NYCposition34 = { lat: 40.865182379118, lng: -73.906027164345 }; 
          new google.maps.Marker({ position: NYCposition34, map: map2, title: "Data Location", });
          const NYCposition35 = { lat: 40.686280145408, lng: -73.930366442231 }; 
          new google.maps.Marker({ position: NYCposition35, map: map2, title: "Data Location", });
          const NYCposition36 = { lat: 40.69456296338, lng: -73.956286081209 }; 
          new google.maps.Marker({ position: NYCposition36, map: map2, title: "Data Location", });
          const NYCposition37 = { lat: 40.868770790034, lng: -73.907320091874 }; 
          new google.maps.Marker({ position: NYCposition37, map: map2, title: "Data Location", });
          const NYCposition38 = { lat: 40.665454057258, lng: -73.94257536889 }; 
          new google.maps.Marker({ position: NYCposition38, map: map2, title: "Data Location", });
          const NYCposition39 = { lat: 40.865163192629, lng: -73.906059730636 }; 
          new google.maps.Marker({ position: NYCposition39, map: map2, title: "Data Location", });
          const NYCposition40 = { lat: 40.68627469308, lng: -73.930427745101 }; 
          new google.maps.Marker({ position: NYCposition40, map: map2, title: "Data Location", });
          const NYCposition41 = { lat: 40.895848038148, lng: -73.856967923008 }; 
          new google.maps.Marker({ position: NYCposition41, map: map2, title: "Data Location", });
          const NYCposition42 = { lat: 40.869414006166, lng: -73.889739731489 }; 
          new google.maps.Marker({ position: NYCposition42, map: map2, title: "Data Location", });
          const NYCposition43 = { lat: 40.765667675878, lng: -73.918803225495 }; 
          new google.maps.Marker({ position: NYCposition43, map: map2, title: "Data Location", });
          const NYCposition44 = { lat: 40.769523438919, lng: -73.809346769053 }; 
          new google.maps.Marker({ position: NYCposition44, map: map2, title: "Data Location", });
          const NYCposition45 = { lat: 40.868976419642, lng: -73.907041398299 }; 
          new google.maps.Marker({ position: NYCposition45, map: map2, title: "Data Location", });
          const NYCposition46 = { lat: 40.865100143653, lng: -73.906157437171 }; 
          new google.maps.Marker({ position: NYCposition46, map: map2, title: "Data Location", });
          const NYCposition47 = { lat: 40.694947209481, lng: -73.956228129346 }; 
          new google.maps.Marker({ position: NYCposition47, map: map2, title: "Data Location", });
          const NYCposition48 = { lat: 40.686266495946, lng: -73.930489050832 }; 
          new google.maps.Marker({ position: NYCposition48, map: map2, title: "Data Location", });
          const NYCposition49 = { lat: 40.895867341103, lng: -73.857040223949 }; 
          new google.maps.Marker({ position: NYCposition49, map: map2, title: "Data Location", });
          const NYCposition50 = { lat: 40.846907326854, lng: -73.889874772097 }; 
          new google.maps.Marker({ position: NYCposition50, map: map2, title: "Data Location", });
          const NYCposition51 = { lat: 40.71579593414, lng: -73.859747455516 }; 
          new google.maps.Marker({ position: NYCposition51, map: map2, title: "Data Location", });
          const NYCposition52 = { lat: 40.667633539963, lng: - 73.942833023877 }; 
          new google.maps.Marker({ position: NYCposition52, map: map2, title: "Data Location", });
          const NYCposition53 = { lat: 40.865050785785, lng: -73.906215354235 }; 
          new google.maps.Marker({ position: NYCposition53, map: map2, title: "Data Location", });
          const NYCposition54 = { lat: 40.869009324177, lng: -73.907001579836 }; 
          new google.maps.Marker({ position: NYCposition54, map: map2, title: "Data Location", });
          const NYCposition55 = { lat: 40.695037793846, lng: -73.956246100596 }; 
          new google.maps.Marker({ position: NYCposition55, map: map2, title: "Data Location", });
          const NYCposition56 = { lat: 40.694995371485, lng: -73.960353576264 }; 
          new google.maps.Marker({ position: NYCposition56, map: map2, title: "Data Location", });
          const NYCposition57 = { lat: 40.686261041368, lng: -73.930546747967 }; 
          new google.maps.Marker({ position: NYCposition57, map: map2, title: "Data Location", });
          const NYCposition58 = { lat: 40.739489790595, lng: -73.976623458224 }; 
          new google.maps.Marker({ position: NYCposition58, map: map2, title: "Data Location", });
          const NYCposition59 = { lat: 40.697833464223, lng: -73.946792036694 }; 
          new google.maps.Marker({ position: NYCposition59, map: map2, title: "Data Location", });
          const NYCposition60 = { lat: 40.823925670663, lng: -73.928032247651 }; 
          new google.maps.Marker({ position: NYCposition60, map: map2, title: "Data Location", });
          const NYCposition61 = { lat: 40.895889384233, lng: -73.857108901886 }; 
          new google.maps.Marker({ position: NYCposition61, map: map2, title: "Data Location", });
          const NYCposition62 = { lat: 40.869864851998, lng: -73.905984364426 }; 
          new google.maps.Marker({ position: NYCposition62, map: map2, title: "Data Location", });
          const NYCposition63 = { lat: 40.864836856224, lng: -73.906410890576 }; 
          new google.maps.Marker({ position: NYCposition63, map: map2, title: "Data Location", });
          const NYCposition64 = { lat: 40.695128378209, lng: -73.956264071896 }; 
          new google.maps.Marker({ position: NYCposition64, map: map2, title: "Data Location", });
          const NYCposition65 = { lat: 40.715809591777, lng: -73.859693316831 }; 
          new google.maps.Marker({ position: NYCposition65, map: map2, title: "Data Location", });
          const NYCposition66 = { lat: 40.686252844171, lng: -73.930608053672 }; 
          new google.maps.Marker({ position: NYCposition66, map: map2, title: "Data Location", });
          const NYCposition67 = { lat: 40.765662178703, lng: -73.918792402133 }; 
          new google.maps.Marker({ position: NYCposition67, map: map2, title: "Data Location", });
          const NYCposition68 = { lat: 40.896369668725, lng: -73.857075310987 }; 
          new google.maps.Marker({ position: NYCposition68, map: map2, title: "Data Location", });
          const NYCposition69 = { lat: 40.694103301751, lng: -73.960300016677 }; 
          new google.maps.Marker({ position: NYCposition69, map: map2, title: "Data Location", });
          const NYCposition70 = { lat: 40.666293908434, lng: -73.942473713412 }; 
          new google.maps.Marker({ position: NYCposition70, map: map2, title: "Data Location", });
          const NYCposition71 = { lat: 40.711292395087, lng: -73.772775829818 }; 
          new google.maps.Marker({ position: NYCposition71, map: map2, title: "Data Location", });
          const NYCposition72 = { lat: 40.756031457293, lng: -73.898868885199 }; 
          new google.maps.Marker({ position: NYCposition72, map: map2, title: "Data Location", });
          const NYCposition73 = { lat: 40.686247391714, lng: -73.930669356496 }; 
          new google.maps.Marker({ position: NYCposition73, map: map2, title: "Data Location", });
          const NYCposition74 = { lat: 40.664993347129, lng: -73.943404815783 }; 
          new google.maps.Marker({ position: NYCposition74, map: map2, title: "Data Location", });
          const NYCposition75 = { lat: 40.693802750612, lng: -73.949802772408 }; 
          new google.maps.Marker({ position: NYCposition75, map: map2, title: "Data Location", });
          const NYCposition76 = { lat: 40.686239192272, lng: -73.930727056462 }; 
          new google.maps.Marker({ position: NYCposition76, map: map2, title: "Data Location", });
          const NYCposition77 = { lat: 40.896410803465, lng: -73.857046284904 }; 
          new google.maps.Marker({ position: NYCposition77, map: map2, title: "Data Location", });
          const NYCposition78 = { lat: 40.694095092387, lng: -73.960372144359 }; 
          new google.maps.Marker({ position: NYCposition78, map: map2, title: "Data Location", });
          const NYCposition79 = { lat: 40.674049426422, lng: -73.945588972355 }; 
          new google.maps.Marker({ position: NYCposition79, map: map2, title: "Data Location", });
          const NYCposition80 = { lat: 40.680277025738, lng: -73.917512309928 }; 
          new google.maps.Marker({ position: NYCposition80, map: map2, title: "Data Location", });
          const NYCposition81 = { lat: 40.765468770697, lng: -73.80895409773 }; 
          new google.maps.Marker({ position: NYCposition81, map: map2, title: "Data Location", });
          const NYCposition82 = { lat: 40.677998302131, lng: -73.949720977339 }; 
          new google.maps.Marker({ position: NYCposition82, map: map2, title: "Data Location", });
          const NYCposition83 = { lat: 40.788041644448, lng: -73.788041644448 }; 
          new google.maps.Marker({ position: NYCposition83, map: map2, title: "Data Location", });
          const NYCposition84 = { lat: 40.695175042087, lng: -73.944278464054 }; 
          new google.maps.Marker({ position: NYCposition84, map: map2, title: "Data Location", });
          const NYCposition85 = { lat: 40.695037793846, lng: -73.956246100596 }; 
          new google.maps.Marker({ position: NYCposition85, map: map2, title: "Data Location", });
          const NYCposition86 = { lat: 40.850639966508, lng: -73.857017258785 }; 
          new google.maps.Marker({ position: NYCposition86, map: map2, title: "Data Location", });
          const NYCposition87 = { lat: 40.693734387165, lng: -73.95039062153 }; 
          new google.maps.Marker({ position: NYCposition87, map: map2, title: "Data Location", });
          const NYCposition88 = { lat: 40.69408688422, lng: -73.96044787816 }; 
          new google.maps.Marker({ position: NYCposition88, map: map2, title: "Data Location", });
          const NYCposition89 = { lat: 40.686225542425, lng: -73.930849664914 }; 
          new google.maps.Marker({ position: NYCposition89, map: map2, title: "Data Location", });
          const NYCposition90 = { lat: 40.896495817636, lng: 73.856988226701 }; 
          new google.maps.Marker({ position: NYCposition90, map: map2, title: "Data Location", });
          const NYCposition91 = { lat: 40.848508292316, lng: -73.890696227533 }; 
          new google.maps.Marker({ position: NYCposition91, map: map2, title: "Data Location", });
          const NYCposition92 = { lat: 40.850722251671, lng: -73.904959658295 }; 
          new google.maps.Marker({ position: NYCposition92, map: map2, title: "Data Location", });
          const NYCposition93 = { lat: 40.694045836477, lng: -73.960808516208 }; 
          new google.maps.Marker({ position: NYCposition93, map: map2, title: "Data Location", });
          const NYCposition94 = { lat: 40.686206437626, lng: -73.931029970363 }; 
          new google.maps.Marker({ position: NYCposition94, map: map2, title: "Data Location", });
          const NYCposition95 = { lat: 40.896660360963, lng: -73.856875738879 }; 
          new google.maps.Marker({ position: NYCposition95, map: map2, title: "Data Location", });
          const NYCposition96 = { lat: 40.674063264716, lng: -73.945830499488 }; 
          new google.maps.Marker({ position: NYCposition96, map: map2, title: "Data Location", });
          const NYCposition97 = { lat: 40.870288954157, lng: -73.904371145826 }; 
          new google.maps.Marker({ position: NYCposition97, map: map2, title: "Data Location", });
          const NYCposition98 = { lat: 40.682881297549, lng: -73.929035958668 }; 
          new google.maps.Marker({ position: NYCposition98, map: map2, title: "Data Location", });
          const NYCposition99 = { lat: 40.861633396591, lng: -73.924589326082 }; 
          new google.maps.Marker({ position: NYCposition99, map: map2, title: "Data Location", });
          const NYCposition100 = { lat: 40.668340916707, lng: -73.960520879964 }; 
          new google.maps.Marker({ position: NYCposition100, map: map2, title: "Data Location", });
          const NYCposition101 = { lat: 40.76570356729, lng: -73.809852321365 }; 
          new google.maps.Marker({ position: NYCposition101, map: map2, title: "Data Location", });
          const NYCposition102 = { lat: 40.746488375851, lng: -73.974022523514 }; 
          new google.maps.Marker({ position: NYCposition102, map: map2, title: "Data Location", });
          const NYCposition103 = { lat: 40.713006576531, lng: -73.907844120288 }; 
          new google.maps.Marker({ position: NYCposition103, map: map2, title: "Data Location", });
          const NYCposition104 = { lat: 40.693622273275, lng: -73.951375174187 }; 
          new google.maps.Marker({ position: NYCposition104, map: map2, title: "Data Location", });
          const NYCposition105 = { lat: 40.695446795149, lng: -73.956325167821 }; 
          new google.maps.Marker({ position: NYCposition105, map: map2, title: "Data Location", });
          const NYCposition106 = { lat: 40.866067238569, lng: -73.888761885242 }; 
          new google.maps.Marker({ position: NYCposition106, map: map2, title: "Data Location", });
          const NYCposition107 = { lat: 40.712170694671, lng: -73.995884276047 }; 
          new google.maps.Marker({ position: NYCposition107, map: map2, title: "Data Location", });
          const NYCposition108 = { lat: 40.694037626792, lng: -73.960880643764 }; 
          new google.maps.Marker({ position: NYCposition108, map: map2, title: "Data Location", });
          const NYCposition109 = { lat: 40.686206437626, lng: -73.931029970363 }; 
          new google.maps.Marker({ position: NYCposition109, map: map2, title: "Data Location", });
          const NYCposition110 = { lat: 40.756523330784, lng: -73.964229545987 }; 
          new google.maps.Marker({ position: NYCposition110, map: map2, title: "Data Location", });
          const NYCposition111 = { lat: 40.791650836236, lng: -73.938591019143 }; 
          new google.maps.Marker({ position: NYCposition111, map: map2, title: "Data Location", });
          const NYCposition112 = { lat: 40.66766056547, lng: -73.936802329972 }; 
          new google.maps.Marker({ position: NYCposition112, map: map2, title: "Data Location", });
          const NYCposition113 = { lat: 40.896742634835, lng: -73.856821303344 }; 
          new google.maps.Marker({ position: NYCposition113, map: map2, title: "Data Location", });
          const NYCposition114 = { lat: 40.870239509995, lng: -73.904324212719 }; 
          new google.maps.Marker({ position: NYCposition114, map: map2, title: "Data Location", });
          const NYCposition115 = { lat: 40.866004211296, lng: -73.888866840559 }; 
          new google.maps.Marker({ position: NYCposition115, map: map2, title: "Data Location", });
          const NYCposition116 = { lat: 40.69562796384, lng: -73.956361110906 }; 
          new google.maps.Marker({ position: NYCposition116, map: map2, title: "Data Location", });
          const NYCposition117 = { lat: 40.676315824324, lng: -73.949880878307 }; 
          new google.maps.Marker({ position: NYCposition117, map: map2, title: "Data Location", });
          const NYCposition118 = { lat: 40.839813109437, lng: -73.887996402009 }; 
          new google.maps.Marker({ position: NYCposition118, map: map2, title: "Data Location", });
          const NYCposition119 = { lat: 40.558854540979, lng: -74.174265312531 }; 
          new google.maps.Marker({ position: NYCposition119, map: map2, title: "Data Location", });
          const NYCposition120 = { lat: 40.839136275548, lng: -73.922663348364 }; 
          new google.maps.Marker({ position: NYCposition120, map: map2, title: "Data Location", });
          const NYCposition121 = { lat: 40.846412200137, lng: -73.914395886335 }; 
          new google.maps.Marker({ position: NYCposition121, map: map2, title: "Data Location", });
          const NYCposition122 = { lat: 440.678770271726, lng: -73.917690840914 }; 
          new google.maps.Marker({ position: NYCposition122, map: map2, title: "Data Location", });
          const NYCposition123 = { lat: 40.686198238002, lng: -73.931087670249 }; 
          new google.maps.Marker({ position: NYCposition123, map: map2, title: "Data Location", });
          const NYCposition124 = { lat: 40.674077104198, lng: -73.946075631774 }; 
          new google.maps.Marker({ position: NYCposition124, map: map2, title: "Data Location", });
          const NYCposition125 = { lat: 40.673205446477, lng: -73.962868452524 }; 
          new google.maps.Marker({ position: NYCposition125, map: map2, title: "Data Location", });
          const NYCposition126 = { lat: 40.662774127743, lng: -73.907452417708 }; 
          new google.maps.Marker({ position: NYCposition126, map: map2, title: "Data Location", });
          const NYCposition127 = { lat: 40.586903573642, lng: -73.98535746684 }; 
          new google.maps.Marker({ position: NYCposition127, map: map2, title: "Data Location", });
          const NYCposition128 = { lat: 40.708832160575, lng: -73.79562706106 }; 
          new google.maps.Marker({ position: NYCposition128, map: map2, title: "Data Location", });
          const NYCposition129 = { lat: 40.847319905952, lng: -73.890784935334 }; 
          new google.maps.Marker({ position: NYCposition129, map: map2, title: "Data Location", });
          
	    //  for (let i = 0; i < data.length; i++){
          //try { let x = data[i].latitude;
         //   let y = data[i].longitude;
      //       console.log(y);
      //       let pos = {lat: x, lng: y};
      //       new google.maps.Marker({ position: pos, map: map, title: "Data Location", });}
      //   catch(err) {
      //     console.log(err);
      //   }
      // }
          loadChart(data)
      
        });
    }
  )


  const loadChart = data => 
  { let monthdata2020 = Array(12).fill(0); 
    let monthdata2021 = Array(12).fill(0); 
    let monthdata2022 = Array(12).fill(0);  
    data.forEach(inspection => 
    { let year = inspection.inspection_date.slice(0, 4); 
    let month = parseInt(inspection.inspection_date.slice(5, 7)) - 1;
    if (year === "2020") { monthdata2020[month] += 1; } 
    else if (year === "2021") { monthdata2021[month] += 1; } 
    else if (year === "2022") { monthdata2022[month] += 1; }});  
    const ctx = document.getElementById('myChart');  
  
  
    new Chart(ctx, 
      { type: 'bar', data: 
      { labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'], 
      datasets: [ { 
      label: 'Inspection 2020', 
      data: monthdata2020, 
      borderWidth: 1, backgroundColor: ['rgb(255, 0, 0)'], }, 
      { label: 'Inspection 2021', 
      data: monthdata2021, 
      borderWidth: 1, 
      backgroundColor: ['rgb(0, 0, 255)'], },
       { label: 'Inspection 2022', 
      data: monthdata2022, 
      borderWidth: 1, 
      backgroundColor: ['rgb(0, 255, 0)'], } ] },
      
       options: { scales: { y: { beginAtZero: true } } } }); }

