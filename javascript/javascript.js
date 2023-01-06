const userImage = document.querySelector('.user_image');
const username = document.querySelector('.username');
const userblog = document.querySelector('.blog');
const userlocation = document.querySelector('.location');
const userexperience = document.querySelector('.experience');
const inputText = document.querySelector('.input_text');
const searchbutton = document.querySelector('.button');
const error = document.querySelector('.error');

// This object represents a user
const userObject = {
    login: "",
    name: "",
    blog: "",
    location: "",
    bio: "",
    avatar_url: ""
};

// This function gets information of a user in JSON format as input and makes corresponding user and saves it to local storage
function saveUser(user) {
    // Create new user using userObject object
    let newUser = Object.create(userObject);
    newUser.login = user.login;
    newUser.name = user.name;
    newUser.bio = user.bio;
    newUser.blog = user.blog;
    newUser.location = user.location;
    newUser.avatar_url = user.avatar_url;
    // Save new user to local storage
    window.localStorage.setItem(newUser.login, JSON.stringify(newUser));
}

// This function sets the content of error part and makes it display on page
function setError(errorText){
    error.innerHTML = errorText;
    error.style.display = "block";
}

// This function sets the information on the html page and disapears the error on the page
function showUser(user) {
    if (error.style.display == "block") {
        error.style.display = "none";
    }
    userImage.setAttribute("src", user.avatar_url);
    username.innerHTML = user.name;
    userblog.innerHTML = user.blog;
    userlocation.innerHTML = user.location;
    let bio = user.bio.replace(/(?:\r\n)/g, '<br>');
    userexperience.innerHTML = bio;
}

// This function resets the information parts in the page
function resetInformation() {
    userImage.setAttribute("src", "./images/user.png");
    username.innerHTML = "Username";
    userblog.innerHTML = "Blog";
    userlocation.innerHTML = "Location";
    userexperience.innerHTML = "Experiences";
}

// This is the function which searches for the user in local storage or gets it from github server
async function searchUser(e) {
    e.preventDefault();
    let inputUsername = inputText.value;
    try {
        // Search the local storage to check if it's saved
        let user = JSON.parse(window.localStorage.getItem(inputUsername));
        console.log("LocalStorage: " + user);
        // If the user wasn't saved in local storage, we get it from gihthub
        if (user === null) {
            let response = await fetch(`https://api.github.com/users/${inputUsername}`);
            // If the status of the response is not 200, it means the user wasn't found and we have an error!
            if (response.status != 200) {
                setError("User does not exist!");
                resetInformation();
                return;
            }
            user = await response.json();
            console.log("Github: " + user);
            // Save the fetched user to local storage
            saveUser(user);
        }
        // Show the user's information in proper format
        showUser(user);
    } catch {
        setError("Network error occurred! Please try again");
        resetInformation();
        return;
    }
}


searchbutton.addEventListener('click', searchUser);
window.localStorage.clear();