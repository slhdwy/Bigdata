function get_netflow_network(i){
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

    var myChart = require('echarts').init(document.getElementById('network-chart')); 
	var select_type = document.getElementById('select_type_network').value; 
	var select_period = document.getElementById('select_period_network').value; 
	var select_router = document.getElementById('select_router_network').value;
	var select_country = document.getElementById('select_country_network').value; 

    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });

    var TIME = new Array();    
    var CHINA = new Array();
    var RUSSIA = new Array(); 
    var CANADA = new Array();
    var GERMANY = new Array(); 
    var JAPAN = new Array();
    var US = new Array(); 
    var UK = new Array(); 
    var INDIA = new Array();
    var HK = new Array(); 
    var OTHERS = new Array(); 
    var VALUE = new Array();
	var COUNTRY = new Array('ALL', 'CHINA', 'RUSSIA', 'CANADA', 'GERMANY', 'JAPAN', 'US', 'UK', 'INDIA', 'HK', 'OTHER');
    
    if (select_country == 0) {
    	direction=0;
    	country=0;
    }else if (select_country == -1) {
    	direction=1;
    	country=0;
    }else{
    	direction = parseInt(select_country/10);
    	country = parseInt(select_country%10);
    }

	$.ajax({
	   	
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Network",
	   	crossDomain:true,
		dataType: 'JSONP',
	    type: 'GET',
	    jsonpCallback: 'callback', 
	    data : {
	    	router: select_router,
	    	direction: direction,
	    	country: country,
	        type: select_type,
	        period:select_period
        },         
	    success: function (data) {
	    	if (country == 0){
	    		TIME = data.TIME
				CHINA = data.CHINA
				RUSSIA = data.RUSSIA
				CANADA = data.CANADA
				GERMANY = data.GERMANY
				JAPAN = data.JAPAN
				US = data.US
				UK = data.UK
				INDIA = data.INDIA
				HK = data.HK
				OTHERS = data.OTHERS

				myChart.hideLoading();

				option = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        legend: {
			            data:['CHINA','RUSSIA','CANADA','GERMANY','JAPAN','US','UK','INDIA','HK','OTHERS']
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
			                name:'CHINA',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:CHINA
			            },
			            {
			                name:'RUSSIA',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:RUSSIA
			            },
			            {
			                name:'CANADA',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:CANADA
			            },
			            {
			                name:'GERMANY',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:GERMANY
			            },
			            {
			                name:'JAPAN',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:JAPAN
			            },
			            {
			                name:'US',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:US
			            },
			            {
			                name:'UK',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:UK
			            },
			            {
			                name:'INDIA',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:INDIA
			            },
			            {
			                name:'HK',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:HK
			            },
			            {
			                name:'OTHERS',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:OTHERS
			            }
			        ]
			    };
			    myChart.setOption(option);  
			    if(i==1)
			    	get_netflow_transport();
	    	}else{
	    		TIME = data.TIME
	    		VALUE = data.VALUE
	    		myChart.hideLoading();

	    		option = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        legend: {
			            data:COUNTRY[country]
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
			                name:COUNTRY[country],
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:VALUE
			            }
			        ]
			    };
			    myChart.setOption(option);  
			    if(i==1)
			    	get_netflow_transport();
	    	}
			
		}
	});

	

}