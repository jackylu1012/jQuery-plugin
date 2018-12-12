$(function(){
    ScrollReveal().reveal('.item', {
        // 延遲
        delay: 100,
        // 持續時間
        duration: 800,
        // 距離(每張圖片在啟始時的向下位移距離)
        distance: '30px',
        // 起源（每張圖片的預設位置）
        origin: 'bottom',
        // 動畫效果
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        // 重新啟動（動畫）
        reset: true,
        // 間隔(每張圖片出現的時間間隔)
        interval: 600,
        // 旋轉
        rotate: {
            x: 20,
            z: 20
        },
        // 縮放(起始值尺寸)
        scale: 0.85
    });
})