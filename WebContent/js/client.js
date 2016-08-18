setInterval(function(){Push();},500); //物理机监控主页
var i = 0;

function Push(){

if(i%40==0)
      $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/cpu",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var cpu = 0;
                
		for( x in data2){
                cpu = cpu + parseFloat(data2[x].PluginOutput);
                }

                cpu = parseInt(cpu/4);
	        require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/gauge',
                ],

                DrawEcharts2

                );
	      
                function DrawEcharts2 (ec) { 
                var myChart1 = ec.init(document.getElementById('cpu-chart'));

                        
                  option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    
        	    toolbox: {
                    
                        feature : {
				restore: {},
				saveAsImage: {}
                        }
                    },
                    
		    series : [
          		 {
                            name:'集群cpu使用情况',
                            type:'gauge',
			    detail: {formatter:'{value}%'},
			    data: [{value: cpu, name: 'cpu使用情况'}]
				 
				
            
 			 }
                    ]

 		 };
                        myChart1.setOption(option);
                 }

}
         });

if(i%40==1)

          $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/memory",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var memory = 0;
                
		for( x in data2){
                var arr = data2[x].PluginOutput.split("(");
                var arr1 = arr[0].split("-");
		memory = memory + parseInt(arr1[1]);
                }

                memory = parseInt(memory/4);

	        require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/gauge',
                ],

                DrawEcharts2

                );
	      
                function DrawEcharts2 (ec) { 
                var myChart1 = ec.init(document.getElementById('memory-chart'));

                        
                  option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    
        	    toolbox: {
                    
                        feature : {
				restore: {},
				saveAsImage: {}
                        }
                    },
                    
		    series : [
          		 {
                            name:'集群memory使用情况',
                            type:'gauge',
			    detail: {formatter:'{value}%'},
			    data: [{value: memory, name: 'memory使用情况'}]
				 
				
            
 			 }
                    ]

 		 };
                        myChart1.setOption(option);
                 }

}
         });


if(i%40==2)
      $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/centosdisk",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var centosdisk = 0;
                
		for( x in data2){
                var arr = data2[x].PluginOutput.split("(");
                var arr1 = arr[1].split("i");
		centosdisk = centosdisk + parseInt(arr1[0]);
                }
                
                centosdisk = parseInt(centosdisk/4);
                centosdisk = 100 - centosdisk;
	        require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/gauge',
                ],

                DrawEcharts2

                );
	      
                function DrawEcharts2 (ec) { 
                var myChart1 = ec.init(document.getElementById('centosdisk-chart'));

                        
                  option = {
                    tooltip : {
                        formatter: "{a} <br/>{b} : {c}%"
                    },
                    
        	    toolbox: {
                    
                        feature : {
				restore: {},
				saveAsImage: {}
                        }
                    },
                    
		    series : [
          		 {
                            name:'集群cpu使用情况',
                            type:'gauge',
			    detail: {formatter:'{value}%'},
			    data: [{value: centosdisk, name: 'disk使用情况'}]
				 
				
            
 			 }
                    ]

 		 };
                        myChart1.setOption(option);
                 }

}
         });



