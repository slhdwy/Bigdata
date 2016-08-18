setTimeout(function(){Push();},1000);
setInterval(function(){Push();},1000);
function Push(){
	
$.ajax({
            url: "http://[2001:da8:a0:500::1:9]:8000/RealtimeApplicationThroughput/",
            dataType: 'jsonp',
            type: 'GET',
            jsonpCallback: 'callback',
            success: function (data) {           	           	
        		
            	alert(data[1].throuput);
        	    
            }.bind(this),
            error: function (xhr, status, err) {
                alert('Error:' + err);
                alert("error");
            }.bind(this)
        });

};
