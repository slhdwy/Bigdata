function deleteds(row){
	
	//alert('aaa');
	alert(row);
	 
	$.ajax({
	//	url: "http://[2001:da8:a0:500::1:9]:8089/collect/",
        url: "http://127.0.0.1:8000/deleteds/",
        dataType: 'jsonp',
        type: 'POST',
        jsonpCallback: 'callback',
        data : {        	        	
        	row:row
        },
        
        success: function (data) { 
        	//alter(data.datasetid);
        	
        	alert(data.message);       		 	
        },
        error: function (data) {
          //  alert('Error:' + data);
            alert("Deleteds Error!>>>>>>>");
        }
    });   
}

	