if(i%10==3)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview10",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {
        var tb = document.getElementById('client10');

        var ta = document.getElementById('client');


        var td = ta.rows[4].cells[1];
        td.innerHTML = data2[1].PluginOutput;

        var td = ta.rows[4].cells[2];
        var arr = data2[5].PluginOutput.split("u");
        var arr1 = arr[0].split("-");
        td.innerHTML = arr1[1];


        var td = ta.rows[4].cells[3];
        var arr = data2[0].PluginOutput.split("M");
	var arr1 = arr[0].split("/");
	var arr2 = 51175 - parseInt(arr1[1]);
        var arr = data2[0].PluginOutput.split("(");
	var arr3 = arr[1].split("%");
	var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        var td = ta.rows[4].cells[4];
        var arr = data2[2].PluginOutput.split(":");
        td.innerHTML = arr[1];


        var td = ta.rows[4].cells[5];
        td.innerHTML = data2[10].PluginOutput.replace(/[^0-9]/ig,"");

	var td = ta.rows[4].cells[6];
        var arr = data2[13].PluginOutput.split("M");
        var arr1 = arr[0].split("me");
        var arr2 = 14258005- parseInt(arr1[1]);
        var arr = data2[13].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        for(var j=1;j < tb.rows.length; j++){
            if( j==7||j==9 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j+3].PluginOutput.replace(/[^0-9]/ig,"");
            }

            else if( j==1 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split("(");
            var arr1 = arr[0].split("/");
            var arr2 = arr[1].split("i");
            td.innerHTML = arr2[0] + "(" + arr1[1] + ")";
            }

            else if( j==3 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else if( j==4 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("u");
            var arr1 = arr[0].split("-");
            td.innerHTML = arr1[1];
            }

            else if( j==5 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("-");
            td.innerHTML = arr[1];
            }

            else if( j==6 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split("f");
            var arr1 = arr[0].split("-");
            var arr2 = data2[j+3].PluginOutput.split("(");
            var arr3 = arr2[1].split("o");
            td.innerHTML = arr1[1] + "(" + arr3[0]+ ")";
            }

            else if( j==8 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else{
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j-1].PluginOutput;
            }

  }
  }
})
if(i%10==4)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview9",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {
        var tb = document.getElementById('client9');
        
        var ta = document.getElementById('client');


        var td = ta.rows[3].cells[1];
        td.innerHTML = data2[1].PluginOutput;

        var td = ta.rows[3].cells[2];
        var arr = data2[5].PluginOutput.split("u");
        var arr1 = arr[0].split("-");
        td.innerHTML = arr1[1];


        var td = ta.rows[3].cells[3];
	var arr = data2[0].PluginOutput.split("M");
        var arr1 = arr[0].split("/");
        var arr2 = 51175 - parseInt(arr1[1]);
        var arr = data2[0].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";
 
        var td = ta.rows[3].cells[4];
        var arr = data2[2].PluginOutput.split(":");
        td.innerHTML = arr[1];


        var td = ta.rows[3].cells[5];
        td.innerHTML = data2[10].PluginOutput.replace(/[^0-9]/ig,"");

	var td = ta.rows[3].cells[6];
        var arr = data2[13].PluginOutput.split("M");
        var arr1 = arr[0].split("me");
        var arr2 = 14258005- parseInt(arr1[1]);
        var arr = data2[13].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        for(var j=1;j < tb.rows.length; j++){
            if( j==7||j==9 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j+3].PluginOutput.replace(/[^0-9]/ig,"");
            }

            else if( j==1 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split("(");
            var arr1 = arr[0].split("/");
            var arr2 = arr[1].split("i");
            td.innerHTML = arr2[0] + "(" + arr1[1] + ")";
            }

            else if( j==3 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else if( j==4 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("u");
            var arr1 = arr[0].split("-");
            td.innerHTML = arr1[1];
            }
            
            else if( j==5 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("-");
            td.innerHTML = arr[1];
            }

            else if( j==6 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split("f");
            var arr1 = arr[0].split("-");
            var arr2 = data2[j+3].PluginOutput.split("(");
            var arr3 = arr2[1].split("o");
            td.innerHTML = arr1[1] + "(" + arr3[0]+ ")";
            }

            else if( j==8 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else{
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j-1].PluginOutput;
            }


   }
  }
})

