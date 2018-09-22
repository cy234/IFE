
        function createCheckBox(dom, data) {  //dom为checkbox容器 
            var arr = data;
            var str = '';
            arr.unshift({ value: "all", text: "全选" });
            for (let i = 0; i < arr.length; i++) {
                str = str + '<lable><input type="checkbox" value="' + arr[i].value + '">' + arr[i].text + '</lable>';
            }
            dom.innerHTML = str;
            dom.onclick = function (e) {
                //全选逻辑
                if (!e.target.value) return;
                var v = e.target.value;
                var check = dom.querySelectorAll("input");
                if (v == "all") {
                    if (e.target.checked) { //all被选
                        for (let i = 0; i < check.length; i++) {
                            check[i].checked = true;
                        }
                    } else {
                        for (let i = 0; i < check.length; i++) {
                            check[i].checked = false;
                        }
                    }
                } else {
                    if (check[0].checked == true)  //选择all的情况下再取消单项取消all的选择
                    {
                        check[0].checked = false;
                    }
                    var len = 0;//标记已选长度，子项全选的情况下选择all
                    for (let i = 0; i < check.length; i++) {
                        if (check[i].checked == true) {
                            len++;
                        }
                    }
                    if (len == check.length - 1) {
                        check[0].checked = true;
                    }
                }
                if (document.querySelector("#table-wrapper2").querySelector("table")) {
                    var table = document.querySelector("#table-wrapper2").querySelector("table");
                    table.parentNode.removeChild(table);
                }
                createTable(getData2());
            }
        }