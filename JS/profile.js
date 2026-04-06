localStorage.setItem("isProfile" , true);
// User ID
let user = JSON.parse(localStorage.getItem("user"));
let userId = "";

// Check User Profile  
if (localStorage.getItem("profileId")) {
    userId = localStorage.getItem("profileId");
    localStorage.removeItem("profileId");
} else {
    userId = user.id;
}


// Get Profile Details
function getProfileDetails(id) {
    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}`)
    .then((response) => {
        let userDetails = response.data.data;

        // Title For Page
        document.title = `M&N Media || ${userDetails.name}`;

        // User Details
        document.getElementById("user-details").innerHTML = `
            <div class="d-md-flex d-sm-block align-content-center p-5">
                <div class="user-detalis-content-info d-flex">
                    <img src="${userDetails.profile_image}" alt="Prifile" class="w-25 border border-black border-2 rounded-circle p-2 me-3 mb-md-0 mb-2">
                    <div class="d-flex flex-column justify-content-evenly">
                        <b>${userDetails.email}</b>
                        <b>${userDetails.name}</b>
                        <b>${userDetails.username}</b>
                    </div>
                </div>
                <div class="user-details-content-count me-5">
                    <div class="d-flex align-items-end mb-3">
                        <p class="me-1 fs-2">
                            ${userDetails.posts_count}
                        </p>
                        <span class="text-secondary pb-3">posts</span>
                    </div>
                    <div class="d-flex align-items-end mb-3">
                        <p class="me-1 fs-2">
                            ${userDetails.comments_count}
                        </p>
                        <span class="text-secondary pb-3">comments</span>
                    </div>
                </div>
            </div>
        `;

        // User's Post
        document.getElementById("profile-name").innerHTML = `
            ${userDetails.username}Posts
        `
    })
}

getProfileDetails(userId)

// Get User Posts 
function getUserPosts(id = userId) {
    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}/posts`)
    .then((response) => {
        let userPosts = response.data.data;

        // Get User Posts HTML
        document.getElementById("user-posts").innerHTML = "";
        for (post of userPosts) {

             // Check Title Of Post Exsit or Not
            function postTitle(title) {
                if (title == null) {
                    return "";
                } else {
                    return title;
                }
            }

            // Show or Hide (edit) btn
            let user = getCurrentUser();
            let isMyPost = user != null && post.author.id == user.id;
            let editBtnContent = "";
            let deleteBtnContent = "";


            // if post own to user --> show buttons
            if (isMyPost) {
                editBtnContent = `
                    <button class=" btn btn-outline-success" 
                       onclick="editPost('${encodeURIComponent(JSON.stringify(post))}')">
                       edit
                    </button>`

                deleteBtnContent = `
                    <button class=" btn btn-outline-danger"
                       onclick="deletePost('${encodeURIComponent(JSON.stringify(post.id))}')">
                       delete
                    </button>`
            }

            // User's Posts
            document.getElementById("user-posts").innerHTML += `
                <div class="card post shadow my-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between head-card align-items-center">
                            <div class="d-flex head-card align-items-center">
                                <img src="${post.author.profile_image}" alt="user-img" class="rounded-circle">
                                <b>@${post.author.username}</b>
                            </div>
                            <div>
                                ${editBtnContent}
                                ${deleteBtnContent}
                            </div>
                        </div>
                    </div>
                    <div class="card-body" onclick="goToPostDetails(${post.id})" style="cursor: pointer;">
                        <img src="${post.image}" alt="post1" class="w-100 post-img">
                        <span class="fw-light fs-6">${post.created_at}</span>
                        <h5 class="card-title mt-2">${postTitle(post.title)}</h5>
                        <p class="card-text">${post.body}</p>
                        <hr>
                        <div>
                            <i class="bi bi-pen"></i>
                            <span>(${post.comments_count}) Comments</span>
                        </div>
                    </div>
                </div>
            `
        }
        
    })
    .catch((error) => {
        alert(error.response.data.message);
    });
}

getUserPosts();