setInterval(function(){Push();},1000);
var i = 0;

function Push(){
if(i%20==0)
        $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/cpu10",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var cpu = new Array();
                var TIME = [];
                
		for( x in data2){
                TIME[x] = data2[x].LastCheck;
                cpu[x] = parseInt(data2[x].PluginOutput);
                }

		


                require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/line',
                ],

                DrawEcharts2

                );
                
                function DrawEcharts2 (ec) {
                        var myChart1 = ec.init(document.getElementById('cpu-chart10'));

                        option = {
                    title : {
                        text: 'cpu历史使用情况',
                        subtext:'单位：百分比'
                    },
                    tooltip : {
                        trigger: 'axis',
                    },
                    
                    legend: {
                        data:['cpu（分钟级）'],
                    },
                    
        	    toolbox: {
                    
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
			    magicType : {show: true, type: ['line', 'bar']},
                            saveAsImage : {show: true}
                        }
                    },
                    claculable:true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
 		 	    data : TIME
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
   			    axisLabel:{
                               formatter:'{value}%'
				}
                        }
                    ],
                    series : [
          		 {
                            name:'cpu（分钟级）',
                            type:'line',
                            data:cpu,
       		            markPoint:{
				data:[
				  {type : 'max', name: '最大值'},
                                  {type : 'min', name: '最小值'}
                                 ]
         			},
                            markLine:{
 				data:[
				  {type:'average',name: '平均值'}
				 ]
				}
            
 			 }
                    ],

 		 };
                        myChart1.setOption(option);
                }
  } 
         });


if(i%20==1)
     $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/memory10",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var memory = new Array();
                var TIME = [];
                
		for( x in data2){
                TIME[x] = data2[x].LastCheck;
                var arr = data2[x].PluginOutput.split("(");
                var arr1 = arr[0].split("-");
                memory[x] = parseInt(arr1[1]);
                }

		


                require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/line',
                ],

                DrawEcharts2

                );
                
                function DrawEcharts2 (ec) {
                        var myChart1 = ec.init(document.getElementById('memory-chart10'));

                        option = {
                    title : {
                        text: 'memory历史使用情况',
                        subtext:'单位：百分比'
                    },
                    tooltip : {
                        trigger: 'axis',
                    },
                    
                    legend: {
                        data:['memory（分钟级）'],
                    },
                    
        	    toolbox: {
                    
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
			    magicType : {show: true, type: ['line', 'bar']},
                            saveAsImage : {show: true}
                        }
                    },
                    claculable:true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
 		 	    data : TIME
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
   			    axisLabel:{
                               formatter:'{value}%'
				}
                        }
                    ],
                    series : [
          		 {
                            name:'memory（分钟级）',
                            type:'line',
                            data:memory,
       		            markPoint:{
				data:[
				  {type : 'max', name: '最大值'},
                                  {type : 'min', name: '最小值'}
                                 ]
         			},
                            markLine:{
 				data:[
				  {type:'average',name: '平均值'}
				 ]
				}
            
 			 }
                    ],

 		 };
                        myChart1.setOption(option);
                }
  } 
         });

if(i%20==2)
        $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/centosdisk10",
                crossDomain:true,
                dataType: 'JSONP',
                type: 'GET',
                //method: 'GET',
                jsonpCallback: 'callback',
                success: function (data2) {
                
                var centosdisk = new Array();
                var TIME = [];
                
		for( x in data2){
                TIME[x] = data2[x].LastCheck;
                var arr = data2[x].PluginOutput.split("(");
                var arr1 = arr[1].split("i");
                centosdisk[x] = 100 - parseInt(arr1[0]);
                }

		


                require.config({
                        paths: {
                                echarts: '../js'
                        }
                });

                require(
                [
                        'echarts',
                        'echarts/chart/line',
                ],

                DrawEcharts2

                );
                
                function DrawEcharts2 (ec) {
                        var myChart1 = ec.init(document.getElementById('centosdisk-chart10'));

                        option = {
                    title : {
                        text: 'disk历史使用情况',
                        subtext:'单位：百分比'
                    },
                    tooltip : {
                        trigger: 'axis',
                    },
                    
                    legend: {
                        data:['disk（分钟级）'],
                    },
                    
        	    toolbox: {
                    
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
			    magicType : {show: true, type: ['line', 'bar']},
                            saveAsImage : {show: true}
                        }
                    },
                    claculable:true,
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
 		 	    data : TIME
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
   			    axisLabel:{
                               formatter:'{value}%'
				}
                        }
                    ],
                    series : [
          		 {
                            name:'disk（分钟级）',
                            type:'line',
                            data:centosdisk,
       		            markPoint:{
				data:[
				  {type : 'max', name: '最大值'},
                                  {type : 'min', name: '最小值'}
                                 ]
         			},
                            markLine:{
 				data:[
				  {type:'average',name: '平均值'}
				 ]
				}
            
 			 }
                    ],

 		 };
                        myChart1.setOption(option);
                }
  } 
         });


i++
};
