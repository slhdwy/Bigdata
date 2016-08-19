setInterval(function(){get_netflow_stat(1, 1);},180000);

function get_netflow_stat(i, j){

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

    var chart_name;
    if (i == 1 && j == 1) {
    	chart_name = 'flows-day-chart';
    	heading_name = 'flows-day-heading';
    	period = 288;
    	unit = 'flows/s';
    }else if (i == 2 && j == 1) {
    	chart_name = 'packets-day-chart';
    	heading_name = 'packets-day-heading';
    	period = 288;
    	unit = 'packets/s';
    }else if (i == 3 && j == 1) {
    	chart_name = 'bytes-day-chart';
    	heading_name = 'bytes-day-heading';
    	period = 288;
    	unit = 'bits/s';
    }else if(i == 1 && j == 2) {
    	chart_name = 'flows-week-chart';
    	heading_name = 'flows-week-heading';
    	period = 288*7;
    	unit = 'flows/s';
    }else if (i == 2 && j == 2) {
    	chart_name = 'packets-week-chart';
    	heading_name = 'packets-week-heading';
    	period = 288*7;
    	unit = 'packets/s';
    }else if (i == 3 && j == 2) {
    	chart_name = 'bytes-week-chart';
    	heading_name = 'bytes-week-heading';
    	period = 288*7;
    	unit = 'bits/s';
    }else if(i == 1 && j == 3) {
    	chart_name = 'flows-month-chart';
    	heading_name = 'flows-month-heading';
    	period = 288*30;
    	unit = 'flows/s';
    }else if (i == 2 && j == 3) {
    	chart_name = 'packets-month-chart';
    	heading_name = 'packets-month-heading';
    	period = 288*30;
    	unit = 'packets/s';
    }else if (i == 3 && j == 3) {
    	chart_name = 'bytes-month-chart';
    	heading_name = 'bytes-month-heading';
    	period = 288*30;
    	unit = 'bits/s';
    }
    var type = i;
    var myChart = require('echarts').init(document.getElementById(chart_name));
	var heading = document.getElementById(heading_name); 
	
/*    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });
*/
    var TIME = new Array();    
    var VALUE = new Array();

	$.ajax({
	   	
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Flow_Stat/",
	   	crossDomain:true,
		dataType: 'JSONP',
	    type: 'GET',
	    jsonpCallback: 'callback',
		data : {
	        type:type,
	        period:period,
	        realtime:1
        },
	    success: function (data) {
			TIME = data.TIME
			VALUE = data.VALUE

			myChart.hideLoading();
			heading.innerHTML=data.TITLE;

			option = {
		        tooltip : {
		            trigger: 'axis'
		        },
		        calculable : true,
		        grid : {
		        		x:60,
		        		y:4,
		        		x2:10,
		        		y2:20
		        },
		        xAxis : [
		            {
		                type : 'category',
		                boundaryGap : false,
		                data : TIME
		            }
		        ],
		        yAxis : [
		            {
		            	axisLabel:{
							formatter: function(y) {
								return num2e(y);
							}
		           		},
		                type : 'value'
		            }
		        ],
		        series : [
		            {
		                name:unit,
		                type:'line',
		                stack: '总量',
		                itemStyle: {normal: {color: 'rgba(0 ,0,0 ,0)', 
		                					 lineStyle:{color: 'rgba(128 ,0,128 ,0.3)'}, 
		                					 areaStyle: {color: 'rgba(128 ,0,128 ,0.3)'}}
		                },
		                data:VALUE
		            }
		        ]
		    };
		    myChart.setOption(option);
		    if(i == 1 && j == 1)
		    	get_netflow_stat(1 ,2)
		    else if (i == 1 && j == 2) {
				get_netflow_stat(1, 3)
		    }else if (i == 1 && j == 3) {
				get_netflow_stat(2, 1)
		    }else if (i == 2 && j == 1) {
				get_netflow_stat(2, 2)
		    }else if (i == 2 && j == 2) {
				get_netflow_stat(2, 3)
		    }else if (i == 2 && j == 3) {
				get_netflow_stat(3, 1)
		    }else if (i == 3 && j == 1) {
				get_netflow_stat(3, 2)
		    }else if (i == 3 && j == 2) {
		    	get_netflow_stat(3, 3)
		    }

		}

	});
	
	var ecConfig = require('echarts/config');
	myChart.on(ecConfig.EVENT.CLICK, jump);

}

function jump(param) {

	window.location.href="dashboard.html";
}
function num2e(num){
	if(num == 0){
		return num;
	}
    var p = Math.floor(Math.log(num)/Math.LN10);
    var n = num / Math.pow(10, p);
    return n + 'x10^' + p;
}
