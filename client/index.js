document.addEventListener('DOMContentLoaded', () => {
    
    //Fetches random user ID token from server
    //Pre: true
    //Post: Random token is saved in session storage and shown on screen
    async function getToken() {
        const response = await fetch('https://forestry-app.herokuapp.com/api/getToken');
        const userID = await response.text();
        sessionStorage.setItem('token', userID);
        document.getElementById("token").innerHTML = "User ID: " + userID;
    } 
    getToken();

    //If the user hasn't started the form, the question index is set to the first position
    if(sessionStorage.getItem('started') == null){
        sessionStorage.setItem('index', 1);
    }

    //Fetches the number of questions that are stored in the form's question database
    //Pre: true
    //Post: The total number of questions of the form is saved in the session storage
    async function getNumImages() {
        const response = await fetch('https://forestry-app.herokuapp.com/api/getNumImages');
        const result = await response.text();
        sessionStorage.setItem('imageCount', result);
    }  
    getNumImages();

    const customID = document.getElementById("customID"); //custom user ID input element
    const btn = document.getElementById("Begin");         //Button that starts the form
    btn.onclick = function(){
        if(customID.value === '' || customID.value == null || customID.value.length != 6){
            console.log("normal ID");
        }
        else{
            sessionStorage.setItem('token', customID.value);
        }
        window.location.href = "./formpage.html";
    }
});