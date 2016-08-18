setInterval(function(){get_netflow_application(1);},180000);

function get_netflow_application(i){

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

    var myChart = require('echarts').init(document.getElementById('application-chart')); 
    var select_router = document.getElementById('select_router_application').value;
	var select_type = document.getElementById('select_type_application').value; 
	var select_protocol = document.getElementById('select_protocol_application').value; 
	var select_period = document.getElementById('select_period_application').value; 

    myChart.showLoading({
        text: '正在努力的读取数据中...',    //loading话术
    });
    var PROTOCOL = new Array('ALL', 'HTTP', 'DNS', 'SNMP', 'TELNET', 'HTTPS', 'POP3', 'SMTP', 'FTP', 'TFTP', 'OTHER');
    var TIME = new Array();  
    var VALUE = new Array();  
    var HTTP = new Array();
    var DNS = new Array(); 
    var SNMP = new Array();
    var TELNET = new Array(); 
    var HTTPS = new Array();
    var POP3 = new Array(); 
    var SMTP = new Array(); 
    var FTP = new Array();
    var TFTP = new Array(); 
    var IMAP = new Array(); 

	$.ajax({
	   	
		url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Application",
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
	    	if(select_protocol == 0){
	    		
	    		TIME = data.TIME
				HTTP = data.HTTP
				DNS = data.DNS
				SNMP = data.SNMP
				POP3 = data.POP3
				TELNET = data.TELNET
				HTTPS = data.HTTPS
				SMTP = data.SMTP
				FTP = data.FTP
				TFTP = data.TFTP
				IMAP = data.IMAP
				
				myChart.hideLoading();

				option = {
			        tooltip : {
			            trigger: 'axis'
			        },
			        legend: {
			            data:['HTTP','DNS','SNMP','POP3','TELNET','HTTPS','SMTP','FTP','TFTP','OTHER']
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
			                name:'HTTP',
			                type:'line',
			                stack: '总量',
			                
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:HTTP
			            },
			            {
			                name:'DNS',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:DNS
			            },
			            {
			                name:'SNMP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:SNMP
			            },
			            {
			                name:'POP3',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:POP3
			            },
			            {
			                name:'TELNET',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:TELNET
			            },
			            {
			                name:'HTTPS',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:HTTPS
			            },
			            {
			                name:'SMTP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:SMTP
			            },
			            {
			                name:'FTP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:FTP
			            },
			            {
			                name:'TFTP',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:TFTP
			            },
			            {
			                name:'OTHER',
			                type:'line',
			                stack: '总量',
			                itemStyle: {normal: {areaStyle: {type: 'default'}}},
			                data:IMAP
			            }
			        ]
			    };
			    myChart.setOption(option);
			    if(i == 1)
			    	get_netflow_network(1)
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
			    if(i == 1)
			    	get_netflow_network(1)
	    	}

		}

	});

	/*$("#datetimepicker_application").datetimepicker({ 
　　minView: "month", //选择日期后，不会再跳转去选择时分秒 
　　format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式 
　　language: 'zh-CN', //汉化 
　　autoclose:true //选择日期后自动关闭 
});*/

}
