function mypage(){	
    var message='need address';
    
    $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/index2/",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'POST', 
        jsonpCallback: 'callback',
        data : {
        	message: message,
        },
        success: function (data) {
        	if(data.message == 'jump index success!'){
        		var title = document.getElementById('title-wrapper');
	            title.innerHTML = "网络流量共享平台 欢迎您， " + "<font size='4px' color='blue' >"+ data.username+ "</font>" ;
        		var tb = document.getElementById('mydataset');
	            var td = tb.rows[1].cells[6];
	            td.innerHTML = "<a href=\"http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/dataset_detail.html\">"+data.address+"</a>";	            
        	}
        	else{
        		window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/login.html";
        	}
            
        },
        error: function (data) {
            alert("Error!>>>>>>>");
        }
    });
}