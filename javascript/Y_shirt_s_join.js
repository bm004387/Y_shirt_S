function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = ''; 
            var extraAddr = '';
            if (data.userSelectedType === 'R') { 
                addr = data.roadAddress;
            } else { 
                addr = data.jibunAddress;
            }
            if(data.userSelectedType === 'R'){
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraAddr += data.bname;
                }
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                if(extraAddr !== ''){
                    extraAddr = ' (' + extraAddr + ')';
                }
                document.getElementById("sample6_extraAddress").value = extraAddr;
            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            document.getElementById("sample6_detailAddress").focus();
        }
        // 부트스트랩 modal속성 구성
    }).open();
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
      })      
}
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