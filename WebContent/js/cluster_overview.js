setInterval(function(){Push();},500);
var i = 0;

function Push(){

if(i%10==1)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview7",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {

        var ta = document.getElementById('storm');
        var tb = document.getElementById('hadoop');

        var td = ta.rows[1].cells[1];
        var arr = data2[7].PluginOutput.split("-");
	td.innerHTML = arr[0] + '%' ;


        var td = ta.rows[1].cells[2];
        var arr = data2[8].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%'; 


        var td = tb.rows[1].cells[1];
        var arr = data2[3].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

	var td = tb.rows[1].cells[2];
        var arr = data2[4].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

	var td = ta.rows[1].cells[3];
	var arr = data2[8].PluginOutput.split("-");
	var arr1 = ['','zookeeper ','nimbus ','supervisor ','worker6700 ','worker6701 ','woker6702 ','worker6703 '];
        td.innerHTML = '';
	for(j=8;j<=14;j++){
		if(arr[j] != 0)
		td.innerHTML = td.innerHTML + arr1[j-7];
}

	var td = tb.rows[1].cells[3];
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = ['','DataNode ','NameNode ','SecondaryNameNode ','NodeManager ','ResourceManager '];
        td.innerHTML = '';
        for(j=6;j<=10;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-5];
}


}
})

if(i%10==2)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview8",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {

        var ta = document.getElementById('storm');
        var tb = document.getElementById('hadoop');

        var td = ta.rows[2].cells[1];
        var arr = data2[7].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

        var td = ta.rows[2].cells[2];
        var arr = data2[8].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

        var td = tb.rows[2].cells[1];
        var arr = data2[3].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

        var td = tb.rows[2].cells[2];
        var arr = data2[4].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

        var td = ta.rows[2].cells[3];
        var arr = data2[8].PluginOutput.split("-");
        var arr1 = ['','zookeeper ','nimbus ','supervisor ','worker6700 ','worker6701 ','woker6702 ','worker6703 '];
        td.innerHTML = '';
        for(j=8;j<=14;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-7];
}

	var td = tb.rows[2].cells[3];
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = ['','DataNode ','NameNode ','SecondaryNameNode ','NodeManager ','ResourceManager '];
        td.innerHTML = '';
        for(j=6;j<=10;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-5];
}


}
})

if(i%10==3)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview9",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {

        var ta = document.getElementById('storm');
        var tb = document.getElementById('hadoop');

        var td = ta.rows[3].cells[1];
        var arr = data2[7].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

        var td = ta.rows[3].cells[2];
        var arr = data2[8].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

	var td = tb.rows[3].cells[1];
        var arr = data2[3].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

        var td = tb.rows[3].cells[2];
        var arr = data2[4].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

        var td = ta.rows[3].cells[3];
        var arr = data2[8].PluginOutput.split("-");
        var arr1 = ['','zookeeper ','nimbus ','supervisor ','worker6700 ','worker6701 ','woker6702 ','worker6703 '];
        td.innerHTML = '';
        for(j=8;j<=14;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-7];
}

	var td = tb.rows[3].cells[3];
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = ['','DataNode ','NameNode ','SecondaryNameNode ','NodeManager ','ResourceManager '];
        td.innerHTML = '';
        for(j=6;j<=10;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-5];
}


}
})

if(i%10==4)
        $.ajax({
        url: "http://[2001:da8:a0:500::1:9]:8089/ClusterOverview10",
        crossDomain: true,
        dataType: 'jsonp',
        type: 'GET',
        jsonpCallback: 'callback',
        success: function (data2) {

        var ta = document.getElementById('storm');
        var tb = document.getElementById('hadoop');

        var td = ta.rows[4].cells[1];
        var arr = data2[7].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

        var td = ta.rows[4].cells[2];
        var arr = data2[8].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%';

	var td = tb.rows[4].cells[1];
        var arr = data2[3].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

        var td = tb.rows[4].cells[2];
        var arr = data2[4].PluginOutput.split("-");
        td.innerHTML = arr[0] + '%' ;

	var td = ta.rows[4].cells[3];
        var arr = data2[8].PluginOutput.split("-");
        var arr1 = ['','zookeeper ','nimbus ','supervisor ','worker6700 ','worker6701 ','woker6702 ','worker6703 '];
        td.innerHTML = '';
        for(j=8;j<=14;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-7];
}

	var td = tb.rows[4].cells[3];
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = ['','DataNode ','NameNode ','SecondaryNameNode ','NodeManager ','ResourceManager '];
        td.innerHTML = '';
        for(j=6;j<=10;j++){
                if(arr[j] != 0)
                td.innerHTML = td.innerHTML + arr1[j-5];
}

}
})



i++
 
};
