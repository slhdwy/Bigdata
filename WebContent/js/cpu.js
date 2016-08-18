setInterval(function(){Push();},3000);
var i = 0;

function Push(){

        $.ajax({
                url: "http://[2001:da8:a0:500::1:9]:8089/cpu7",
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
                        var myChart1 = ec.init(document.getElementById('cpu-chart7'));

                        option = {
                    title : {
                        text: 'cpu使用情况（一天内）',
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


};
