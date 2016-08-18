function netflow_query(){
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

    var value_router = document.getElementById('Router').value;
    var value_order = document.getElementById('OrderBy').value;
    var value_protocol = document.getElementById('Protocol').value;
    var value_TopN = document.getElementById('TopN').value;
    var value_starttime = Date.parse(new Date(document.getElementById('StartTime').value))/1000;
    var value_endtime = Date.parse(new Date(document.getElementById('EndTime').value))/1000;
    var value_src_ip = document.getElementById('SrcIP').value;
    var value_src_port = document.getElementById('SrcPort').value;
    var value_dst_ip = document.getElementById('DstIP').value;
    var value_dst_port = document.getElementById('DstPort').value;

	var tb = document.getElementById('query_results');
    var SRC_IP = new Array();
	var SRC_PORT = new Array();
	var DST_IP = new Array();
	var DST_PORT = new Array();
	var PROTOCOL = new Array();
	var FLOWS = new Array();
	var PACKETS = new Array();
	var BYTES = new Array();

    if (value_src_port == '') {
        value_src_port = '-1';
    }
    if (value_dst_port == '') {
        value_dst_port = '-1';
    }

    alert(""+value_router+" " +value_order+" "+value_protocol+" "
        +value_TopN+" "+value_starttime+" "+value_endtime+" "+value_src_ip+" "+value_src_port);


    $.ajax({
        
        url: "http://[2001:da8:a0:500::1:9]:8089/Netflow/Query/",
        crossDomain:true,
        dataType: 'JSONP',
        type: 'GET',
        jsonpCallback: 'callback',
        data : {
            router:value_router,
            order:value_order,
            protocol:value_protocol,
            topn:value_TopN,
            stime:value_starttime,
            etime:value_endtime,
            srcip:value_src_ip,
            srcport:value_src_port,
            dstip:value_dst_ip,
            dstport:value_dst_port
        },

        success: function (data) {
            SRC_IP = data.SRC_IP;
            SRC_PORT = data.SRC_PORT;
            DST_IP = data.DST_IP;
            DST_PORT = data.DST_PORT;
            PROTOCOL = data.PROTOCOL;
            FLOWS = data.FLOWS;
            PACKETS = data.PACKETS;
            BYTES = data.BYTES;
            var html = "<thead><tr><th>SRC_IP</th><th>SRC_PORT</th><th>DST_IP</th><th>DST_PORT</th><th>PROTOCOL</th><th>PACKETS</th><th>PACKETS</th><th>BYTES</th></tr></thead><tbody>";
            for(num = 0; num < 10; num++){
                html = html + "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>"
            }
            html = html + "</tbody>"
            tb.innerHTML = html;
            for(j=0; j < SRC_PORT.length; j++){
                var td = tb.rows[j+1].cells[0];
                td.innerHTML = SRC_IP[j];
                var td = tb.rows[j+1].cells[1];
                td.innerHTML = SRC_PORT[j];
                var td = tb.rows[j+1].cells[2];
                td.innerHTML = DST_IP[j];
                var td = tb.rows[j+1].cells[3];
                td.innerHTML = DST_PORT[j];
                var td = tb.rows[j+1].cells[4];
                td.innerHTML = PROTOCOL[j];
                var td = tb.rows[j+1].cells[5];
                td.innerHTML = FLOWS[j];
                var td = tb.rows[j+1].cells[6];
                td.innerHTML = PACKETS[j];
                var td = tb.rows[j+1].cells[7];
                td.innerHTML = BYTES[j];
            }
            
        }

    });


	

}