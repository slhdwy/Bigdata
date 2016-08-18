function login(){
	
	 
    var username=document.getElementById("username").value;
 // alert(username);
   	var password = document.getElementById("password").value;
 // alert(password);  
  
    var optionsRadiosInline;
    if(document.getElementById("optionsRadiosInline1").checked){
    	optionsRadiosInline=document.getElementById("optionsRadiosInline1").value
    }
    else{
    	if(document.getElementById("optionsRadiosInline2").checked){
    		optionsRadiosInline=document.getElementById("optionsRadiosInline2").value
    	}
    	else{
    		optionsRadiosInline=document.getElementById("optionsRadiosInline3").value
    	}
    }
//   = document.getElementById("optionsRadiosInline").value;
//    alert(optionsRadiosInline);
//  "optional1";
//	var role = document.getElementById("optionsRadiosInline1").value;
	

//	alert(username);
//	alert(password);
//	alert(optionsRadiosInline);
//	alert('yyyy');
	
	$.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/login/",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,
        	password: password,
        	optionsRadiosInline: optionsRadiosInline        	
        },
        success: function (data) {
        	//alert("info received:" + data.message + data.username + data.role);
            //alert("success!");
        	if(data.message ==  'Check not pass!'){        		
        	    alert("您还未通过管理员审核，暂不能登录!");
        	    window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/login.html";
        	  }
        	
        	else if(data.message == 'Login success!'){
        		//alert("Info received:" + data.message);
        		if(data.role == 'operator')
        			window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/netflow_dashboard.html";
        		else{
        			if(data.role == 'Administrator')
        				window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/index3.html";
        			else{
        				if(data.role == 'Researcher')
        					window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/index2.html";
        				else
        					window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/login.html"; 
        			}        				
        		}        		      		        		
        	}        		
        	else{
        		//alert("Info received:" + data.message);
            	alert("您的审核未被通过或还未注册，请先注册！");
        		window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/regist.html";
        	}
        		        	        	
        },
        error: function (data) {
            //alert('Error:' + data);
            alert("Error!>>>>>>>");
        }
    });   
}
	


