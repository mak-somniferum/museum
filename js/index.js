// 스크롤 위치 100 이상/이하 > header white클래스 추가/제거
window.onscroll = function(){
    var scrollPos = window.pageYOffset
    if (scrollPos>100){
        this.document.getElementById('header').classList.add('white')
    }else{
        this.document.getElementById('header').classList.remove('white')
    }
}

$(window).scroll(function(){
    var scrollPos2 = $(window).scrollTop()
    if (scrollPos2>3300){
        $('.books').animate({'opacity':'1','top':'0'})
    }
})

board()

// 상단 유저 버튼 클릭시 로그인, 회원가입 레이어 fadeToggle
$('.user .btn').click(function(){
    $('.user .user_bx').fadeToggle()
})
// 퀵메뉴
$('#qlink a').click(function(){
    var link = $(this).attr('href')
    var linkTop = $(link).offset().top
    $('html').animate({scrollTop:linkTop-110}, 700)
})


// 모바일 메뉴 버튼 클릭시 모바일 메뉴 slideToggle
$('.m_menu_btn').click(function(){
    $(this).toggleClass('change')
    $('#m_gnb').slideToggle()
})

$(window).resize(function(){
    var w = $(window).width()
    // window 길이가 990보다 클 때 모바일 메뉴 닫기
    if(w>990){
        $('#m_gnb').slideUp()
        $('.m_menu_btn').removeClass('change')
    }

    board()
})

// 하단 게시판
function board(){
    var w = $(window).width()
    if(w<=990){
        $('.board .tabs ul li').first().find('a').addClass('active')
        $('.board .tab_cont>ul>li').hide()
        $('.board .tab_cont>ul>li').first().show()

        var listH = $('.board .tab_cont>ul>li').height()
        $('.board .tab_cont>ul').height(listH+40)

        $('.board .tabs ul li').click(function(){
            var idx = $(this).index()
            $('.board .tabs ul li a').removeClass('active')
            $(this).find('a').addClass('active')
            $('.board .tab_cont>ul>li').hide()
            $('.board .tab_cont>ul>li').eq(idx).show()
            return false
        })
    }else {
        $('.board .tabs ul li a').removeClass('active')
        $('.board .tab_cont>ul>li').show()
    }
}

// .contest_art 이전 수상작 둘러보기

$('.content button').click(function(){
    $('.contest_art').fadeToggle().css({'display':'flex'})
})

//book_slide

$('.next').click(function(){
    $('.book_wrap').animate({marginLeft:'-200%'},function(){
        $('.book_wrap .book_slide').first().appendTo('.book_wrap')
        $('.book_wrap').css({marginLeft:'-100%'})
    })
})

$('.prev').click(function(){
    $('.book_wrap').animate({marginLeft:'0%'},function(){
        $('.book_wrap .book_slide').last().prependTo('.book_wrap')
        $('.book_wrap').css({marginLeft:'-100%'})
    })
})

//book_slide click 시

$('.book_slide').click(function(){
    var idx = $(this).index()
    console.log(idx)
    $('.book_deta li').slideUp()
    $('.book_deta li').eq(idx).slideDown().css({'display':'flex'})
})

//worldArt slide

