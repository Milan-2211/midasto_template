var header, currentPos;

header = document.getElementsByClassName('navigation-box')[0];

window.onscroll = function() {
    currentPos = window.pageYOffset;
    if (currentPos == '0') {
        header.classList.remove('active-scroll');
    } else {
        header.classList.add('active-scroll');
    }
    //console.log(currentPos)
}

var burgerMenu, navigation;

burgerMenu = document.getElementsByClassName('burger__menu')[0];
navigation = document.getElementsByClassName('navigation-box')[0];


burgerMenu.onclick = function() {


    if (navigation.classList[1] == 'burger__menu-active') {
        navigation.classList.remove('burger__menu-active');
    } else {
        navigation.classList.add('burger__menu-active');
    }

}