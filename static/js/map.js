
$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));
        var data;
        get_ssq_content= function (){
            $.ajax({
                type:"get",
                url: "http://127.0.0.1:8000/appssq/datacontent_url",
                async:false,  //值为true表示异步，只为false表示同步
                success: function (content_data){
                    data = content_data;
                }
            })
        }
        get_ssq_content();

        var geoCoordMap = {
            '河北':[114.48,38.03],
            '河南':[113.65,34.76],
            '黑龙江':[126.63,45.75],
            '辽宁':[123.38,41.8],
            '吉林':[125.35,43.88],
            '江苏':[118.78,32.04],
            '浙江':[120.19,30.26],
            '广东':[113.23,23.16],
            '广西':[108.33,22.84],
            '上海':[121.48,31.22],
            '北京':[116.46,39.92],
            '天津':[117.2,39.13],
            '重庆':[106.54,29.59],
            '西藏':[91.11,29.97],
            '福建':[119.3,26.08],
            '山西':[112.53,37.87],
            '山东':[117,36.65],
            '云南':[102.73,25.04],
            '贵州':[106.71,26.57],
            '海南':[110.35,20.02],
            '宁夏':[106.27,38.47],
            '江西':[115.89,28.68],
            '内蒙古':[111.65,40.82],
            '四川':[104.06,30.67],
            '青海':[101.74,36.56],
            '陕西':[108.95,34.27],
            '新疆':[87.68,43.77],
            '甘肃':[103.73,36.03],
            '安徽':[117.27,31.86],
            '湖南':[113,28.21],
            '湖北':[114.31,30.52]
        };
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        //需要执行的内容:获取ssq_code
        var ssq_code = ''; // 全局变量
        get_ssq_code = function () {
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8000/appssq/datacode_url",
                async:false,  //值为true表示异步，只为false表示同步
                success: function (real_code) {
                    ssq_code = '->'+real_code+'期<-'; //将局部变量赋值给全局变量
                }
            })
        }
        get_ssq_code();

        option = {
           // backgroundColor: '#404a59',
            title: {
                text: '福彩中奖信息',
                subtext: ssq_code,
                sublink: 'https://www.zhcw.com/kjxx/ssq/',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip : {
                trigger: 'item'
            },

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,  //true（可拖动，可缩放）；false(不可拖动，不可缩放),初始值 false
                zoom:1.2,

                itemStyle: {
                    normal: {  // 静态的时候显示的默认样式
                        areaColor: 'rgba(2,37,101,.5)',
                        borderColor: 'rgba(112,187,252,.5)'
                    },
                    emphasis: { //鼠标移入动态的时候显示的默认样式
                        areaColor: 'rgba(2,37,101,.8)'
                    }
                }
            },
            series : [
                {
                    name: '注数',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    // symbol: "pin", //气泡
                    data: convertData(data),  // 初始值15 convertData(data)
                    symbolSize: function (val) {
                        return val[2] / 0.1;  //初始值15
                    },
                    label: {
                        normal: {
                            formatter: function (params){
                                var str_zhu = params.name +''+params.value[2] + '注';
                                return str_zhu;
                            },    // 初始值'{b}'
                            position: 'top',
                            show: true,  //是否显示地图省份得名称
                        },
                        emphasis: {
                            show: true
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffeb7b'
                        }
                    }
                }

            ]
        };
		
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

})

