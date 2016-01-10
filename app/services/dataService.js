"use strict";

angular.module('myApp.services.dataService', [])
    .service('data', function () {
        /********* Constants **********/
        this.RATE = 400;
        this.RATE_TOOLS = 100;

        this.BASE_HOUR = 3;
        this.ROOM_HOUR = 0.5;
        this.EXTRA_HOUR = 1;

        /********* Calcs ************/
        this.customHours = null;

        this.hours = function () {
            // base hour + rooms
            var hours = this.BASE_HOUR +
                Math.max(0, this.rooms - 1) * this.ROOM_HOUR +
                Math.max(0, this.bathRooms - 1) * this.ROOM_HOUR;

            // extras
            for (var i = 0;i < this.extras.length;i++) {
                var extra = this.extras[i];
                hours += extra.selected ? this.EXTRA_HOUR : 0;
            }

            // squares
            hours += this.squaresSelected.addhr;

            return hours;
        }.bind(this);

        this.subtotal = function () {
            return this.hours() * this.RATE;
        }.bind(this);

        this.total = function () {
            return this.subtotal() + (this.tools==1 ? this.RATE_TOOLS : 0);
        }.bind(this);

        /********* Step 1 *********/
            // 房間數量
        this.rooms = 1;
        this.bathRooms = 1;

        // 加時服務
        this.extras = [
            {
                name: "衣物清洗、曬",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon1.png",
                selected: false
            },
            {
                name: "窗戶內部清潔",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon2.png",
                selected: false
            },
            {
                name: "陽台清理",
                price: 400,
                img: "http://www.jackercleaning.com/Assets/img/icon3.png",
                selected: false
            }
        ];

        // 有無寵物
        this.pets = {
            cat: false,
            dog: false,
            others: false
        };

        // 服務
        this.services = [
            {addhr: 0, val: '訂製禮服'},
            {addhr: 0.5, val: '禮服租賃'},
            {addhr: 1, val: '主婚人禮服租賃'},
            {addhr: 1.5, val: '婚紗照拍攝'},
            {addhr: 2, val: '結婚包套'},
            {addhr: 2.5, val: '巴黎海外婚攝'},
            {addhr: 3, val: '新娘秘書造型設計'},
            {addhr: 3.5, val: '婚禮現場攝影｜錄影'},
            {addhr: 4, val: '孕婦照拍攝'},
            {addhr: 4.5, val: '新生兒拍攝'},
            {addhr: 4.5, val: '其他'}
        ];
        this.servicesSelected = this.services[0];

        //來源
        this.sources = [
            {addhr: 0, val: '非常婚禮Verywed'},
            {addhr: 0.5, val: 'Facebook'},
            {addhr: 1, val: '新娘物語'},
            {addhr: 1.5, val: '朋友推薦'},
            {addhr: 2, val: 'Google搜尋'},
            {addhr: 2.5, val: 'Blog'},
            {addhr: 3, val: '電視報紙新聞媒體報導'},
            {addhr: 3.5, val: '雜誌報導'},
            {addhr: 4, val: '其他'}
        ];
        this.sourcesSelected = this.sources[0];

        // 樓中樓
        this.entresol = false;

        // 清潔用品
        this.tools = 1;

        /********* Step 2 *********/
        // 打掃地址
        this.address = {
            postal: "111",
            city: "台北市",
            district: [
                {name:'中正區', postal: '100'}, {name:'大同區', postal: '103'}, {name:'中山區', postal: '104'}, {name:'松山區', postal: '105'}, {name:'大安區', postal: '106'}, {name:'萬華區', postal: '108'}, {name:'信義區', postal: '110'}, {name:'士林區', postal: '111'}, {name:'北投區', postal: '112'}, {name:'內湖區', postal: '114'}, {name:'南港區', postal: '115'}, {name:'文山區', postal: '116'},
            ],
            road: ""
        };
        this.address.districtSelected = this.address.district[0];

        this.name = "Peter Chung";

        this.phone = "0972146598";

        this.email = "touhonoob@gmail.com";

        /********** Step 3 ************/
        this.calendarSelected = null;

        this.timeSlots = [
            {text: '09:00'}, {text: '14:30'}, {text: '15:00'}, {text: '15:30'}, {text: '16:00'}, {text: '16:30'}, {text: '17:00'}, {text: '17:30'}, {text: '18:00'}, {text: '18:30'}
        ];
        this.timeSlotSelected = this.timeSlots[0];
    });