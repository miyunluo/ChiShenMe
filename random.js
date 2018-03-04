var ix = 0;
var list0 = $("#list0").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen0 = $("#canteen0").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var list1 = $("#list1").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen1 = $("#canteen1").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var list2 = $("#list2").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen2 = $("#canteen2").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var list3 = $("#list3").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen3 = $("#canteen3").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var list4 = $("#list4").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen4 = $("#canteen4").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var list5 = $("#list5").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");
var canteen5 = $("#canteen5").val().replace(/ +/g, " ").replace(/^ | $/g, "").split(" ");

var list = list0;
var canteen = canteen0;

$(function () {
    var run = 0,
        heading = $("h1"),
        timer;

    $("#start").click(function () {
        if (!run) {
            heading.html(heading.html().replace("钦定了!", "吾日三省吾身，饔食？昼食？飧食？"));
            $(this).val("终止历史的行程");
            timer = setInterval(function () { 
                var myselect = document.getElementById("whichCanteen");
                var index = myselect.selectedIndex ;
                var option = myselect.options[index].value;
                //console.log(option);
                if(option == 0) list = list0, canteen = canteen0;
                if(option == 1) list = list1, canteen = canteen1;
                if(option == 2) list = list2, canteen = canteen2;
                if(option == 3) list = list3, canteen = canteen3;
                if(option == 4) list = list4, canteen = canteen4;
                if(option == 5) list = list5, canteen = canteen5;

                var r = Math.ceil(Math.random() * list.length),
                    food = list[r - 1];
                ix = r;
                $("#what").html(food);
                var rTop = Math.ceil(Math.random() * $(document).height()),
                    rLeft = Math.ceil(Math.random() * ($(document).width() - 50)),
                    rSize = Math.ceil(Math.random() * (37 - 14) + 14);
                $("<span class='temp'></span>").html(food).hide().css({
                    "top": rTop,
                    "left": rLeft,
                    "color": "rgba(0,0,0,." + Math.random() + ")",
                    "fontSize": rSize + "px"
                }).appendTo("body").fadeIn("slow", function () {
                    $(this).fadeOut("slow", function () {
                        $(this).remove();
                    });
                });
            }, 50);
            run = 1;
        } else {
           heading.html(heading.html().replace("吾日三省吾身，饔食？昼食？飧食？", "钦定了!"));
            $(this).val("不行，换一个");
            $("#what").append(" ");
            $("#what").append(canteen[ix - 1]);
            clearInterval(timer);
            run = 0;
        };
    });

    document.onkeydown = function enter(e) {
        var e = e || event;
        if (e.keyCode == 13) $("#start").trigger("click");
    };
});

i = 0;
$('#start').click(function(){
    i++;
    if(i >=12 ){
        $('#start').hide();
        $('#stop').show();
    }
})
$('#stop').click(function(){
    alert('都不吃？无可奉告！')
    $(this).hide();
})