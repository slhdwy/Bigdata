function add()  
{  
  var li = document.createElement("li");
  var href_a = document.createElement("a");  
  href_a.href = "Panel1.html";  
  var panelName = document.getElementById("panel-name").value;
  href_a.innerHTML = panelName;  

  var myPanel = document.getElementById("my-panel");  
  myPanel.appendChild(li);
    
  li.appendChild(href_a);   
};
 
window.onload = function()  
{  
    var btn1 = document.getElementById("btn1");  
    btn1.onclick = add;  
}  
