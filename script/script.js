let postForm = document.getElementById('post-form')
let postTitle = document.querySelector('#post-title')
let postBody = document.querySelector('#post-body');
let userPost = [];


postForm.addEventListener('submit', createPosts)


function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        let postLayout = document.getElementById('post-layout');
        userPost = data;
        let html = '';
        userPost.forEach((element, index) => {
            html += `
                    <div class="col-md-4 mb-3">
                        <div class="card h-100">
                            <div class="card-body d-flex flex-column align-items-end bg-light">
                                <div>
                                    <a onclick="openSingle(element)" href="single.html?id=${element.id}"  id="post-value" 
                                    class="text-decoration-none text-dark"
                                    >
                                    <div class="d-flex justify-content-end">
                                        <h6 class="text-danger">${element.id}</h6>
                                    </div>
                                    <h5 class="post-title mb-4">${element.title}</h5>
                                    <p class="post-body">${element.body}</p>
                                    </a>
                                </div>
                                <div class="mt-auto d-flex flex-row justify-content-between">
                                    <div class="">
                                        <button class="btn btn-warning me-5" onclick="">
                                            Update
                                        </button>
                                        <button class="btn btn-danger" target="_blank">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                `
            postLayout.innerHTML = html
        });
    })
};
getPosts();

function createPosts(element) {
    element.preventDefault();
    let ptitle = postTitle.value;
    let pBody = postBody.value;
    console.log('post  title', ptitle)
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: ptitle,
            body: pBody,
            userId: 5

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('post', data);
        
        alert('post created successfully')
    })
}

  



