$(document).ready(function(){
    $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').focus()
         })      
    // scrollTop속성 적용하여 .top_menu에서 떠났을 때, on 클래스 추가, .top_menu에 돌아왔을 때, on 클래스 제거
    $(document).ready(function(){
        $(window).scroll(function(){
            if($(this).scrollTop()> $(".top_menu").height()){
                $("#top img").addClass("on")
            }else{
                $("#top img").removeClass("on")
            }
        })
    })
})