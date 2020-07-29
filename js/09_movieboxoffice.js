function call_ajax1() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는 게 아니라 enter key 일 경우에만 처리
    //if(event.keyCode ==13){
    // AJAX call을 이용해서 데이터를 받아오는 코드가 나오면 되요 !!
    // alert("엔터가 입력되었어요 !!")
    // 이 부분은 월요일날 작성하도록 해요 !!

//    if(event.keyCode === 13) {
        //만약 입력된 key가 enter key이면 이 부분을 수행하게 되요 !
        // 서버쪽 프로그램을 호출해서 결과를 받아와요 !
        // jQuery를 이용해서 AJAX 처리를 해 보아요 !!
        // ajax의 인자로 javascript 객체를 넣어줘요 !
        // javascript의 객체는 =>{ key : value, key : value, ...}
        // data : 서버프로그램에게 넘겨줄 데이터들...

    search_date = $("input[type=date]").val()
    search_date = search_date.replace(/-/g,"")

        $.ajax({

            async: true, // 비동기 방식의 호출(default)
            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
            data: {
                key: "e6adc585d2481b2d2bcaff29cf4f6406",
                targetDt: search_date

            },
            type: "GET",
            timeout: 3000,
            dataType: "json",   // 결과 JSON을 JavaScript 객체로 변환.

            success: function (result) {
                $("tbody").empty()
                console.log(result.boxOfficeResult.dailyBoxOfficeList[0].rank)

                $.each(result.boxOfficeResult.dailyBoxOfficeList, function (idx,item) {

                    var tr = $("<tr></tr>")
                    var rankTd = $("<td></td>").text(item.rank)
                    var nameTd = $("<td></td>").text(item.movieNm)
                    var totalsaleTd = $("<td></td>").text(item.salesAcc)
                    var totalpersonTd = $("<td></td>").text(item.audiAcc)
                    var viewBtn =$("<input /> ").attr("type","button").attr("value","상세보기")
                    //var my_movieCd = item.movieNm
                    viewBtn.on("click",function () {
                        $.ajax({
                            async: true,
                            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
                            data: {
                                key: "e6adc585d2481b2d2bcaff29cf4f6406",
                                movieCd: item.movieCd
                            },
                            type: "GET",
                            timeout: 3000,
                            dataType: "json",

                            success: function(result){

                                var boxresult = result.movieInfoResult.movieInfo
                                var genres = $('<td></td>')
                                var actor = $('<td></td>')
                                var director = $('<td></td>')
                                for(i=0;i<boxresult.actors.length;i++){
                                    actor.append(boxresult.actors[i].peopleNm + " ")
                                }
                                for(j=0;j<boxresult.genres.length;j++){
                                    genres.append(boxresult.genres[j].genreNm + " ")
                                }
                                for(q=0;q<boxresult.directors.length;q++){
                                    director.append(boxresult.directors[q].peopleNm + " ")
                                }

                                var mov_info = "영화 제목 : " + boxresult.movieNm+ "\n" +
                                    "영화 제작도 : " + boxresult.openDt + "\n" +
                                    "영화 장르 : " + genres.text() +"\n" +
                                    "영화 감독 : " + director.text() + "\n" +
                                    "영화 배우 : " + actor.text()

                                alert(mov_info)

                            }
                        })
                    })

                    $.ajax({

                        async : false , //동기 or 비동기
                        url : "https://dapi.kakao.com/v2/search/image",//호출할 서버쪽 프로그램 URL
                        data : {
                            query : item.movieNm + " 포스터",
                            sort : "accuracy"
                        },
                        beforeSend : function(xhr){
                            xhr.setRequestHeader("Authorization",
                                "KakaoAK 68bcc4497b16f02c375db3b0c548d4f4")
                        },
                        type : "GET",
                        timeout : 3000,
                        dataType : "json",

                        success : function (result) {
                            var img_list = result.documents
                            img_url = img_list[0].thumbnail_url

                            // var img = $("<img />").attr("src",)
                            //post_td.append(img)
                            //$("ul").append(li)
                        },


                    })
                    var post_td=$("<td></td>")
                    var img_td = $("<img />").attr("src", img_url)
                    post_td.append(img_td)


                    tr.append(rankTd)
                    tr.append(post_td)
                    tr.append(nameTd)
                    tr.append(totalsaleTd)
                    tr.append(totalpersonTd)
                    tr.append(viewBtn)
                    $("tbody").append(tr)

                })
            },
            error: function (error) {
                alert("서버 호출 실패!!")
            }

        })
   // }

}

