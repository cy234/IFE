function Barsvg(data){
    console.log(data);
    var ew=25, interval=15;//时间轴宽度 间隙
    var he=360;
    var maxData=Math.max.apply(Math,data);
    var p=he/maxData;//高度的比例
    var h='<line x1="20" y1="400" x2="520" y2="400" style="stroke:black;stroke-width:2;"/><line x1="20" y1="30" x2="20" y2="400" style="stroke:black;stroke-width:2;"/>';
    for(let i=1;i<=5;i++)
    {
        h+='<line x1="20" y1="'+parseInt(i*60+40)+'" x2="520" y2="'+parseInt(i*60+40)+'"  style="stroke: #eeefea; stroke-width:2;"/>';
    }
   
    for(let j=0;j<data.length;j++){
        var height=data[j]*p;
        console.log(data[0]);
        var x=j*ew+(j+1)*interval+25;
        h+='<rect x="'+x+'" y="'+parseFloat(400-height)+'" width="'+ew+'" height="'+height+'" style="fill:lightblue;"/>';
    }
    document.querySelector("svg").innerHTML=h;
    
}


   
 