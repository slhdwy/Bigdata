function user_manage(){	
    $.ajax({
		url: "http://[2001:da8:a0:500::1:9]:8089/usermanage/",
		crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data) {
            var tb = document.getElementById('dataset');
            var role = '';
            var num = data[0].num;
            for(var i =0 ;i < num;i++){
            	if(data[i].role == 'option1')
        			role = '运行人员';
        		else{
        			if(data[i].role == 'option2')
        				role = '管理人员';
        			else{
        				if(data[i].role == 'option3')
        					role = '研究人员';
        				else
        					role = 'Unknown';
        			}        				
        		}
                $(tb).append("<tr><td>"+data[i].username+"</td><td>"+role+"</td><td>"+data[i].email+"</td><td>"+"<p>"+"<a type=\"button\"  class=\"btn btn-success\" onClick=\"userpass(this)\">通过</a>"+"<a type=\"button\"  class=\"btn btn-warning\" onClick=\"usernopass(this)\">未通过</a>"+"</p>"+"</td></tr>");
            }

            
            $.ajax({
        		url: "http://[2001:da8:a0:500::1:9]:8089/userpassed/",
        		crossDomain: true,
                dataType: 'jsonp',
                type: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                    var tb = document.getElementById('userpassed');
                    var role = '';
                    var num = data2[0].num;
                    for(var i =0 ;i < num;i++){
                    	if(data2[i].role == 'option1')
                			role = '运行人员';
                		else{
                			if(data2[i].role == 'option2')
                				role = '管理人员';
                			else{
                				if(data2[i].role == 'option3')
                					role = '研究人员';
                				else
                					role = 'Unknown';
                			}        				
                		}
                        $(tb).append("<tr><td>"+data2[i].username+"</td><td>"+role+"</td><td>"+data2[i].email+"</td><td>"+"<a type=\"button\"  class=\"btn btn-danger\" onClick=\"user_delete(this)\">删除</a>"+"</td></tr>");
                    }
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
                        success: function (data1) {
                        	if(data1.message == 'jump index success!'){
                	            var title = document.getElementById('title-wrapper');
                	            title.innerHTML = "网络流量共享平台 欢迎您， " + "<font size='4px' color='blue' >"+ data1.username+ "</font>" ;
                        	}
                        },
                        error: function (data1) {
                            //alert('Error:' + data);
                            alert("Error!>>>>>>>");
                        }
                    });  
              }
            });
      }
    });
}

function user_delete(btn){
    var tr = btn.parentElement.parentElement;
    var td = tr.cells[0];
    var username = td.innerHTML;
    
    $.ajax({
		url: "http://[2001:da8:a0:500::1:9]:8089/usernopass/",
		crossDomain: true,
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,        	
        },
        success: function (data) {
        	if(data.message ==  'user delete success!'){        		
        	    alert("用户" + username + "已被删除！");      	    
        	  }
        	else
        		alert("用户" + username + "删除未成功，请重试！");
      },
      
      error: function (data) {
            alert("Error!>>>>>>>");
        }
    });
}

function userpass(btn){	 
    var tr = btn.parentElement.parentElement.parentElement;
    var td = tr.cells[0];
    var username = td.innerHTML;
    
    $.ajax({
		url: "http://[2001:da8:a0:500::1:9]:8089/userpass/",
		crossDomain: true,
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,        	
        },
        success: function (data) {
        	if(data.message ==  'user update success!'){        		
        	    alert("用户" + username + "已审核通过！");
        	    //td1 = tr.cells[3];
        	    //td1.innerHTML = "";        	    
        	  }
        	else
        		alert("用户" + username + "审核未成功，请重试！");
      },
      
      error: function (data) {
            alert("Error!>>>>>>>");
        }
    });
}

function usernopass(btn){	 
    var tr = btn.parentElement.parentElement.parentElement;
    var td = tr.cells[0];
    var username = td.innerHTML;
    
    $.ajax({
		url: "http://[2001:da8:a0:500::1:9]:8089/usernopass/",
		crossDomain: true,
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,        	
        },
        success: function (data) {
        	if(data.message ==  'user delete success!'){        		
        	    alert("用户" + username + "审核未通过，已将该用户清除！");
        	    //td1 = tr.cells[3];
        	    //td1.innerHTML = "";        	    
        	  }
        	else
        		alert("用户" + username + "清除未成功，请重试！");
      },
      
      error: function (data) {
            alert("Error!>>>>>>>");
        }
    });
}
