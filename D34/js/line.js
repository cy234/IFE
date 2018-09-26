function Linecanvas(data){
   
    var he=360;
    var maxData=Math.max.apply(Math,data);
    var p=he/maxData;
    ctx.clearRect(0, 0, foldLine.width,foldLine.height);//清除画布
    ctx.beginPath();
    ctx.strokeStyle="black"
    ctx.moveTo(20,30);
    ctx.lineTo(20,400);
    ctx.lineTo(520,400);
    ctx.stroke();
    for(var i=1;i<=5;i++){
        ctx.beginPath();
        ctx.strokeStyle="#eeefea";
        ctx.moveTo(20,40+60*i);
        ctx.lineTo(520,40+60*i);
        ctx.stroke();
    }
    for(let j=0;j<data.length;j++){
        ctx.beginPath();
        ctx.strokeStyle="#191970";
        ctx.moveTo(20+40*j,400-data[j]*p);
        ctx.lineWidth=2;
        ctx.lineTo(20+40*(j+1),400-data[j+1]*p);
        ctx.stroke();
        ctx.beginPath(); //描点
        ctx.fillStyle="black";
        ctx.moveTo(24+40*j,400-data[j]*p);
        ctx.arc(20+40*j,400-data[j]*p,4,Math.PI*2,0,true);
        ctx.fill();
    }
}

function LineCharts(){
    ctx.clearRect(0, 0, foldLine.width,foldLine.height);//清除画布
    var he=360;
    var color=["#b399ff","#ff7300","#e680ff","#7ab8cc","#e68ab8","lightblue","#ffff00","#191970","pink"];
    var maxData=Math.max.apply(Math,sourceData[0].sale);
    for(let i=0;i< sourceData.length;i++)//最大项
    {
        var m=Math.max.apply(Math,sourceData[i].sale);
        if(m>maxData)
        maxData=m;
    }
    var p=he/maxData;
    ctx.beginPath();
    ctx.strokeStyle="black"
    ctx.moveTo(20,30);
    ctx.lineTo(20,400);
    ctx.lineTo(520,400);
    ctx.stroke();
    for(var i=1;i<=5;i++){
        ctx.beginPath();
        ctx.strokeStyle="#eeefea";
        ctx.moveTo(20,40+60*i);
        ctx.lineTo(520,40+60*i);
        ctx.stroke();
    }
    for(let j=0;j<sourceData.length;j++){
        for(let k=0;k<sourceData[i].sale.length;k++){
        ctx.beginPath();
        ctx.strokeStyle=color[j];
        ctx.moveTo(20+40*k,400-sourceData[j].sale[k]*p);
        ctx.lineWidth=2;
        ctx.lineTo(20+40*(k+1),400-sourceData[j].sale[k+1]*p);
        ctx.stroke();
        ctx.beginPath(); //描点
        ctx.fillStyle="black";
        ctx.moveTo(24+40*k,400-sourceData[j].sale[k]*p);
        ctx.arc(20+40*k,400-sourceData[j].sale[k]*p,4,Math.PI*2,0,true);
        ctx.fill();
        }
    }

}
