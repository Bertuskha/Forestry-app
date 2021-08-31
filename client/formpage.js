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
    if(sessionStorage.getItem('valid') === 'false'){
        window.location.href = './index.html'
    }
    sessionStorage.setItem('valid', false)
    let active = true;
    const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));
    getImages();
    var allButtons = document.querySelectorAll('button[class^=small_btn]');
    console.log("Found", allButtons.length, "small buttons.");
    var leftIMGContainer = document.getElementById('leftIMG');
    var rightIMGContainer = document.getElementById('rightIMG');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', async function() {
            if(active === true){
                var uid = sessionStorage.getItem('token');
                console.log("userID:", uid, "value:", this.id);
                sendData(uid, this.id);
                if(Number(imageIndex) < Number(imageCount)){
                    getImages();
                }
                else if(imageIndex === imageCount){
                    getImages();
                }
                else{
                    active = false;
                    wait(1000).then(() => window.location.href = "./endpage.html");
                }
            }
        });
    }
    
    async function sendData(uid, value){
        let data = {userID: uid, questionID: imageArray[imageIndex-1], value:  value};
        let response = await fetch('https://forestry-app.herokuapp.com/api/sendData', {
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
        let response = await fetch('https://forestry-app.herokuapp.com/api/getImages', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(images)
        });
        let result = await response.json();
        leftIMGContainer.src = result.leftIMG;
        rightIMGContainer.src = result.rightIMG;
        console.log(result);
        imageIndex++;
        console.log("Index", imageIndex, "length", imageArray.length);
    }
});