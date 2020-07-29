

function print_text() {
    // 버튼7e.log($("#pineapple").text())
    //$("ul > li.myList")
    console.log($("ul > li[class]").text())

    console.log($("input[type = text]").val())

    console.log($("ol > li.myList:first").text())

    console.log($("ol > li.myList:nth-child(1)").text())

    console.log($("ol > li.myList:first + li").text())

    console.log($("ol > li.myList:last").text())

    $("input[type=text]").attr("size",10) //속성을 제어하는 method

}

function my_func() {

    // selectd box에서 과일이 바뀌면 실행되요 !
    // // 1. 선택한 과일이 어떤 과일인지 알아내야 해요 !
    // var fruit = $("select > option :selected").text()
    //
    // var my_list = $("ul > li")
    //
    // my_list.each(function(idx, item) {//console.log($(item).text())  // 반복해
    //     if  ($(item).text() == fruit) {
    //         $(item).css("color","red")}
    //     else
    //     {$(item).css("color","black")}
    //

}