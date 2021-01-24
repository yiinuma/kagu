
/* ====== ドロワメニュー ======*/
const body = document.querySelector('body');
const drawerBtn = document.querySelector('.js-hamburger--bt');
const drawer = document.querySelector('.js-hamburger');
const open = 'is-open';

drawerBtn.addEventListener('click', function () {
    drawerBtn.classList.toggle(open);
    drawer.classList.toggle(open);
    body.classList.toggle(open);
});

const mediaQueryList = window.matchMedia("(min-width:1024px)");
// イベントリスナー　
const listener = (event) => {
    // リサイズ時に行う処理
    if (event.matches) {
        // 1024px以上
        drawerBtn.classList.remove(open);
        drawer.classList.remove(open);
        body.classList.remove(open);
    }
}
// リスナー登録
mediaQueryList.addListener(listener);
// 初期化処理
listener(mediaQueryList);

