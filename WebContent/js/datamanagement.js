function Push(){
    var message='need address';
		$.ajax({
		url: "http://[2001:da8:a0:500::1:9]:8089/dataset/",
		crossDomain: true,
	        dataType: 'jsonp',
	        type: 'GET',
	        jsonpCallback: 'callback',
	        success: function (data2) {
	            var tb = document.getElementById('dataset');
	            for(var j=1;j < tb.rows.length; j++){
	                var td = tb.rows[j].cells[0];
	                td.innerHTML = data2[j-1].datasetname;
	                var td = tb.rows[j].cells[1];
	                td.innerHTML = data2[j-1].username;
	                var td = tb.rows[j].cells[2];
	                td.innerHTML = data2[j-1].status;
	                var td = tb.rows[j].cells[3];
	                td.innerHTML = data2[j-1].category;
	                var td = tb.rows[j].cells[4];
	                td.innerHTML = data2[j-1].source;
	                var td = tb.rows[j].cells[5];
	                td.innerHTML = data2[j-1].anonymization;
	                var td = tb.rows[j].cells[6];
	                td.innerHTML = data2[j-1].releasedate;	                
	                
                      $.ajax({
                        url: "http://[2001:da8:a0:500::1:9]:8089/datacolreq/",
                        crossDomain: true,
                        dataType: 'jsonp',
                        type: 'GET',
                        jsonpCallback: 'callback',
                        success: function (data1) {
                            var tb = document.getElementById('datacolreq');
                            for(var j=1;j < tb.rows.length; j++){
                                var td = tb.rows[j].cells[0];
                                td.innerHTML = data1[j-1].username;
                                var td = tb.rows[j].cells[1];
                                td.innerHTML = data1[j-1].datasetname;
                                var td = tb.rows[j].cells[2];
                                td.innerHTML = data1[j-1].date;
                                var td = tb.rows[j].cells[3];
                                td.innerHTML = data1[j-1].time;
                                var td = tb.rows[j].cells[4];
                                td.innerHTML = data1[j-1].duration;
                                var td = tb.rows[j].cells[5];
                                td.innerHTML = data1[j-1].period;
                                var td = tb.rows[j].cells[6];
                                td.innerHTML = data1[j-1].link;
                                var td = tb.rows[j].cells[7];
                                td.innerHTML = data1[j-1].num;
                                var td = tb.rows[j].cells[8];
                                td.innerHTML = data1[j-1].srcport;
                                var td = tb.rows[j].cells[9];
                                td.innerHTML = data1[j-1].dstport;
                                var td = tb.rows[j].cells[10];
                                td.innerHTML = data1[j-1].srcip;
                                var td = tb.rows[j].cells[11];
                                td.innerHTML = data1[j-1].dstip;
                                var td = tb.rows[j].cells[12];
                                td.innerHTML = data1[j-1].pro;
                       }

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
                 })	              
	       }
	      }
	})
};

