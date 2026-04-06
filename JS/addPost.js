// Variable
let createPost = document.getElementById("createPost-btn");

// Event
createPost.addEventListener("click", createNewPost);


// CreatePost
function createNewPost() {
    // Get Post's ID
    let postId = document.getElementById("post-id-input").value;

    // Check Create or Edit
    let isCreate = postId == null || postId == "";

    // Post Details
    const title = document.getElementById("postTitle").value;
    const body = document.getElementById("postBody").value;
    const image = document.getElementById("postImg");

    const formData = new FormData();
    formData.append("title" , title);
    formData.append("body" , body);
    formData.append("image", image.files[0]);
    
    let token = localStorage.getItem("token");

    // Check Create or Edit For Change URL
    let url = "";
    if (isCreate) {
        url = `https://tarmeezacademy.com/api/v1/posts`;

    } else {
        formData.append("_method" , "put")
        url = `https://tarmeezacademy.com/api/v1/posts/${postId}`;
    }
    
    // Main Request
    axios.post(url, formData, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then((response) => {
        
        // Hide Modal
        let modal = bootstrap.Modal.getInstance(document.getElementById("createPostModal"));
        modal.hide();
        
        // To Show My Post
        if (localStorage.getItem("isProfile")) {
            getUserPosts()
        } else {
            getPostes();
        }

        // Go To Top Page
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })

}