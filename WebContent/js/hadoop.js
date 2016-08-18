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

        var ta = document.getElementById('hadoop7');
        var html = "<thead><tr><th>procs</th><th>cpu</th><th>memory</th><th>status</th><th>pid</th></tr></thead><tbody>";
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = data2[3].PluginOutput.split("-");
	
	var z = 0;
        for(j=6;j<=10;j++)
        if(arr[j]!=0)
        z++;

        for(n=0;n<z;n++)
        html = html + "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
        html = html + "</tbody>"
        ta.innerHTML = html;

	var y=1;
	for(j=6;j<=10;j++)
	if(arr[j] != 0){
	var td = ta.rows[y].cells[4];
        td.innerHTML = arr[j];
	var td = ta.rows[y].cells[3];
        td.innerHTML = arr[j+5];
	var td = ta.rows[y].cells[0];
        var tc = ta.rows[y].cells[1];
        if(j==6) {td.innerHTML = 'DataNode'; tc.innerHTML = arr1[1] + '%';}
	if(j==7) {td.innerHTML = 'NameNode'; tc.innerHTML = arr1[2] + '%';}
	if(j==8) {td.innerHTML = 'SecondaryNameNode'; tc.innerHTML = arr1[3] + '%';}
	if(j==9) {td.innerHTML = 'NodeManager'; tc.innerHTML = arr1[4] + '%';}
	if(j==10) {td.innerHTML = 'ResourceManager'; tc.innerHTML = arr1[5] + '%';}
	var td = ta.rows[y].cells[2];
        td.innerHTML = arr[j-5] + '%';
        y++;
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

        var ta = document.getElementById('hadoop8');
        var html = "<thead><tr><th>procs</th><th>cpu</th><th>memory</th><th>status</th><th>pid</th></tr></thead><tbody>";
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = data2[3].PluginOutput.split("-");

        var z = 0;
        for(j=6;j<=10;j++)
        if(arr[j]!=0)
        z++;

        for(n=0;n<z;n++)
        html = html + "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
        html = html + "</tbody>"
        ta.innerHTML = html;

        var y=1;
        for(j=6;j<=10;j++)
        if(arr[j] != 0){
        var td = ta.rows[y].cells[4];
        td.innerHTML = arr[j];
        var td = ta.rows[y].cells[3];
        td.innerHTML = arr[j+5];
        var td = ta.rows[y].cells[0];
        var tc = ta.rows[y].cells[1];
        if(j==6) {td.innerHTML = 'DataNode'; tc.innerHTML = arr1[1] + '%';}
        if(j==7) {td.innerHTML = 'NameNode'; tc.innerHTML = arr1[2] + '%';}
        if(j==8) {td.innerHTML = 'SecondaryNameNode'; tc.innerHTML = arr1[3] + '%';}
        if(j==9) {td.innerHTML = 'NodeManager'; tc.innerHTML = arr1[4] + '%';}
        if(j==10) {td.innerHTML = 'ResourceManager'; tc.innerHTML = arr1[5] + '%';}
        var td = ta.rows[y].cells[2];
        td.innerHTML = arr[j-5] + '%';
        y++;
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

        var ta = document.getElementById('hadoop9');
        var html = "<thead><tr><th>procs</th><th>cpu</th><th>memory</th><th>status</th><th>pid</th></tr></thead><tbody>";
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = data2[3].PluginOutput.split("-");

        var z = 0;
        for(j=6;j<=10;j++)
        if(arr[j]!=0)
        z++;

        for(n=0;n<z;n++)
        html = html + "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
        html = html + "</tbody>"
        ta.innerHTML = html;

        var y=1;
        for(j=6;j<=10;j++)
        if(arr[j] != 0){
        var td = ta.rows[y].cells[4];
        td.innerHTML = arr[j];
        var td = ta.rows[y].cells[3];
        td.innerHTML = arr[j+5];
        var td = ta.rows[y].cells[0];
        var tc = ta.rows[y].cells[1];
        if(j==6) {td.innerHTML = 'DataNode'; tc.innerHTML = arr1[1] + '%';}
        if(j==7) {td.innerHTML = 'NameNode'; tc.innerHTML = arr1[2] + '%';}
        if(j==8) {td.innerHTML = 'SecondaryNameNode'; tc.innerHTML = arr1[3] + '%';}
        if(j==9) {td.innerHTML = 'NodeManager'; tc.innerHTML = arr1[4] + '%';}
        if(j==10) {td.innerHTML = 'ResourceManager'; tc.innerHTML = arr1[5] + '%';}
        var td = ta.rows[y].cells[2];
        td.innerHTML = arr[j-5] + '%';
        y++;
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

        var ta = document.getElementById('hadoop10');
        var html = "<thead><tr><th>procs</th><th>cpu</th><th>memory</th><th>status</th><th>pid</th></tr></thead><tbody>";
        var arr = data2[4].PluginOutput.split("-");
        var arr1 = data2[3].PluginOutput.split("-");

        var z = 0;
        for(j=6;j<=10;j++)
        if(arr[j]!=0)
        z++;

        for(n=0;n<z;n++)
        html = html + "<tr><td></td><td></td><td></td><td></td><td></td></tr>"
        html = html + "</tbody>"
        ta.innerHTML = html;

        var y=1;
        for(j=6;j<=10;j++)
        if(arr[j] != 0){
        var td = ta.rows[y].cells[4];
        td.innerHTML = arr[j];
        var td = ta.rows[y].cells[3];
        td.innerHTML = arr[j+5];
        var td = ta.rows[y].cells[0];
        var tc = ta.rows[y].cells[1];
        if(j==6) {td.innerHTML = 'DataNode'; tc.innerHTML = arr1[1] + '%';}
        if(j==7) {td.innerHTML = 'NameNode'; tc.innerHTML = arr1[2] + '%';}
        if(j==8) {td.innerHTML = 'SecondaryNameNode'; tc.innerHTML = arr1[3] + '%';}
        if(j==9) {td.innerHTML = 'NodeManager'; tc.innerHTML = arr1[4] + '%';}
        if(j==10) {td.innerHTML = 'ResourceManager'; tc.innerHTML = arr1[5] + '%';}
        var td = ta.rows[y].cells[2];
        td.innerHTML = arr[j-5] + '%';
        y++;
        }
}
})


i++

};
	
