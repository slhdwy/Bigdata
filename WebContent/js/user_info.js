function user_info(){	
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
        		var role = '';
        		if(data.role == 'option1')
        			role = 'Operator';
        		else{
        			if(data.role == 'option2')
        				role = 'Administrator';
        			else{
        				if(data.role == 'option3')
        					role = 'Researcher';
        				else
        					role = ''; 
        			}        				
        		}
        		var title = document.getElementById('title-wrapper');
	            title.innerHTML = "网络流量共享平台 欢迎您， " + "<font size='4px' color='blue' >"+ data.username+ "</font>" ;
	            var tb = document.getElementById('mydataset');  	             
	            var td = tb.rows[1].cells[0];
	            td.innerHTML = data.username;
	            var td = tb.rows[1].cells[1];
	            td.innerHTML = role;
        	}
        	else{
        		window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/index2.html";
        	}        	
        },
        error: function (data) {
            //alert('Error:' + data);
            alert("Error!>>>>>>>");
        }
    });
}