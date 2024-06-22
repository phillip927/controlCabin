$(window).load(function(){$(".loading").fadeOut()})

$(function () {
    echarts_4()
    echarts_31()
    function echarts_4() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('echart4'));
            var myChart2 = echarts.init(document.getElementById('echart3'));

            var sz_index_date = [];
            var sz_index_close = [];
            var mt_daily_close = [];
            get_index_data = function(){
                $.ajax({
                    type:"get",
                    url: "http://127.0.0.1:8000/appssq/stock_url",
                    async:false,  //值为true表示异步，只为false表示同步
                    success: function (stock_dict){
                        sz_index_date = stock_dict['sz_index_date'];
                        sz_index_close = stock_dict['sz_index_close'];
                        mt_daily_close = stock_dict['mt_daily_close'];
                    }
                })
            }

            get_index_data();

            option = {
                tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
        },
            legend: {
                data: ['文本1', '文本2'],

                top:'2%',
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: '12',

                },
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 35
        },
        grid: {
            left: '0%',
            top:'40px',
            right: '0%',
            bottom: '0%',
           containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: sz_index_date,
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },

            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                 textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '上证指数',
            type: 'bar',
            data: sz_index_close,
            barWidth:'20%', //柱子宽度
           // barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color:'#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }, {
            name: '茅台股价',
            type: 'bar',
            data: mt_daily_close,
            barWidth:'20%',
           // barGap: 1,
            itemStyle: {
                normal: {
                    color:'#62c98d',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        ]
    };
    option2 = {
      //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['粉丝数', '收藏数'],
            top:'5%',
            textStyle: {
                color: "#fff",
                fontSize: '12',

            },

            itemGap: 35
        },
        grid: {
            left: '0%',
            top:'40px',
            right: '0%',
            bottom: '0',
           containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                 textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '粉丝数',
            type: 'line',
     smooth: true,
            data: [2, 6, 3, 8, 5, 8],

            itemStyle: {
                normal: {
                    color:'#2f89cf',
                    opacity: 1,

                    barBorderRadius: 5,
                }
            }
        }, {
            name: '收藏数',
            type: 'line',
             smooth: true,
            data: [5, 2, 6, 4, 5, 12],
            barWidth:'15',
           // barGap: 1,
            itemStyle: {
                normal: {
                    color:'#62c98d',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        },
        ]
    };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option2);
            myChart2.setOption(option);
            window.addEventListener("resize",function(){
                myChart.resize();
            });
        }
    function echarts_31() {
            // 基于准备好的dom，初始化echarts实例
//            var myChart = echarts.init(document.getElementById('fb01'));
//        var myChart2 = echarts.init(document.getElementById('fb02'));
        var myChart3 = echarts.init(document.getElementById('fb03'));
        var myChart4 = echarts.init(document.getElementById('fb04'));
        var myChart5 = echarts.init(document.getElementById('myd1'));

        var myChart7 = echarts.init(document.getElementById('sysx'));
//        option = {
//            tooltip: {
//                trigger: 'item',
//                formatter: "{a} <br/>{b}: {c} ({d}%)",
//                position:function(p){   //其中p为当前鼠标的位置
//                    return [p[0] + 10, p[1] - 10];
//                }
//        },
//        legend: {
//            orient: 'vertical',
//            top:'25%',
//            right:0,
//            itemWidth: 10,
//            itemHeight: 10,
//            data:['20-29岁','30-39岁','40-49岁','50岁以上'],
//                    textStyle: {
//                color: 'rgba(255,255,255,.5)',
//                fontSize:'12',
//            }
//        },
//        series: [
//            {
//                name:'年龄分布',
//                type:'pie',
//                center: ['35%', '50%'],
//                radius: ['40%', '50%'],
//                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],
//                label: {show:false},
//                labelLine: {show:false},
//                data:[
//
//                    {value:4, name:'20-29岁'},
//                    {value:2, name:'30-39岁'},
//                    {value:2, name:'40-49岁'},
//                    {value:1, name:'50岁以上'},
//                ]
//            }
//        ]
//    };
//        option2 = {
//            tooltip: {
//                trigger: 'item',
//                formatter: "{a} <br/>{b}: {c} ({d}%)",
//                position:function(p){   //其中p为当前鼠标的位置
//                    return [p[0] + 10, p[1] - 10];
//            }
//        },
//        legend: {
//            orient: 'vertical',
//            top:'25%',
//            right:'8%',
//           itemWidth: 10,
//            itemHeight: 10,
//            data:['博士','硕士','本科','专科'],
//                    textStyle: {
//                color: 'rgba(255,255,255,.5)',
//                fontSize:'12',
//            }
//        },
//        series: [
//            {
//                name:'学历构成',
//                type:'pie',
//                center: ['40%', '50%'],
//                radius: ['40%', '50%'],
//    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],
//                label: {show:false},
//                labelLine: {show:false},
//                data:[
//                    {value:10, name:'博士'},
//                    {value:20, name:'硕士'},
//                    {value:30, name:'本科'},
//                    {value:40, name:'专科'},
//
//                ]
//            }
//        ]
//    };
        option3 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
    position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
           orient: 'vertical',
    top:'center',
            right:0,
           itemWidth: 10,
            itemHeight: 10,
            data:['controlcabin','dbscrapy','backup'],
                    textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },
        series: [
            {
                name:'数据库',
                type:'pie',
                center: ['35%', '50%'],
                radius: ['40%', '50%'],
    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],
                label: {show:false},
                labelLine: {show:false},
                data:[

                    {value:4, name:'controlcabin'},
                    {value:2, name:'dbscrapy'},
                    {value:2, name:'backup'},
                ]
            }
        ]
    };
    option4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
    position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top:'center',
            right:'8%',
           itemWidth: 10,
            itemHeight: 10,
            data:['wordsinfo','weatherinfo','csdninfo','ssqinfo','webinfo','goldinfo'],
                    textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize:'12',
            }
        },
        series: [
            {
                name:'表容量',
                type:'pie',
                center: ['40%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828','#e58c00','#eb295b'],
                label: {show:false},
                labelLine: {show:false},
                data:[
                    {value:10, name:'wordsinfo'},
                    {value:20, name:'weatherinfo'},
                    {value:30, name:'csdninfo'},
                    {value:40, name:'ssqinfo'},
                    {value:50, name:'webinfo'},
                    {value:60, name:'goldinfo'},
                ]
            }
        ]
    };

        //需要执行的内容:获取csdn_num
        var csdn_comment_num; // 评论数
        var csdn_arcticles_num; // 文章数
        var csdn_good_num; // 点赞量
        get_csdn_num = function(){
            $.ajax({
                type: "get",
                url: "http://127.0.0.1:8000/appcsdn/csdn_url",
                async:false,  //值为true表示异步，只为false表示同步
                success: function (csdn_list) {
                    csdn_comment_num = csdn_list['csdn_comment']; // 全局变量
                    csdn_arcticles_num = csdn_list['csdn_arcticles']; // 全局变量
                    csdn_good_num = csdn_list['csdn_good']; // 全局变量
                    console.log(csdn_arcticles_num);
                    }
                })
            }
    //    每3秒调用一次ajax
        get_csdn_num();

        option5 = {
        grid: {
            left: '0',
            right: '0',
            top: '10%',
            bottom: '24%',
            //containLabel: true
        },
      legend: {
            data: ['评论数', '文章数', '点赞量'],
            bottom:0,
           itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "#fff",
                fontSize: '10',

            },

            itemGap: 5
        },
        tooltip: {
            show: "true",
            trigger: 'item'
        },
        yAxis: {
            type: 'value',
            show: false,
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    show: false,
                 //   inside: true,
                    textStyle: {
                      color: "rgba(255,255,255,1)",
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: ['csdn统计']
            }

        ],
        series: [
             {
                name: '评论数',
                type: 'bar',
                barWidth: '20',

                itemStyle: {
                    normal: {
                        show: true,
                        color:'#20aa92',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barGap: '100%',
                data: [csdn_comment_num],
                 label: {
                      formatter: "{c}人",
                show: true,
                position: 'top',
                textStyle: {
                    fontSize:12,
                    color: 'rgba(255,255,255,.6)',
                }
            },
            },
            {
                name: '文章数',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color:'#f4664e',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '20',
                data: [csdn_arcticles_num],
                 label: {
                       formatter: "{c}篇",
                show: true,
                position: 'top',
                textStyle: {
                    fontSize:12,
                    color: 'rgba(255,255,255,.6)',
                }
            },
            },
                {
                name: '点赞量',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color:'#0c93dc',
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '20',
                data: [csdn_good_num],
                 label: {
                      formatter: "{c}个",
                show: true,
                position: 'top',
                textStyle: {
                    fontSize:12,
                    color: 'rgba(255,255,255,.6)',
                }
            },
            },

        ]
    };

        option7 = {
          //  backgroundColor: '#00265f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '0',
           containLabel: true
        },
        xAxis: [{
            type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisLine: {
                show: true,
             lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
               //formatter: '{value} %'
                show:true,
                 textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1	)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                 show: false,
                lineStyle: {
                   color: "rgba(255,255,255,.1)",
                }
            }
        }],
        series: [{
            name: '2017年',
            type: 'line',
     //smooth: true,
            data: [2, 6, 3, 8, 5, 8],

            itemStyle: {
                normal: {
                    color:'#2f89cf',
                    opacity: 1,

                    barBorderRadius: 5,
                }
            }
        }
        ]
    };
            // 使用刚指定的配置项和数据显示图表。
//            myChart.setOption(option);
//            myChart2.setOption(option2);
            myChart3.setOption(option3);
            myChart4.setOption(option4);
            myChart5.setOption(option5);

            myChart7.setOption(option7);
            window.addEventListener("resize",function(){
//                myChart.resize();
                myChart7.resize();
//                myChart2.resize();
                myChart3.resize();
                myChart4.resize();
                myChart5.resize();

            });
    }
})



		
		
		


		









