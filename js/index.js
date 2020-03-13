// 스크롤 위치 100 이상/이하 > header white클래스 추가/제거
window.onscroll = function(){
    var scrollPos = window.pageYOffset
    if (scrollPos>100){
        this.document.getElementById('header').classList.add('white')
    }else{
        this.document.getElementById('header').classList.remove('white')
    }
}

// 상단 유저 버튼 클릭시 로그인, 회원가입 레이어 fadeToggle
$('.user .btn').click(function(){
    $('.user .user_bx').fadeToggle()
})


