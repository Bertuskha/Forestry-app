document.addEventListener('DOMContentLoaded', () => {
    
    async function getToken() {
        const response = await fetch('https://forestry-app.herokuapp.com/api/getToken');
        const userID = await response.text();
        sessionStorage.setItem('token', userID);
        document.getElementById("token").innerHTML = "User ID: " + userID;
    }  
    getToken();

    async function getNumImages() {
        const response = await fetch('https://forestry-app.herokuapp.com/api/getNumImages');
        const result = await response.text();
        sessionStorage.setItem('imageCount', result);
    }  
    getNumImages();

    sessionStorage.setItem('valid', true);

    const btn = document.getElementById("Begin");
    btn.onclick = function(){
        window.location.href = "./formpage.html";
    }
});