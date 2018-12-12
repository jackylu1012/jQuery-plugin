$(function(){

    $('#play').attr('disabled', 'disabled');
    // $('.content').vTicker();

    function play(){
        $('.content').vTicker('init',{
            // 每則文字滾動速度
            speed: 1000,
            // pause: 1000,
            // 滑鼠滑入時停止
            mousePause: true,
            // 每次顯示文字數量
            showItems: 1,
            // 文字的內距
            padding: 0
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