

let singleCard = document.querySelector('#single-page'); 
singleCard.innerHTML = "";
function singlePage() {
    let urlID = window.location.search;
    fetch(`https://jsonplaceholder.typicode.com/posts/${urlID}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            singleCard.innerHTML += `
            <div class="col-md-4 mb-3 mt-3 ">
              <div class="card h-100 p-3 bg-light">
                <div class="card-body">
                  <div>
                    <div class="d-flex justify-content-end">
                      <h6 class="text-danger post-id">${element.id} </h6>
                    </div>
                    <h5 class="post-title mb-4">${element.title}</h5>
                    <p class="post-body">${element.body} </p>
                  </div>
                </div>
            </div>
          </div>
  
            `
        });
    })
}
singlePage()
// function setContent() {
//   let post = JSON.parse(localStorage.getItem('post'));
//   console.log(post);

//   let postId = document.querySelector('.post-id');
//   let postTitle = document.querySelector('.post-title');
//   let postBody = document.querySelector('.post-body');

//   postId.innerText = post.id;
//   postTitle.innerText = post.title;
//   postBody.innerText = post.body;
// }

// setContent();
