$(document).ready(function() {
    <!--饼图-->
    $('.loader1').ClassyLoader({
        percentage: 70,//百分比 修改此处
        speed: 20,
        fontSize: '50px',
        diameter: 70,
        lineColor: '#3375B0',
        remainingLineColor: '#F7FDFE',
        lineWidth: 15,
        fontColor: '#F7FDFE',
        start: 'top'
    });
    $('.loader2').ClassyLoader({
        percentage: 30,//百分比 修改此处
        speed: 20,
        fontSize: '50px',
        diameter: 70,
        lineColor: '#3375B0',
        remainingLineColor: '#F7FDFE',
        lineWidth: 15,
        fontColor: '#F7FDFE',
        start: 'top'
    });
    <!--柱形图-->
    var AllCallData = echarts.init(document.getElementById('AllCallData'));
    var CallTimeData = echarts.init(document.getElementById('CallTimeData'));
    AllCallDataOption = {
        backgroundColor: '#252832',
        radius: '80%',
        color: ['#FBAD2E', '#74D530'],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#fff'
            },
            data: ['呼入话务量', '呼入接通量']
        },
        calculable: true,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: true,
                },
                axisLine: {
                    onZero: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                data: ['1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点'],

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
            }
        ],
        series: [
            {
                name: '呼入话务量',
                type: 'bar',

                barGap: 0,
                data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390]
            },
            {
                name: '呼入接通量',
                type: 'bar',
                data: [220, 182, 191, 234, 290, 320, 332, 301, 334, 390]
            },
        ]
    };
    CallTimeDataOption = {
        backgroundColor: '#252832',
        radius: '80%',
        color: ['#EF4B34', '#247AD9'],

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#fff'
            },
            data: ['当前呼入量', '今日溢出量']
        },
        calculable: true,
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: true,
                },
                axisLine: {
                    onZero: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                data: ['1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点'],

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#fff'
                    }
                },
            }
        ],
        series: [
            {
                name: '当前呼入量',
                type: 'bar',

                barGap: 0,
                data: [320, 332, 301, 334, 390, 121, 4554, 656, 767, 676]
            },
            {
                name: '今日溢出量',
                type: 'bar',
                data: [220, 182, 191, 234, 290, 332, 301, 334, 390, 12]
            },
        ]
    };
    AllCallData.setOption(AllCallDataOption);
    CallTimeData.setOption(CallTimeDataOption);

    <!--仪表盘-->
    var CallLossRate = echarts.init(document.getElementById('CallLossRate'));
    var SpilloverRate = echarts.init(document.getElementById('SpilloverRate'));
    CallLossRateOption = {
        backgroundColor: '#1b1b1b',
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        series: [
            {
                name: '呼损率',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                        width: 3,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 12,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,
                    },
                    offsetCenter: [0, '-30%']
                },
                detail: {
                    formatter: '{value}%',
                    fontSize: 12,
                },
                data: [{value: 40, name: '呼损率'}]
            },
        ]
    };
    SpilloverRateOption = {
        backgroundColor: '#1b1b1b',
        tooltip: {
            formatter: "{a} <br/>{c} {b}"
        },
        series: [
            {
                name: '溢出率',
                type: 'gauge',
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                        width: 3,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                splitLine: {           // 分隔线
                    length: 25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 12,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10,

                    },
                    offsetCenter: [0, '-30%']

                },
                detail: {
                    formatter: '{value}%',
                    fontSize: 12,
                    offsetCenter: [0, '40%']

                },
                data: [{value: 40, name: '溢出率'}]
            },
        ]
    };

    setInterval(function () {
        CallLossRateOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        SpilloverRateOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        CallLossRate.setOption(CallLossRateOption);
        SpilloverRate.setOption(SpilloverRateOption);
    }, 2000)

});