if(i%10==5)
$.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview8",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {
        var tb = document.getElementById('client8');
        var ta = document.getElementById('client');


        var td = ta.rows[2].cells[1];
        td.innerHTML = data2[1].PluginOutput;

        var td = ta.rows[2].cells[2];
        var arr = data2[5].PluginOutput.split("u");
        var arr1 = arr[0].split("-");
        td.innerHTML = arr1[1];


        var td = ta.rows[2].cells[3];
	var arr = data2[0].PluginOutput.split("M");
        var arr1 = arr[0].split("/");
        var arr2 = 51175 - parseInt(arr1[1]);
        var arr = data2[0].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        var td = ta.rows[2].cells[4];
        var arr = data2[2].PluginOutput.split(":");
        td.innerHTML = arr[1];


        var td = ta.rows[2].cells[5];
        td.innerHTML = data2[10].PluginOutput.replace(/[^0-9]/ig,"");

	var td = ta.rows[2].cells[6];
        var arr = data2[13].PluginOutput.split("M");
        var arr1 = arr[0].split("me");
        var arr2 = 14258005- parseInt(arr1[1]);
        var arr = data2[13].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        for(var j=1;j < tb.rows.length; j++){
            if( j==7||j==9 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j+3].PluginOutput.replace(/[^0-9]/ig,"");
            }

            else if( j==1 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split("(");
            var arr1 = arr[0].split("/");
            var arr2 = arr[1].split("i");
            td.innerHTML = arr2[0] + "(" + arr1[1] + ")";
            }

            else if( j==3 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else if( j==4 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("u");
            var arr1 = arr[0].split("-");
            td.innerHTML = arr1[1];
            }
            
            else if( j==5 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("-");
            td.innerHTML = arr[1];
            }

            else if( j==6 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split("f");
            var arr1 = arr[0].split("-");
            var arr2 = data2[j+3].PluginOutput.split("(");
            var arr3 = arr2[1].split("o");
            td.innerHTML = arr1[1] + "(" + arr3[0]+ ")";
            }

            else if( j==8 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }

            else{
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j-1].PluginOutput;
            }


   }
  }
})

if(i%10==6)
$.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview7",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {
        var tb = document.getElementById('client7');
	var ta = document.getElementById('client');


	var td = ta.rows[1].cells[1];
        td.innerHTML = data2[1].PluginOutput;

	var td = ta.rows[1].cells[2];
        var arr = data2[5].PluginOutput.split("u");
        var arr1 = arr[0].split("-");
        td.innerHTML = arr1[1];


	var td = ta.rows[1].cells[3];
	var arr = data2[0].PluginOutput.split("M");
        var arr1 = arr[0].split("/");
        var arr2 = 51175 - parseInt(arr1[1]);
        var arr = data2[0].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        var td = ta.rows[1].cells[4];
        var arr = data2[2].PluginOutput.split(":");
        td.innerHTML = arr[1];
	
	
	var td = ta.rows[1].cells[5];	
        td.innerHTML = data2[10].PluginOutput.replace(/[^0-9]/ig,"");

	var td = ta.rows[1].cells[6];
        var arr = data2[13].PluginOutput.split("M");
        var arr1 = arr[0].split("me");
        var arr2 = 14258005- parseInt(arr1[1]);
        var arr = data2[13].PluginOutput.split("(");
        var arr3 = arr[1].split("%");
        var arr4 = 100 - parseInt(arr3[0]);
        td.innerHTML = arr4 + "%(" + arr2 + "MB)";

        for(var j=1;j < tb.rows.length; j++){
            
            if( j==7||j==9 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j+3].PluginOutput.replace(/[^0-9]/ig,"");
            }
            
            else if( j==1 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split("(");
            var arr1 = arr[0].split("/");
            var arr2 = arr[1].split("i");
            td.innerHTML = arr2[0] + "(" + arr1[1] + ")";
            }
            
            else if( j==3 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j-1].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }
            
            else if( j==4 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("u");
            var arr1 = arr[0].split("-");
            td.innerHTML = arr1[1];
            }
            
            else if( j==5 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+1].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+1].PluginOutput.split("-");
            td.innerHTML = arr[1];
            }
            
            else if( j==6 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split("f");
            var arr1 = arr[0].split("-");
            var arr2 = data2[j+3].PluginOutput.split("(");
            var arr3 = arr2[1].split("o");
            td.innerHTML = arr1[1] + "(" + arr3[0]+ ")";
            }
            
            else if( j==8 ){
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j+3].ServiceName;
            var td = tb.rows[j].cells[1];
            var arr = data2[j+3].PluginOutput.split(":");
            td.innerHTML = arr[1];
            }  

            else{
            var td = tb.rows[j].cells[0];
            td.innerHTML = data2[j-1].ServiceName;
            var td = tb.rows[j].cells[1];
            td.innerHTML = data2[j-1].PluginOutput;
            }

   }
  }
})

        
i++
};

