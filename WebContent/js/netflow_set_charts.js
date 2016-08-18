function set_chart(){


	require.config({
        paths: {
                echarts: '../js'
        }
    });

    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/pie',
            'echarts/chart/line',
        ]
    );

    var myChart = require('echarts').init(document.getElementById('TopN')); 

	option = {
		title : {
			//text: '某站点用户访问来源',
			//subtext: '纯属虚构',
			//x:'center'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'horizontal',
			left: 'left',
			data: ['80','8080','53'/*,'443','23','20','161','110'*/]
		},

		series : [
			{
				name: 'Port',
				type: 'pie',
				radius : '55%',
				center: ['50%', '60%'],
	 			data:[
   					{value:50, name:'80'},
    				{value:2, name:'8080'},
    				{value:3, name:'53'},
   					//{value:33, name:'443'},
    				//{value:3, name:'23'},
   					//{value:10, name:'20'},
    				//{value:20, name:'161'},
    				//{value:15, name:'110'},
				]
				
			}
		]//end of series
	};

	myChart.setOption(option);

}
