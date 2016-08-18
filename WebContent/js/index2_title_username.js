function titleusername(){	
    var message='need address';

    $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/index2/",
        crossDomain: true,
        dataType: 'jsonp',
        async:false,
        type: 'POST', 
        jsonpCallback: 'callback',
        data : {
        	message: message,
        },
        success: function (data) {
        	if(data.message == 'jump index success!'){
	            var title = document.getElementById('title-wrapper');
	            title.innerHTML = "网络流量共享平台 欢迎您， " + "<font size='4px' color='blue' >"+ data.username+ "</font>" ;
        	}
        },
        error: function (data) {
            //alert('Error:' + data);
            alert("Error!>>>>>>>");
        }
    });
}