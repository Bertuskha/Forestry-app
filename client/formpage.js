document.addEventListener('DOMContentLoaded', () => {
    var allButtons = document.querySelectorAll('button[class^=small_btn]');
    console.log("Found", allButtons.length, "small buttons.");

    for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function() {
        var uid = sessionStorage.getItem('token');
        console.log("userID:", uid, "value:", this.id);
    });
}
});