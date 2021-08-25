const imageCount = sessionStorage.getItem('imageCount');
let imageArray = [];

for(var i = 0; i < imageCount; i++){
    imageArray[i] = i+1;
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

let imageIndex = 0;
imageArray = shuffle(imageArray);
console.log(imageArray);

document.addEventListener('DOMContentLoaded', () => {
    var allButtons = document.querySelectorAll('button[class^=small_btn]');
    console.log("Found", allButtons.length, "small buttons.");

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            var uid = sessionStorage.getItem('token');
            console.log("userID:", uid, "value:", this.id);
            sendData(uid, this.id);
            getImages();
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
    
    async function getImages(){
        let images = {imageIndex: imageArray[imageIndex]};
        let response = await fetch('http://localhost:3001/api/getImages', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images)
        });
        let result = await response.json();
        console.log(result);
        imageIndex++;
    }
   
});