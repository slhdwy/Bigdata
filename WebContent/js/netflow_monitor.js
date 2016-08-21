setInterval(function(){get_netflow_monitor('main-heading');},180000);

function get_netflow_monitor(headingName){

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
    //0：ALL 1:TCP 2:UDP 3:ICMP 4:OHTER
    var name = document.getElementById(headingName).innerHTML;
    if (name == 'ALL'){
    	i = 0;
    }else if (name  == 'TCP') {
    	i = 1;
    }else if (name  == 'UDP') {
    	i = 2;
    }else if (name  == 'ICMP') {
    	i = 3;
    }else if (name  == 'OTHER') {
    	i = 4;
    }
	var myChart = new Array();
    myChart[0] = require('echarts').init(document.getElementById('main-chart'));
    myChart[1] = require('echarts').init(document.getElementById('first-chart'));
    myChart[2] = require('echarts').init(document.getElementById('second-chart'));
    myChart[3] = require('echarts').init(document.getElementById('third-chart'));
    myChart[4] = require('echarts').init(document.getElementById('fourth-chart'));
	var heading = new Array();
	heading[0] = document.getElementById('main-heading'); 
	heading[1] = document.getElementById('first-heading'); 
	heading[2] = document.getElementById('second-heading'); 
	heading[3] = document.getElementById('third-heading'); 
	heading[4] = document.getElementById('fourth-heading'); 

    var TIME = new Array();    
    var VALUE = new Array(5); 
    var option = new Array();
    var HEADING = new Array(5);
    var type = 1;
    var period = 288;
    for(num = 0; num < 5; num++){
		VALUE[num] = new Array();
    }

	$.ajax({
	   	
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Netflow_Monitor/",
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
			TIME = data.TIME;

			HEADING = ['ALL','TCP','UDP','ICMP','OTHER']
			for(num = 0; num < 5; num++){
				VALUE[num] = data.VALUE[(num+i)%5];
				heading[num].innerHTML = HEADING[(num+i)%5];
				heading[num].value = num;
			}

			for(num = 0; num < 5; num++){

				option[num] = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        calculable : true,
			        grid : {
			        		x:58,
			        		y:5,
			        		x2:30,
			        		y2:40
			        },
			        xAxis : [
			            {
			                type : 'category',
			                boundaryGap : false,
                            interval: 0,
			                axisLabel:{
			                	margin:5,
			                	textStyle:{fontSize:10}
			                },
			                data : TIME
			            }
			        ],
			        yAxis : [
			            {
			                type : 'log',
			                show : true,
			                axisLabel:{
			                	margin:5,
			                	textStyle:{fontSize:10},
								formatter: function(y) {
									return num2e(y);
								}
			                },
			                logLabelBase : 10
			                
			            }

			        ],
			        series : [
			            {
			                name:'ss',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {color: 'rgba(0 ,0,0 ,0)', 
			                					 lineStyle:{color: 'rgba(128 ,0,128 ,0.3)'}, 
			                					 areaStyle:{color: 'rgba(128 ,0,128 ,0.3)'}
			                					 }
			                },
			                data:VALUE[num]
			            }
			        ]
			    };

			    myChart[num].setOption(option[num]);
			}

			get_table_info(0);
		}

	});
	

}


function get_table_info(page_index){

	var tb = document.getElementById('monitor_table');
	var paging = document.getElementById('paging');
	var ROUTER = new Array();
	var FLOWS = new Array();
	var PACKETS = new Array();
	var BYTES = new Array();
	var current_page 
	$.ajax({
	   	
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Netflow_Monitor_Table/",
	   	crossDomain:true,
		dataType: 'JSONP',
	    type: 'GET',
	    jsonpCallback: 'callback',

	    success: function (data) {
			ROUTER = data.ROUTER;
			FLOWS = data.FLOWS
			PACKETS = data.PACKETS
			BYTES = data.BYTES
			var html = "<thead><tr><th>Router</th><th>Flows/s</th><th>Packets/s</th><th>Bit/s</th></tr></thead><tbody>";
			for(num = 0; num < 9; num++){
				html = html + "<tr class=\"gradeU\"><td></td><td></td><td></td><td></td></tr>"
			}
			html = html + "</tbody>"
			tb.innerHTML = html;

			for(j=1; j < 10 && j + page_index*9 < 27; j++){
                var td = tb.rows[j].cells[0];
                td.innerHTML = ROUTER[j + page_index*9 - 1];
                var td = tb.rows[j].cells[1];
                td.innerHTML = FLOWS[j + page_index*9 - 1];
                var td = tb.rows[j].cells[2];
                td.innerHTML = PACKETS[j + page_index*9 - 1];
                var td = tb.rows[j].cells[3];
                td.innerHTML = BYTES[j + page_index*9 - 1];
            }
			
            
			$("#paging").pagination(26, {
                callback: get_table_info,
                //prev_text: '< 上一页',
                //next_text: '下一页 >',
                items_per_page: 9,
                num_display_entries: 9,
                current_page: page_index
             });//end of paging 
        

		}

	});
}
function num2e(num){
	if(num == 0 || num<=100){
		return num;
	}
    var p = Math.floor(Math.log(num)/Math.LN10);
    var n = num / Math.pow(10, p);
    return n + 'x10^' + p;
}