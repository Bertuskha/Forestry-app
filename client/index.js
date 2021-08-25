document.addEventListener('DOMContentLoaded', () => {
    
    async function getToken() {
        const response = await fetch('http://localhost:3001/api/getToken');
        const userID = await response.text();
        sessionStorage.setItem('token', userID);
        document.getElementById("token").innerHTML = "User ID: " + userID;
    }  
    getToken();

    async function getNumImages() {
        const response = await fetch('http://localhost:3001/api/getNumImages');
        const result = await response.text();
        sessionStorage.setItem('imageCount', result);
    }  
    getNumImages();

    const btn = document.getElementById("Begin");
    btn.onclick = function(){
        window.location.href = "./formpage.html";
    }
});