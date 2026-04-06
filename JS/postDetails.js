const postId = localStorage.getItem("postId");

// Show post's Details
function showComments(id) {
    axios.get(`https://tarmeezacademy.com/api/v1/posts/${id}`)
    .then((response) => {

        let post = response.data.data;
        let postDetail = document.getElementById("posts");

        postDetail.innerHTML = `
            <h2>${post.author.username}post</h2>
            <div class="card post shadow my-3">
                <div class="card-header">
                    <div class="d-flex head-card align-items-center" onclick="goToProfile(${post.author.id})" style="cursor: pointer;">
                        <img src="${post.author.profile_image}" alt="user-img" class="rounded-circle">
                        <b>@${post.author.username}</b>
                    </div>
                </div>
                <div class="card-body">
                    <img src="${post.image}" alt="post1" class="w-100 post-img">
                    <span class="fw-light fs-6">${post.created_at}</span>
                    <h5 class="card-title mt-2">${post.title}</h5>
                    <p class="card-text">${post.body}</p>
                    <hr>
                    <div>
                        <i class="bi bi-pen"></i>
                        <span>(${post.comments_count}) Comments</span>
                    </div>
                    <hr>
                    <div class="comments mb-3">
                        <div class="mb-4">
                           ${getComments(post.comments)}
                        </div>
                    </div>
                    <div class="d-flex align-items-center" id="form">
                        <input type="text" class="form-control" d-inline-block me-2" placeholder="Add You Comment...">
                        <button class="btn btn-outline-success d-inline-block" id="send-comment">send</button>
                    </div>
                </div>
            </div>
        `;

        // Check Logged in 
        let token = localStorage.getItem("token");
        if (token == null) {
            document.getElementById("form").innerHTML = ""
        } else {
            
        }

        // Check have comments or not
        let comments = document.querySelector(".comments");

        if(comments.innerText == "") {
            document.querySelector(".comments").style.display = "none";
        }

        // Create Comment
        const sendComment = document.getElementById("send-comment");

        // Event
        sendComment.addEventListener("click" , function() {
            addComment(postId);
        });
    })
}

showComments(postId)

// Show Comments By Array
function getComments(comments) {

    // Create Array To Store Comment Details
    let myComment = comments.map(comment => {
        return [comment.author.profile_image, comment.author.username, comment.body];
    })
    
    // Loop For Comments Array
    myHtml = "";
    for (i = 0; i <= comments.length - 1; i++) {
        myHtml += `
            <div class="d-flex align-items-center mb-2">
                <img src="${myComment[i][0]}" alt="user-img" class="rounded-circle" width="40" height="40">
                <b class="ms-2">${myComment[i][1]}</b>
            </div>
            <p>${myComment[i][2]}</p>
        `
    }
    return myHtml;
};

// Add Comment
function addComment(id) {
    let commentInput = document.querySelector(".card-body input").value;

    // For Check User Logged in
    let token = localStorage.getItem("token");
    let params = {
        "body": commentInput
    }

    axios.post(`https://tarmeezacademy.com/api/v1/posts/${id}/comments`, params, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then((response) => {
        showComments(id);
    })
    .catch((error) => {
        let message = error.response.data.message;
        alert(message);
    })
}
