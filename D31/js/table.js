function getData() { //根据select获取数据
    var select = document.querySelector("#region-select");
    var product = document.querySelector("#product-select");
    var myselect = select.options[select.selectedIndex].innerText;
    var proselect = product.options[product.selectedIndex].innerText;
    var data = new Array();
    var j = 0;
    for (var i = 0; i < sourceData.length; i++) {
        if (sourceData[i].region == myselect && sourceData[i].product == proselect)
            data[j++] = sourceData[i];
    }
    return data;
}
function makeTable(data) {//数据渲染表格
    document.querySelector("#table-wrapper").appendChild(document.createElement("table"));
    var table = document.querySelector("table");
    var h = document.createElement("tr");
    h.innerHTML = "<th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>";
    table.appendChild(h);
    var tr = new Array();
    for (var i = 0; i < data.length; i++) {
        tr[i] = document.createElement("tr");
        table.appendChild(tr[i]);
        for (var j = 0; j < 14; j++) {
            var td = document.createElement("td");
            if (j == 0) {
                td.innerHTML = data[i].product;
            }
            else if (j == 1) {
                td.innerHTML = data[i].region;
            } else {
                td.innerHTML = data[i].sale[j - 2];
            }
            tr[i].appendChild(td);
        }
    }
}
var region_select = [];
        var product_select = [];
        function getData2() {
            var region = document.querySelector("#region-radio-wrapper").querySelectorAll("input");
            var product = document.querySelector("#product-radio-wrapper").querySelectorAll("input");
            var data = [];
            region_select = [];
            product_select = [];
            var j = 0;
            var m = 0, n = 0;
            for (let i = 1; i < region.length; i++) {
                if (region[i].checked == true) {
                    region_select[m++] = regionArr[region[i].value].text;
                }
            }
            for (let i = 1; i < product.length; i++) {
                if (product[i].checked == true) {
                    product_select[n++] = productArr[product[i].value].text;
                }
            }
            if (region_select != 0 && product_select != 0)
                data = march(region_select, product_select);
            else if (region_select == 0 && product_select == 0)
                data = sourceData;
            // else if(region_select!=0&&product_select==0)//只选择一项商品
            // data=sourceData.filter((item)=>{return region_select.indexOf(item.region)!==-1})
            // else if(region_select==0&&product_select!=0)//只选择一个地区
            // data=sourceData.filter((item)=>{return product_select.indexOf(item.product)!==-1})
            return data;
        }
        function march(region_select, product_select) {
            return sourceData.filter((item) => {
                return (region_select.indexOf(item.region) !== -1 && product_select.indexOf(item.product) !== -1)
            })
        }
        function createTable(data) {
            var div2 = document.querySelector("#table-wrapper2");
            var h = '<table><tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>';
            if (region_select.length == 1 && product_select.length > 1) {
                h = '<table><tr><th>地区</th><th>商品</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr>';
            }
            if (region_select.length == 1 && product_select.length > 1) {
                for (let i = 0; i < data.length; i++) {
                    if (i == 0) {
                        h += '<tr><td class="rows" rowspan="' + product_select.length + '">' + data[i].region + '</td><td>' + data[i].product + '</td>';
                    } else {
                        h += '<tr><td>' + data[i].product + '</td>';
                    }
                    for (let j = 0; j < data[i].sale.length; j++) {
                        h += '<td>' + data[i].sale[j] + '</td>';
                    }
                    h += '</tr>';
                }
            }
            else if (region_select.length > 1 && product_select.length == 1) {
                for (let i = 0; i < data.length; i++) {
                    if (i == 0) {
                        h += '<tr><td class="rows" rowspan="' + region_select.length + '">' + data[i].product + '</td><td>' + data[i].region + '</td>';
                    } else {
                        h += '<tr><td>' + data[i].region + '</td>';
                    }
                    for (let j = 0; j < data[i].sale.length; j++) {
                        h += '<td>' + data[i].sale[j] + '</td>';
                    }
                    h += '</tr>';
                }
            }
            else if ((region_select.length > 1 && product_select.length > 1) || (region_select.length == 0 && product_select.length == 0)) {
                data.sort((a, b) => {
                    return a.product > b.product ? 1 : 0;
                });//按商品分类排序
                var flag = data[0].product;
                var count = [];//标记行宽
                var a = 0;
                for (let i = 0; i < data.length; i++) {
                    count[i] = 0;
                    if (flag != data[i].product) {
                        count[i - a] = a;
                        a = 1;
                        flag = data[i].product;
                    }
                    else {
                        a++;
                    }
                    if (i == data.length - 1) {
                        count[i - a + 1] = a;
                    }
                }
                for (let i = 0; i < data.length; i++) {
                    if (count[i]) {
                        h += '<tr><td class="rows" rowspan="' + count[i] + '">' + data[i].product + '</td><td>' + data[i].region + '</td>';
                    } else {
                        h += '<tr><td>' + data[i].region + '</td>';
                    }
                    for (let j = 0; j < data[i].sale.length; j++) {
                        h += '<td>' + data[i].sale[j] + '</td>';
                    }
                    h += '</tr>';
                }

            }
            else if (region_select.length == 1 && product_select.length == 1) {
                h += '<tr><td>' + data[0].product + '</td><td>' + data[0].region + '</td>';
                for (let j = 0; j < data[0].sale.length; j++) {
                    h += '<td>' + data[0].sale[j] + '</td>';
                }
                h += '</tr>';
            }
            h += '</table>';
            div2.innerHTML = h;
        }    