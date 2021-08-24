document.addEventListener('DOMContentLoaded', () => {
    var allButtons = document.querySelectorAll('button[class^=small_btn]');
    console.log("Found", allButtons.length, "small buttons.");

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            var uid = sessionStorage.getItem('token');
            console.log("userID:", uid, "value:", this.id);
            sendData(uid, this.id);
        });
    }

    async function sendData(uid, value){
        let data = {userID: uid, value:  value};
        let response = await fetch('http://localhost:3001/api/sendData', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let result = await response.json();
        console.log(result);
    }
});