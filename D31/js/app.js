document.querySelector("#region-select").onchange = function () {
    if (document.querySelector("#table-wrapper").querySelector("table")) {
        var table = document.querySelector("#table-wrapper").querySelector("table");
        table.parentNode.removeChild(table);
    }
    makeTable(getData());
}
document.querySelector("#product-select").onchange = function () {
    if (document.querySelector("#table-wrapper").querySelector("table")) {
        var table = document.querySelector("#table-wrapper").querySelector("table");
        table.parentNode.removeChild(table);
    }
    makeTable(getData());
}


var regionArr = [{
    value: 1,
    text: "华东",
}, {
    value: 2,
    text: "华南",
}, {
    value: 3,
    text: "华北",
}];
var productArr = [{
    value: 1,
    text: "手机",
}, {
    value: 2,
    text: "笔记本",
}, {
    value: 3,
    text: "智能音箱",
}];
createCheckBox(document.querySelector("#region-radio-wrapper"), regionArr);
createCheckBox(document.querySelector("#product-radio-wrapper"), productArr);