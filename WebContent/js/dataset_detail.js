
function showdetail(r,c){
	
	
//	alert('aaa!');
//	alert(r);
//	alert(c);
    var x=document.getElementById('dataset').rows[r].cells[c].innerHTML;
  
//  alert(x);
    
	if(x == 'oneday_2016')
	    window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/oneday.html";
	else{
		if(x == 'oneweek_2016')
		   window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/oneweek.html";
		else{
			if(x == 'onemonth_2016')
			   window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/onemonth.html";
			else{
				if(x == 'oneyear_2016')
				   window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/oneyear.html";
				else
				window.location.href="http://[2001:da8:a0:500::1:9]:8080/BigDataPlatform-master/WebContent/pages/dataset_page.html";
			}
		}
	}       	
}
	



