const userID = sessionStorage.getItem('token');
const imageCount = sessionStorage.getItem('imageCount');

async function getIndex (userID){
    let requestData = {userID: userID};
    let response = await fetch('https://forestry-app.herokuapp.com/api/getIndex', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    });
    let result = await response.json();
    console.log(result);
    return result.index;
}

let imageIndex = await getIndex(userID);
console.log ("image index", imageIndex);

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
                console.log("userID:", userID, "value:", this.id);
                sendData(this.id);
                if(Number(imageIndex) < Number(imageCount)){
                    getImages();
                    setIndex();
                }
                else if(imageIndex === imageCount){
                    getImages();
                    setIndex();
                }
                else{
                    active = false;
                    wait(1000).then(() => window.location.href = "./endpage.html");
                }
            }
        });
    }
    
    async function sendData (value){
        let data = {userID: userID, questionID: imageArray[imageIndex-1], value:  value};
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
        let images = {imageIndex: imageIndex};
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
        console.log("Index", imageIndex, "length", imageArray.length);
    }

    async function setIndex(){
        let index = {imageIndex: imageIndex};
        let response = await fetch('https://forestry-app.herokuapp.com/api/setIndex', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(index)
        });
        let result = await response.json();
        console.log(result);
        imageIndex++;
    }
});