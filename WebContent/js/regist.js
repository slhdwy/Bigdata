function regist(){
	//alert("23333");
	var username=document.getElementById("username").value;	
	var password = document.getElementById("password").value;
	var password2 = document.getElementById("password2").value;
	var email = document.getElementById("email").value;
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
//  var optionsRadiosInline = document.getElementById("optionsRadiosInline1").value;	
//	var optionsRadiosInline = "option3";
//	alert(username);
//	alert(password);
//	alert(password2);
//	alert(email);
//	alert(optionsRadiosInline);
	
	$.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/regist/",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {
        	username: username,
        	password: password,
        	password2: password2,
        	email: email,
        	optionsRadiosInline: optionsRadiosInline        	
        },
        success: function (data) {
        	
        	if(data.message == 'Create user successfully!'){
        		alert("提交成功！请等待审核结果。" );
        		window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/login.html"; 
        	}       		
        	else{
        		alert(data.message);
        		window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/regist.html";
        	}
        },
        error: function (xhr, status, err) {
          //  alert('Error:' + err);
            alert("Error!>>>>>>");
        }
    });
}
	


