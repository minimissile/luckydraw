var code = [];
new Vue({
    el: '#index',
    data: {
        signList: ["1311111111","1311111111","1311111111","1311111111","1311111111","1311111111",],//报名名单,
        myNumber: "",
        code: [],
        arr: [],
    },
    components: {},
    created(){
        // this.signupList();
    },
    mounted(){
    },
    methods: {
        // // 报名管理
        // signupList: function () {
        //     var _this = this;
        //     var id = getQueryString("id");
        //     ajax('get', '/api/databag/signlist', {
        //         viewPage: 1000,
        //         actId: id
        //     }, function (res) {
        //         if (res.meta.code == "00") {
        //             _this.signList = res.data.dataList;
        //             _this.code = res.data.dataList;
        //             console.log(_this.code);
        //             _this.totalCountbm = res.data.total;
        //         }
        //     });
        // },

        // 开始
        start(){
            var _this = this;

            if ($("#prize_btn").val() == 0) {
                if ($("#set_grade").val() == "选择奖等") {
                    alert("请选择奖等");
                    return;
                } else if ($("#prizeCount").val() == "") {
                    alert("请输入中奖人数");
                    return;
                } else if ($("#prizeCount").val() > 10) {
                    alert("单次抽奖人数不能超过10人");
                    return;
                } else if ($("#prizeMoney").val() == "") {
                    alert("请输入中奖金额");
                    return;
                } else {
                    $("#prize_btn").val(1);
                    // 中奖人数
                    var num = $("#prizeCount").val();

                    _this.myNumber = setInterval(function () {
                        _this.showRandomNum(num);
                    }, 30);

                }
            } else {

                $("#prize_btn").val(0);
                clearInterval(_this.myNumber);

                if ($('#set_grade').val() == '一等奖') {
                    $('.axb1 p').html('一等奖');
                    var li = '';

                    for (var i = 0; i < code.length; i++) {
                        var index = code[i];
                        li += '<li>' + index + '</li>';
                    }

                    $('.axb1 ul').html(li)
                }
                if ($('#set_grade').val() == '二等奖') {
                    $('.axb2 p').html('二等奖');

                    var li = '';

                    for (var i = 0; i < code.length; i++) {
                        var index = code[i];
                        li += '<li>' + index + '</li>';
                    }

                    $('.axb2 ul').html(li)
                }

                if ($('#set_grade').val() == '三等奖') {
                    $('.axb3 p').html('三等奖');
                    var li = '';
                    for (var i = 0; i < code.length; i++) {
                        var index = code[i];
                        li += '<li>' + index + '</li>';
                    }

                    $('.axb3 ul').html(li)
                }
            }
        },


        showRandomNum: function (num) {
            var _this = this;
            var li = "";

            var newArr = [];

            _this.code.forEach(function (item, index) {
                newArr.push(item.phone)
            })

            for (var i = 0; i < newArr.length; i++) {
                _this.arr[i] = i;
            }
            _this.arr.sort(function () {
                return 0.5 - Math.random();
            });
            code = [];
            for (var i = 0; i < num; i++) {
                var index = _this.arr[i];
                li += '<li>' + newArr[index] + '</li>';
                code.push(newArr[index]);
            }
            $(".prize_list ul").html(li);
        },
    }
});

var ran = 0;
var myNumber;
var arr = [];
// var id = getQueryString("id");
var code = [];

$(function () {
    //回车键控制开始和停止
    $(document).keydown(function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13) {
            $(".start").click();
        }
    });

    $("#set_grade").change(function () {
        $(".prize_grade span").text($(this).val());
    });

    $("#prizeMoney").keyup(function () {
        $(".prize_grade b").text($(this).val());
    });
});
