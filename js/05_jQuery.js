// jQuery CDN을 이용했기 때문에 jQuery Code를 사용할 수 있어요 !

// button을 클릭하면 아래의 함수가 호출되요 !!
function my_func() {
    // 0. jQuery를 공부할 때 가장 먼저 배워야 하는건 ... selector
    // 1. 전체 선택자 (universal selector)
    // $("*").css("color","red") // 모든 element를 선택..
    // 2. 태그 선택자(tag selector)
    //$("li").remove()// li만 선택해서 지움.
    // 3. 아이디 선택자( id selector )
    //$("#haha").text()      // 인자가 없으면 값을 알아오라는 의미
    //$("#haha").text("제주") // 인자가 있으면 값을 변경하라는 의미
    // 4. 클래스 선택자 ( class selector )
    //$(".region").css("background-color", "yellow") //클래스 끌어와서 변경
    // 5. 구조 선택자 ( 자식 선택자 후손 선택자 )
    // $("ol > * ") //ol의 자식으로 있는거 싹 다
    //$("ol > li").css("color","steelblue")//ol의 자식으로 있는거 li 만
    //$("div li").css("color","pink") //div 의 후손으로 있는 li, div + space + li
    // 6. 구조 선택자( 형제 선택자 )
    //$("#haha + li ").remove()//+ : 바로 다음에 나오는 형제 li를 찾아줘 !
    //$("#hong ~ li").css("color","red") // id : hong 뒤에 li인 모든것
    // 7. 속성 선택자
    //$("[id]").css("color", "blue") // id 속성을 가진 모든것
    //$("[id =haha]").css("color", "blue") // id가 haha인 모든것
    // 이 7가지를 조합하면 왠만한 element는 지정하는게 가능!!

}