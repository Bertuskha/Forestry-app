document.addEventListener('DOMContentLoaded', () => {
    
    async function getToken() {
        const response = await fetch('http://localhost:3001/api/getToken');
        const userID = await response.text();
        sessionStorage.setItem('token', userID);
        document.getElementById("token").innerHTML = "User ID: " + userID;
    }  
    getToken();

    const btn = document.getElementById("Begin");
    btn.onclick = function(){
        window.location.href = "./formpage.html";
    }
});