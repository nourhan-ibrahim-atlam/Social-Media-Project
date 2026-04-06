// Check on localStetage
setupHome();

// Button
let loginBtn = document.getElementById("login-btn");
let  registerBtn = document.getElementById("register-btn")
let logOut = document.getElementById("logout");

// Events
loginBtn.addEventListener("click", onClickLogin);
registerBtn.addEventListener("click", onClickRegister);
logOut.addEventListener("click", onClickLogout);



// Login
function onClickLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const params = {
        "username" : username,
        "password" : password
    }
    axios.post("https://tarmeezacademy.com/api/v1/login" , params)
    .then((response) => {
        const user = response.data.user;
        const token = response.data.token;

        // Storage token & user
        localStorage.setItem("token" , token);
        localStorage.setItem("user" , JSON.stringify(user));

        // Change Home
        document.querySelector("#loginModal").style.display = "none";
        document.querySelector(".modal-backdrop").remove();

        // Setup Home
        location.reload();
        setupHome()
    })
    .catch((error) => {
        alert(error.response.data.message);
    });

}

// Register
function onClickRegister() {
    // User's Data
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const name = document.getElementById("register-name").value;
    const email = document.getElementById("register-email").value;
    const image = document.getElementById("register-image");
    

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image.files[0]);

    axios.post("https://tarmeezacademy.com/api/v1/register", formData)
    .then((response) => {
        let token = response.data.token;
        let user = response.data.user;

        // Storage in LocalStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Change Home
        document.querySelector("#registerModal").style.display = "none";
        document.querySelector(".modal-backdrop").remove();

        // Setup Home
        location.reload();
        setupHome();
    })
    .catch((error) => {
        alert(error.response.data.message);
    });
}

// Logout
function onClickLogout() {
    // Remove User Details
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Back To Home
    window.location = "index.html";

}

// SetupHome
function setupHome() {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));

    // Check User Logged in
    if (token == null) {
        
    } else {

        // Check Home
        // Hide (register & login) Buttons
        document.querySelector("#right-navbar button").style.display = "none";
        document.querySelector("#register").style.display = "none";

        // Change Buttons To Show Logout
        document.getElementById("right-navbar").innerHTML = `
            <img src="${user.profile_image}" alt="Profile-img" class="rounded-circle me-2" style="width: 40px; height: 40px;"> ${user.username}
            <button type="button" class="btn btn-outline-danger ms-3" id="logout">Log Out</button>
        `

        // Check add post
        if (document.querySelector(".add-post") == null) {
            
        } else {
            document.querySelector(".add-post").style.display = "flex";
        }
    }
}

// Current User
function getCurrentUser() {
    let user = null;
    const storageUser = localStorage.getItem("user");

    if (storageUser != null ) {
        user = JSON.parse(storageUser)
    }
    return user;
}