window.onload = function () {
    createTable();
    var data = [];
    var trs = document.querySelectorAll("tr");
    for (let i = 1; i < trs.length; i++) {
        trs[i].onmouseover = function () {
            for (let j = 0; j < trs.length; j++)
                trs[j].style.background = "white";
            this.style.background = "#cad6e8";
            Barsvg(getData(this));
            Linecanvas(getData(this));
        }
        trs[i].onmouseout = function(){
            for (let j = 0; j < trs.length; j++)
                trs[j].style.background = "white";
             LineCharts();
        }
    }
   
}

function getData(tr) {
    data = [];
    var tds = tr.querySelectorAll("td");
    for (let i = 1; i < tds.length; i++) {
        data.push(parseInt(tds[i].innerText));
    }
    if(data.length==13){
        data.shift();
    }
    return data;
}


var foldLine=document.getElementById("foldline");
if(foldLine.getContext){
    var ctx=foldLine.getContext("2d");      
}