; (function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function (jQuery) {
    //默认的option 全局公共的参数设置在这里
    var defaultOption = {
        title: {
            left: 'center',
            top: 'top'
        },
        legend: {
            left: 'center',
            top: 'bottom'
        },
        color: ['#81c34e', '#e0554e', '#7277fc', '#4e9ef6'],
        grid: {
            borderWidth: 0
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {},
        yAxis: {},
        series: []
    };

    function Chart(dom, param) {
        var instance = this.renderChart(dom, param);
        if (dom) return instance;//返回echart 实例
    }

    Chart.prototype = {
        constructor: Chart,
        chart: function (option) {
            return $.extend(true, {}, defaultOption, option);
        },
        renderChart: function (dom, param) {
            if (!dom) return;
            var instance = echarts.init(dom);
            instance.clear();
            instance.setOption(param);
            return instance;
        },
        line: function (option) {
            //在这里可以添加公共的参数
            var _option = {
                series: [{
                    type: 'line'
                }]
            };
            return $.extend(true, {}, defaultOption, _option, option);
        },
        bar: function (option) {
            //在这里可以添加公共的参数
            var _option = {
                series: [{
                    type: 'bar'
                }]
            };
            return $.extend(true, {}, defaultOption, _option, option);
        },
        k: function (option) {
            //在这里可以添加公共的参数
            var _option = {
                series: [{
                    type: 'k'
                }]
            };
            return $.extend(true, {}, defaultOption, _option, option);
        },
        pie: function (option) {
            //在这里可以添加公共的参数
            var _option = {
                series: [{
                    type: 'pie'
                }]
            };
            return $.extend(true, {}, defaultOption, _option, option);
        }
        //其他的type类型可自定义添加,此处不再赘述
    };

    $.fn.renderEcharts = function () {
        var args = [].slice.call(arguments);
        var fn, result, obj = new Chart();
        if ($.type(args[0]) === "string" && $.isFunction(fn = obj[args[0]])) {
            result = obj[args[0]](args[1]);
            return new Chart(this.get(0), result);
        }
    };

}));