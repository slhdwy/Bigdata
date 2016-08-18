function get_netflow_transport(i){
	require.config({
        paths: {
                echarts: '../js'
        }
    });

    require(
        [
            'echarts',
            'echarts/chart/line',
        ]
    );

    var myChart = require('echarts').init(document.getElementById('transport-chart')); 
    var select_router = document.getElementById('select_router_transport').value;
	var select_type = document.getElementById('select_type_transport').value; 
	var select_protocol = document.getElementById('select_protocol_transport').value; 
	var select_period = document.getElementById('select_period_transport').value; 

    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });
	var PROTOCOL = new Array('ALL', 'TCP', 'UDP', 'ICMP', 'OTHER');
    var TIME = new Array();   
    var VALUE = new Array();  
    var TCP = new Array();
    var UDP = new Array(); 
    var ICMP = new Array();
    var OTHER = new Array(); 

	$.ajax({
	   	
		//url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Transport",
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Transport",
	   	crossDomain:true,
		dataType: 'JSONP',
	    type: 'GET',
	    jsonpCallback: 'callback',     
	    data : {
	        router:select_router,
	        type:select_type,
	        protocol:select_protocol,
	        period:select_period
        },           
	    success: function (data) {
	    	if (select_protocol == 0) {
				TIME = data.TIME
				TCP = data.TCP
				UDP = data.UDP
				ICMP = data.ICMP
				OTHER = data.OTHER
				
				myChart.hideLoading();

				option = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        legend: {
			            data:['TCP','UDP', 'ICMP', 'OTHER']
			        },
			        toolbox: {
			            show : false,
			            feature : {
			                mark : {show: true},
			                dataView : {show: true, readOnly: false},
			                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			                restore : {show: true},
			                saveAsImage : {show: true}
			            }
			        },
			        calculable : true,
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
			                name:'TCP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:TCP
			            },
			            {
			                name:'UDP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:UDP
			            },
			            {
			                name:'ICMP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:ICMP
			            },
			            {
			                name:'OTHER',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:OTHER
			            }
			        ]
			    };
			    myChart.setOption(option);

	    	}else{
	    		TIME = data.TIME
				VALUE = data.VALUE

				myChart.hideLoading();
				option = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        legend: {
			            data:[PROTOCOL[select_protocol]]
			        },
			        toolbox: {
			            show : false,
			            feature : {
			                mark : {show: true},
			                dataView : {show: true, readOnly: false},
			                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
			                restore : {show: true},
			                saveAsImage : {show: true}
			            }
			        },
			        calculable : true,
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
			                name:PROTOCOL[select_protocol],
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:VALUE
			            }
			        ]
			    };
			    myChart.setOption(option);
	    	}

		}
	});

	

}