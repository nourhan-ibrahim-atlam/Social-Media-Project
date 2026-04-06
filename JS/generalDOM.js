// Exist (navbar & modal) in any page
let modals = document.getElementById("modals");
let navbar = document.getElementById("navbar");

// Modals HTMl
modals.innerHTML = `
    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fs-3" id="exampleModalLabel">Login</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="login-username" class="col-form-label">Username:</label>
                            <input type="text" class="form-control" id="login-username">
                        </div>
                        <div class="mb-3">
                            <label for="login-password" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="login-password">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="exampleModal">Close</button>
                    <button type="button" class="btn btn-success" id="login-btn">Login</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Register Modal -->
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fs-3" id="exampleModalLabel">Register</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="register-image" class="col-form-label">Choose image:</label>
                            <input type="file" class="form-control" id="register-image">
                        </div>
                        <div class="mb-3">
                            <label for="register-username" class="col-form-label">Username:</label>
                            <input type="text" class="form-control" id="register-username">
                        </div>
                        <div class="mb-3">
                            <label for="register-password" class="col-form-label">Password:</label>
                            <input type="password" class="form-control" id="register-password">
                        </div>
                        <div class="mb-3">
                            <label for="register-name" class="col-form-label">Name:</label>
                            <input type="text" class="form-control" id="register-name">
                        </div>
                        <div class="mb-3">
                            <label for="register-email" class="col-form-label">Email:</label>
                            <input type="email" class="form-control" id="register-email">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="exampleModal">Close</button>
                    <button type="button" class="btn btn-success" id="register-btn">Register</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Create Post Modal -->
    <div class="modal fade" id="createPostModal" tabindex="-1" aria-labelledby="createPostModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title fs-3" id="post-modal-title">Create Post</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="postTitle" class="col-form-label">Title:</label>
                            <input type="text" class="form-control" id="postTitle">

                            <input type="hidden" id="post-id-input" value="">
                        </div>
                        <div class="mb-3">
                            <label for="postBody" class="col-form-label">Body:</label>
                            <textarea class="form-control" id="postBody" rows="3"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="postImg" class="col-form-label">Image:</label>
                            <input type="file" class="form-control" id="postImg">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" id="createPost-btn">Create</button>
                </div>
            </div>
        </div>
    </div>
`

// Navbar HTML
navbar.innerHTML = `
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="col-9">
                <nav class="navbar navbar-expand-lg bg-body-tertiary shadow rounded-bottom pt-2">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">M&N</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile" href="profile.html">Profile</a>
                            </li>
                        </ul>
                        
                        <div class="d-flex justify-content-end w-100 align-items-center" id="right-navbar">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" class="btn btn-outline-success me-2">Login</button>
                            <button type="button" class="btn btn-outline-success" id="register" data-bs-toggle="modal" data-bs-target="#registerModal">Register</button>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
`

// Storage Id for post Details
function goToPostDetails(id) {
    localStorage.setItem("postId", id);
    window.location = "post-details.html";
}

// Storage Author Id For Show His Profile
function goToProfile(id) {
    localStorage.setItem("profileId", id);
    
    // To Check User In Profile or Not
    localStorage.setItem("isProfile" , true);
    window.location = "profile.html";
}

// Edit Post
function editPost(postObject) {
    
    let post = JSON.parse(decodeURIComponent(postObject)); 

    // Modal Details
    document.getElementById("post-id-input").value = post.id;
    document.getElementById("createPost-btn").innerHTML = "Edit";
    document.getElementById("post-modal-title").innerHTML = "Edit Post";
    document.getElementById("postTitle").value = post.title;
    document.getElementById("postBody").value = post.body;

    // Get Modal
    let postModal = new bootstrap.Modal(document.getElementById("createPostModal") , {})
    postModal.toggle();
}

// Delete Post 
function deletePost(id) {
    const token = localStorage.getItem("token"); 
    const url = `https://tarmeezacademy.com/api/v1/posts/${id}`;

    axios.delete(url, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
        // To Show Updated Post
         getPostes();
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })
   .catch((error) => {
        alert(error.response.data.message);
    });
}

