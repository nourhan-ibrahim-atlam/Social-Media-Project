// Pagination //
let currentPage = 1;
let lastPage;

// Infinite Scroll
const handleInfiniteScroll = () => {
  const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;
    if (endOfPage && currentPage < lastPage) {
        
        currentPage = currentPage + 1;
        getPostes(false , currentPage + 1);
    }
};


// Events
window.addEventListener("scroll", handleInfiniteScroll);

// End Pagination //

// User in Home To Remove isProfile
localStorage.removeItem("isProfile");

// Check User Has Profile or Not
if(!localStorage.getItem("token")) {
    document.getElementById("profile").removeAttribute("href");
}

// GET Posts
window.getPostes = function(reload = true , page = 1) {
    axios.get(`https://tarmeezacademy.com/api/v1/posts?page=${page}`)
    .then((response) => {
        let posts = response.data.data;

        // Pagination
        lastPage = response.data.meta.last_page;
        if(reload) {
            document.getElementById("posts").innerHTML = "";
        }
        
        // Posts
        for (let post of posts) {
            let tags = post.tags;

            // Check Title Of Post Exist Or Not
            function postTitle(title) {
                if (title == null) {
                    return "";
                } else {
                    return title;
                }
            }

            // Show or Hide (edit & delete) Buttons
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


            // Show Posts
            document.getElementById("posts").innerHTML += `
                <div class="card post shadow my-3">
                    <div class="card-header">
                        <div class="d-flex justify-content-between head-card align-items-center">
                            <div onclick="goToProfile(${post.author.id})" style="cursor: pointer;">
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
                        <h5 class="card-title mt-2 post-title">${postTitle(post.title)}</h5>
                        <p class="card-text">${post.body}</p>
                        <hr>
                        <div>
                            <i class="bi bi-pen"></i>
                            <span>(${post.comments_count}) Comments</span>
                            <span>${getTags(tags)}</span>
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

// Get Tags
function getTags(tags) {
    let myTag = tags.map(tag => tag.name);
    
    // Loop For In Tags Array
    let myHtml = "";
    for (let i = 0 ; i <= myTag.length - 1 ; i++) {
        let myTags = myTag[i];
        myHtml += `<span class="rounded-pill ms-3 py-1 px-3 tag text-white">${myTags}</span>`;
    }

    // Check Post Has Tags or Not
    if (myHtml.textContent == "undefined") {
        myHtml = "";
    }
    return myHtml;
}

// Create Post
function createPosts() {
  
    // Modal Details 
    document.getElementById("post-id-input").value = "";
    document.getElementById("createPost-btn").innerHTML = "Create";
    document.getElementById("post-modal-title").innerHTML = "Create New Post";
    document.getElementById("postTitle").value = "";
    document.getElementById("postBody").value = "";
    // Get Modal
    let postModal = new bootstrap.Modal(document.getElementById("createPostModal") , {})
    postModal.toggle();
}

getPostes(); 