$(function(){

    $('#play').attr('disabled', 'disabled');
    // $('.content').vTicker();

    function play(){
        $('.content').vTicker('init',{
            speed: 400,
            pause: 1000,
            mousePause: false,
            showItems: 1,
            padding: 30
        });
    }

    // 暫停
    $('#pause').click(function() {
        $('.content').vTicker('pause', true);
        $(this).attr('disabled', 'disabled');
        $('#stop').removeAttr('disabled');
        $('#play').removeAttr('disabled');
    });
    
    // 停止
    $('#stop').click(function() {
        $('.content').vTicker('stop');
        $(this).attr('disabled', 'disabled');
        $('#pause').removeAttr('disabled');
        $('#play').removeAttr('disabled');
    });

    // 播放
    $('#play').click(function() {
        $(this).attr('disabled', 'disabled');
        $('#pause').removeAttr('disabled');
        $('#stop').removeAttr('disabled');
        $('.content').removeClass('paused');
        play();
    });

    play();
});