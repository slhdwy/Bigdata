
function XIXI (){
   $(document).ready(function() {
        $('#dataTables-example').DataTable({
                responsive: true
        });
	ajax({

                                 url: "http://[2001:da8:a0:500::1:9]:8089/LogManagement?type=4",
                                 crossDomain: true,
                                 dataType: 'jsonp',
                                 type: 'GET',
                                 jsonpCallback: 'callback',
                                 success: function (result){
                                        var len = result.length;
                                        var tbody= document.getElementsByTagName("tbody")[0];
                                        for(var i = 0;i < len;i++){
                                              $(tbody).append("<tr role='row'><td>"+result[i].date+"</td><td role='row'>"+result[i].time+"</td><td>"+result[i].host+"</td><td>"+result[i].severity+"</td><td>"+result[i].type+"</td><td>"+result[i].message+"</td></tr>");
                                        }


                                                           } //end of success
                                });//end of ajax

});
}
