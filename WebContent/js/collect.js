function collectrequest(){
   var username = document.getElementById("username").value;
//    alert(username);	
    var datasetname = document.getElementById("datasetname").value;
//    alert(datasetname);
    var srcport = document.getElementById("srcport").value;
//    alert(srcport);
    var dstport = document.getElementById("dstport").value;
//    alert(dstport);
    var srcip = document.getElementById("srcip").value;
  //  alert(srcip);
    var dstip = document.getElementById("dstip").value;
  //  alert(dstip);
    var pro = document.getElementById("pro").value;
  //  alert(pro);
    var link = document.getElementById("link").value;
  //  alert(link);
    var num = document.getElementById("num").value;
 //   alert(num);
    var date = document.getElementById("date").value;
//    alert(date);
    var time = document.getElementById("time").value;
 //   alert(time);
    var duration = document.getElementById("duration").value;
//    alert(duration);
    var period = document.getElementById("period").value;
//    alert(period);
    $.ajax({
	url: "http://[2001:da8:a0:500::1:9]:8089/collect/",
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        crossDomain:true,
       
        data : {
        	username: username,
        	datasetname: datasetname,
        	srcport:srcport,
        	dstport:dstport,
        	srcip:srcip,
        	dstip:dstip,       	
        	pro:pro,
        	link:link,
        	num:num,
        	date:date,
        	time:time,
        	duration:duration,
        	period:period
        },
        success: function (data) { 
        	alert(data.username+" "+data.datasetname+" "+data.srcport+" "+data.dstport+" "+data.srcip+" "+data.dstip+" "+data.pro+" "+data.link 
        			+ " "+ data.num+ " "+ data.date+" "+data.time+" "+data.duration+" "+data.period);
        	
        	alert(data.message);
                windows.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/collect_dataset.html";       		 	
        },
        error: function (data) {
          //  alert('Error:' + data);
            alert("Error!>>>>>>>");
        } 
    });   
}
	
