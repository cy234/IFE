
function createTable() {
    var table = document.querySelector("#table-wrapper");
    console.log(table);
    var h = '<table><tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>';
    sourceData.sort((a, b) => {
        return a.product > b.product ? 1 : 0;
    });//按商品分类排序
    var flag = sourceData[0].product;
    var count = [];//标记行宽
    var a = 0;
    for (let i = 0; i < sourceData.length; i++) {
        count[i] = 0;
        if (flag != sourceData[i].product) {
            count[i - a] = a;
            a = 1;
            flag = sourceData[i].product;
        }
        else {
            a++;
        }
        if (i == sourceData.length - 1) {
            count[i - a + 1] = a;
        }
    }
    for (let i = 0; i < sourceData.length; i++) {
        if (count[i]) {
            h += '<tr><td class="rows" rowspan="' + count[i] + '">' + sourceData[i].product + '</td><td>' + sourceData[i].region + '</td>';
        } else {
            h += '<tr><td>' + sourceData[i].region + '</td>';
        }
        for (let j = 0; j < sourceData[i].sale.length; j++) {
            h += '<td>' +sourceData[i].sale[j] + '</td>';
        }
        h += '</tr>';
    }
    h += '</table>';
    table.innerHTML = h;
}    