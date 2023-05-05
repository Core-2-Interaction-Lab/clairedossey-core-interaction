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
    response.json().then(function(data) {

          const NYCposition = { lat: 40.7831, lng: -73.9712 };


          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14.5,
            center: NYCposition,
            mapId: '5a318806032bcd4d'
          })

	

          loadChart(data)
       
        });
    }
  )


  const loadChart = data => {
    data.forEach(inspection => {
      if (inspection.inspection_date.slice(0, 4)=="2021"){
        let month= (inspection.inspection_date.slice(5, 7))
        if (month=="01"){monthdata[0]+=1}
        if (month=="02"){monthdata[1]+=1}
        if (month=="03"){monthdata[2]+=1}
        if (month=="04"){monthdata[3]+=1}
        if (month=="05"){monthdata[4]+=1}
        if (month=="06"){monthdata[5]+=1}
        if (month=="07"){monthdata[6]+=1}
        if (month=="08"){monthdata[7]+=1}
        if (month=="09"){monthdata[8]+=1}
        if (month=="10"){monthdata[9]+=1}
        if (month=="11"){monthdata[10]+=1}
        if (month=="12"){monthdata[11]+=1}
      }
      
      console.log (monthdata)
    });

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'],
        datasets: [{
          label: 'Inspection',
          data: monthdata,
          borderWidth: 1,
				backgroundColor: ['rgb(255, 0, 0)'],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


