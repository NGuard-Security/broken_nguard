const countDownTimer = (selector, date) => {
    var _vDate = new Date(date);
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distDt = _vDate - now;

        if (distDt < 0) {
            clearInterval(timer);
            document.querySelector(selector).textContent = "카운트 다운이 종료 되었습니다!";
            return;
        }

        var days = Math.floor(distDt / _day);
        var hours = Math.floor((distDt % _day) / _hour);
        var minutes = Math.floor((distDt % _hour) / _minute);
        var seconds = Math.floor((distDt % _minute) / _second);

        if (days <= 0) {
            document.querySelector(selector).querySelector("span:nth-child(1)").style = "display: none;";
        } else {
            document.querySelector(selector).querySelector("span:nth-child(1)").style = "";
        }

        if (hours <= 0) {
            document.querySelector(selector).querySelector("span:nth-child(2)").style = "display: none;";
        } else {
            document.querySelector(selector).querySelector("span:nth-child(2)").style = "";
        }

        if (minutes <= 0) {
            document.querySelector(selector).querySelector("span:nth-child(3)").style = "display: none;";
        } else {
            document.querySelector(selector).querySelector("span:nth-child(3)").style = "";
        }

        document.querySelector(selector).querySelector("span:nth-child(1)").textContent = days + "일";
        document.querySelector(selector).querySelector("span:nth-child(2)").textContent = hours + "시간";
        document.querySelector(selector).querySelector("span:nth-child(3)").textContent = minutes + "분";
        document.querySelector(selector).querySelector("span:nth-child(4)").textContent = seconds + "초";
    }

    showRemaining();

    timer = setInterval(showRemaining, 1000);
};
