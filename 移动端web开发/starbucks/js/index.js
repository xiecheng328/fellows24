$(function(){
    $('.nav-menu img').on('click', function(){
        $('.overlay').addClass('actived');
        return false;
    });

    $('.nav-close img').on('click', function(){
       $('.overlay').removeClass('actived');
       return false;
    });

    // 轮播图
    var w = $('.slide-container img').width();
    $('.slide-container').css('width', function(){
        return 4 * w;
    });

    var nowIndex = 1;

    setInterval(function(){
        if(nowIndex == 4){
            nowIndex = 1;
            $('.slide-container').css({
                transition: 'none',
                transform: 'translateX(0px)'
            });
        }else{
            $('.slide-container').css({
                transition: 'transform .8s ease',
                transform: 'translateX(-'+ w * (nowIndex) +'px)'
            });
        }
        nowIndex++;

    }, 1500);


});