if(sessionStorage.getItem('valid') === "false"){
    window.location.href = "./index.html";
    sessionStorage.setItem('valid', true);
}
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

    
    const customID = document.getElementById("customID");
    const btn = document.getElementById("Begin");
    btn.onclick = function(){
        if(customID.value === '' || customID.value == null){
            console.log("normal ID");
        }
        else{
            sessionStorage.setItem('token', customID.value);
        }
        sessionStorage.setItem('valid', true);
        window.location.href = "./formpage.html";
    }
});