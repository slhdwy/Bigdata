setInterval(function(){Push();},1000);
var i = 0;

function Push(){
	
	if (i == 0 || i == 60){
		
		i == 0;
	$.ajax({
   		//url: "http://[2001:da8:a0:500::1:9]:8000/RealtimeApplicationThroughput/Minute",
		url: "http://[2001:da8:a0:500::1:9]:8089/RealtimeApplicationThroughput/Minute",
   		crossDomain:true,
		dataType: 'JSONP',
    		type: 'GET',
		//method: 'GET',
    		jsonpCallback: 'callback',          
    		success: function (data2) {           	           	        		            	
		
    		var throuput_minute = new Array();    
    		var countPacket_minute = new Array();   		
    		
                var _tcp_throuput_minute = new Array();
                var _tcp_countPacket_minute = new Array();
                var _udp_throuput_minute = new Array();
                var _udp_countPacket_minute = new Array();

                var _tcp_port1_src = new Array();
                var _tcp_port2_src = new Array();
                var _tcp_port3_src = new Array();
                var _tcp_port4_src = new Array();
                var _tcp_port5_src = new Array();

                var _tcp_port1_des = new Array();
                var _tcp_port2_des = new Array();
                var _tcp_port3_des = new Array();
                var _tcp_port4_des = new Array();
                var _tcp_port5_des = new Array();

                var _udp_port1_src = new Array();
                var _udp_port2_src = new Array();
                var _udp_port3_src = new Array();
                var _udp_port4_src = new Array();

                var _udp_port1_des = new Array();
                var _udp_port2_des = new Array();
                var _udp_port3_des = new Array();
                var _udp_port4_des = new Array();

    		var time_minute = new Array();
    		var count_minute = 0;
    		var TIME = [];
	
    		for (count_minute = 0; count_minute < 1440; count_minute ++) {
    			
    			time_minute[count_minute] = 1440 - count_minute;
    			
    		}
		
    		for (x in data2) {           	
			TIME.push(data2[x].TIME)	    		
    			throuput_minute[x] = data2[x].throuput_minute/1000;   
    			countPacket_minute[x] = data2[x].countPacket_minute;
                        _tcp_throuput_minute[x] = data2[x]._tcp_throuput_minute/1000;
                        _tcp_countPacket_minute[x] = data2[x]._tcp_countPacket_minute;
                        _udp_throuput_minute[x] = data2[x]._udp_throuput_minute/1000;
                        _udp_countPacket_minute[x] = data2[x]._udp_countPacket_minute;
                        _tcp_port1_src[x] = data2[x]._tcp_port1_src; 
                        _tcp_port2_src[x] = data2[x]._tcp_port2_src;
                        _tcp_port3_src[x] = data2[x]._tcp_port3_src;
                        _tcp_port4_src[x] = data2[x]._tcp_port4_src;                  
                        _tcp_port5_src[x] = data2[x]._tcp_port5_src;
                        _tcp_port1_des[x] = data2[x]._tcp_port1_des;
                        _tcp_port2_des[x] = data2[x]._tcp_port2_des;                  
                        _tcp_port3_des[x] = data2[x]._tcp_port3_des;
                        _tcp_port4_des[x] = data2[x]._tcp_port4_des;
                        _tcp_port5_des[x] = data2[x]._tcp_port5_des;                  
                        _udp_port1_src[x] = data2[x]._udp_port1_src;
                        _udp_port2_src[x] = data2[x]._udp_port2_src;
                        _udp_port3_src[x] = data2[x]._udp_port3_src;                  
                        _udp_port4_src[x] = data2[x]._udp_port4_src;
                        _udp_port1_des[x] = data2[x]._udp_port1_des;
                        _udp_port2_des[x] = data2[x]._udp_port2_des;                  
                        _udp_port3_des[x] = data2[x]._udp_port3_des;
                        _udp_port4_des[x] = data2[x]._udp_port4_des;		
			
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

    		function DrawEcharts2 (ec){
        	
    			DrawEchart3 (ec);
    			DrawEchart4 (ec);
                        DrawEchart5 (ec);
                        DrawEchart6 (ec);
                        DrawEchart7 (ec);
                        DrawEchart8 (ec);
        	        DrawEchart13 (ec);
                        DrawEchart14 (ec);
                        DrawEchart15 (ec);
                        DrawEchart16 (ec);
    		}
        
    		function DrawEchart3 (ec) {
    			var myChart3 = ec.init(document.getElementById('realtime-chart2')); 
            
    			option = {
            		color : ['#87cefa'],
            	    title : {
            	        text: '吞吐量统计数据（一天内）',
            	        subtext:'单位：kb/s'
            	    },
            	    tooltip : {
            	        trigger: 'axis',
            	        axisPointer:{
            	        	type:'shadow'
            	        }
            	    },
            	    legend: {
            	        data:['吞吐量（分钟级）'],
            	        y:"bottom"
            	    },
            	    toolbox: {
            	    	show : true,
            	        feature : {
            	            mark : {show: true},
            	            dataView : {show: true, readOnly: false},	                	            
            	            restore : {show: true},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    claculable:true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            //splitLine:{show:false},
			    boundaryGap : false,
           	            data : TIME
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value'
            	        }
            	    ],
            	    series : [
            	        {
            	            name:'吞吐量（分钟级）',
            	        	type:'line',
            	        	stack:'Application',
            	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
            	            data:throuput_minute 
            	            //markLine:{
            	            //	data:[{
            	            //		type:"max",
            	            //		name:"MAX"
            	            //	},{
            	            //		type:"min",
            	            //		name:"MIN"
            	            //	}]
            	            //}
            	        },  	                	                        	       
            	    ],
            	    animation:false,
            	};
    			myChart3.setOption(option); 
    		}
        
    		function DrawEchart4 (ec) {
    			var myChart4 = ec.init(document.getElementById('realtime-chart4')); 
            
    			option = {
            		color : ['#87cefa'],
            	    title : {
            	        text: '分组统计数据（一天内）',
            	        subtext:'单位：个/s'
            	    },
            	    tooltip : {
            	        trigger: 'axis',
            	        axisPointer:{
            	        	type:'shadow'
            	        }
            	    },
            	    legend: {
            	        data:['分组（分钟级）'],
            	        y:"bottom"
            	    },
            	    toolbox: {
            	    	show : true,
            	        feature : {
            	            mark : {show: true},
            	            dataView : {show: true, readOnly: false},	                	            
            	            restore : {show: true},
            	            saveAsImage : {show: true}
            	        }
            	    },
            	    claculable:true,
            	    xAxis : [
            	        {
            	            type : 'category',
            	            //splitLine:{show:false},
            	            boundaryGap : false,
                            data : TIME
            	        }
            	    ],
            	    yAxis : [
            	        {
            	            type : 'value'
            	        }
            	    ],
            	    series : [
            	        {
            	            name:'分组（分钟级）',
            	        	type:'line',
            	        	stack:'Application',
            	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
            	            data:countPacket_minute 
            	            //markLine:{
            	            //	data:[{
            	            //		type:"max",
            	            //		name:"MAX"
            	            //	},{
            	            //		type:"min",
            	            //		name:"MIN"
            	            //	}]
            	            //}
            	        },  	                	                        	       
            	    ],
            	    animation:false,
            	};
    			myChart4.setOption(option); 
    		}

                function DrawEchart5 (ec) {
                        var myChart5 = ec.init(document.getElementById('realtime-chart6'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'TCP Throughput (one day)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Throughput (minute)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Throughput (minute)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_tcp_throuput_minute 
                        },
                    ],
                    animation:false,
                };
                        myChart5.setOption(option); 
                }

                function DrawEchart6 (ec) {
                        var myChart6 = ec.init(document.getElementById('realtime-chart8'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'TCP Packet (one day)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Packet (minute)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Packet (minute)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_tcp_countPacket_minute
                        },
                    ],
                    animation:false,
                };
                        myChart6.setOption(option); 
                }

                function DrawEchart7 (ec) {
                        var myChart7 = ec.init(document.getElementById('realtime-chart10'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'UDP Throughput (one day)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['UDP Throughput (minute)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'UDP Throughput (minute)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_udp_throuput_minute
                        },
                    ],
                    animation:false,
                };
                        myChart7.setOption(option); 
                }
	    
                function DrawEchart8 (ec) {
                        var myChart8 = ec.init(document.getElementById('realtime-chart12'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'UDP Packet (one day)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['UDP Packet (minute)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'UDP Packet (minute)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_udp_countPacket_minute
                        },
                    ],
                    animation:false,
                };
                        myChart8.setOption(option); 
                }

                function DrawEchart13 (ec) {
                        var myChart13 = ec.init(document.getElementById('realtime-chart13'));

                        option = {
                    title : {
                        text: 'TCP Port Distribution (source)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Port','TCP Port','TCP Port','TCP Port','TCP Port'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port1_src
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port2_src
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port3_src
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port4_src
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                label:{normal:{show:true,position:'top'}},
                                areaStyle:{normal:{}},
                                data:_tcp_port5_src
                        },
                    ],
                    animation:false,
                };
                        myChart13.setOption(option);
                }
    
                function DrawEchart14 (ec) {
                        var myChart14 = ec.init(document.getElementById('realtime-chart14'));

                        option = {
                    title : {
                        text: 'TCP Port Distribution (destination)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Port','TCP Port','TCP Port','TCP Port','TCP Port'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port1_des
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port2_des
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port3_des
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                areaStyle:{normal:{}},
                                data:_tcp_port4_des
                        },
                        {
                            name:'TCP Port',
                                type:'line',
                                stack:'Application',
                                label:{normal:{show:true,position:'top'}},
                                areaStyle:{normal:{}},
                                data:_tcp_port5_des
                        },
                    ],
                    animation:false,
                };
                        myChart14.setOption(option);
                }

    		}//.bind(this),
    		//error: function (xhr, status, err) {
    		//    alert('Error:' + err);
    		//    alert("error");
    		//}.bind(this)
		});		
	}
	else{
		
		$.ajax({
            //url: "http://[2001:da8:a0:500::1:9]:8000/RealtimeApplicationThroughput/Second",
            url: "http://[2001:da8:a0:500::1:9]:8089/RealtimeApplicationThroughput/Second",
	    dataType: 'JSONP',
            type: 'GET',
	    //method: 'GET',
	    crossDomain:true,
            jsonpCallback: 'callback',          
            success: function (data1) {           	           	        		            	
        		
        		var throuput_second = new Array();    
        		var countPacket_second = new Array();
        		
                        var _tcp_throuput_second = new Array();
                        var _tcp_countPacket_second = new Array();
                        var _udp_throuput_second = new Array();
                        var _udp_countPacket_second = new Array();

        		var time_second = new Array();
        		var count_second = 0;
        		var TIME = [];
        		for (count_second = 0; count_second < 3600; count_second ++) {
        			
        			time_second[count_second] = 3600 - count_second;
        			
        		}
                   		
        		for (x in data1) {           	
        			TIME.push(data1[x].TIME);
        			throuput_second[x] = data1[x].throuput_second/1000;   
        			countPacket_second[x] = data1[x].countPacket_second;
        			_tcp_throuput_second[x] = data1[x]._tcp_throuput_second/1000;
                                _tcp_countPacket_second[x] = data1[x]._tcp_countPacket_second;
                                _udp_throuput_second[x] = data1[x]._udp_throuput_second/1000;
                                _udp_countPacket_second[x] = data1[x]._udp_countPacket_second;
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
	            
	            DrawEcharts1
	            
    	        );	
	
	            function DrawEcharts1 (ec){
	            	
	            	DrawEchart1 (ec);
	            	DrawEchart2 (ec);
	            	DrawEchart9 (ec);
                        DrawEchart10 (ec);
                        DrawEchart11 (ec);
                        DrawEchart12 (ec);
	            }
	            
	            function DrawEchart1 (ec) {
	                var myChart1 = ec.init(document.getElementById('realtime-chart1')); 
	                
	                option = {
	                		color : ['#87cefa'],
	                	    title : {
	                	        text: '吞吐量统计数据（一小时内）',
	                	        subtext:'单位：kb/s'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['吞吐量（秒级）'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	        show : true,
	                	        feature : {
	                	            mark : {show: true},	                	            
	                	            dataView : {show: true, readOnly: false},	                	            
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            boundaryGap : false,
                            		    data : TIME
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'吞吐量（秒级）',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:throuput_second 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  	                	                        	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart1.setOption(option); 
	            }
	            
	            function DrawEchart2 (ec) {
	                var myChart2 = ec.init(document.getElementById('realtime-chart3')); 
	                
	                option = {
	                		color : ['#87cefa'],
	                	    title : {
	                	        text: '分组统计数据（一小时内）',
	                	        subtext:'单位：个/s'
	                	    },
	                	    tooltip : {
	                	        trigger: 'axis',
	                	        axisPointer:{
	                	        	type:'shadow'
	                	        }
	                	    },
	                	    legend: {
	                	        data:['分组（秒级）'],
	                	        y:"bottom"
	                	    },
	                	    toolbox: {
	                	    	show : true,
	                	        feature : {
	                	            mark : {show: true},
	                	            dataView : {show: true, readOnly: false},	                	            
	                	            restore : {show: true},
	                	            saveAsImage : {show: true}
	                	        }
	                	    },
	                	    claculable:true,
	                	    xAxis : [
	                	        {
	                	            type : 'category',
	                	            //splitLine:{show:false},
	                	            boundaryGap : false,
                            		    data : TIME
	                	        }
	                	    ],
	                	    yAxis : [
	                	        {
	                	            type : 'value'
	                	        }
	                	    ],
	                	    series : [
	                	        {
	                	            name:'分组（秒级）',
	                	        	type:'line',
	                	        	stack:'Application',
	                	        	itemStyle:{normal:{areaStyle:{type:'default'}}},
	                	            data:countPacket_second 
	                	            //markLine:{
	                	            //	data:[{
	                	            //		type:"max",
	                	            //		name:"MAX"
	                	            //	},{
	                	            //		type:"min",
	                	            //		name:"MIN"
	                	            //	}]
	                	            //}
	                	        },  	                	                        	       
	                	    ],
	                	    animation:false,
	                	};
	                myChart2.setOption(option); 
	            }
        	    
                    function DrawEchart9 (ec) {
                        var myChart9 = ec.init(document.getElementById('realtime-chart5'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'TCP Throughput (one hour)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Throughput (second)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Throughput (second)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_tcp_throuput_second
                        },
                    ],
                    animation:false,
                };
                        myChart9.setOption(option);
                }

                function DrawEchart10 (ec) {
                        var myChart10 = ec.init(document.getElementById('realtime-chart7'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'TCP Packet (one hour)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['TCP Packet (second)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'TCP Packet (second)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_tcp_countPacket_second
                        },
                    ],
                    animation:false,
                };
                        myChart10.setOption(option);
                }

                function DrawEchart11 (ec) {
                        var myChart11 = ec.init(document.getElementById('realtime-chart9'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'UDP Throughput (one hour)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['UDP Throughput (second)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'UDP Throughput (second)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_udp_throuput_second
                        },
                    ],
                    animation:false,
                };
                        myChart11.setOption(option);
                }

                function DrawEchart12 (ec) {
                        var myChart12 = ec.init(document.getElementById('realtime-chart11'));

                        option = {
                        color : ['#87cefa'],
                    title : {
                        text: 'UDP Packet (one hour)'
                    },
                    tooltip : {
                        trigger: 'axis',
                        axisPointer:{
                                type:'shadow'
                        }
                    },
                    legend: {
                        data:['UDP Packet (second)'],
                        y:"bottom"
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            restore : {show: true},
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
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'UDP Packet (second)',
                                type:'line',
                                stack:'Application',
                                itemStyle:{normal:{areaStyle:{type:'default'}}},
                                data:_udp_countPacket_second
                        },
                    ],
                    animation:false,
                };
                        myChart12.setOption(option);
                }

            }//.bind(this),
            //error: function (xhr, status, err) {
            //    alert('Error:' + err);
            //    alert("error");
            //}.bind(this)
        });
	}    
	
	i ++;
};
