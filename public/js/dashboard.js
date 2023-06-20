// add event handler to post-card class to redirect to post/id
document.querySelectorAll('.post-card').forEach((post) => {
    post.addEventListener('click', (e) => {
        e.preventDefault();
        const id = post.getAttribute('data-id');
        console.log(id);
        window.location.replace(`/post/${id}`);
    });
});

// add event handler to delete class for button to delete post by id
//check if there is a delete button
if(document.querySelector('.delete')) {
    document.querySelectorAll('.delete').forEach((button) => {
        button.addEventListener('click', async (e) => {
            console.log('at delete btn');
            e.preventDefault();
            e.stopPropagation();
            const id = button.getAttribute('data-id');
            console.log(id);
            try {
                const res = await fetch(`/api/posts/${id}`, {
                    method: 'DELETE',
                });
    
                if(res.ok) {
                    window.location.replace('/dashboard');
                } else {
                    alert('Failed to delete post!');
                }
            } catch (error) {
                console.error(error);
            }
        });
    });
}

//check if comment button is there
// add event handler to comment button to add comment to api/comments POST
if(document.querySelector('.commentInput')) {
    document.querySelectorAll('.commentInput').forEach((button) => {
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();
            const postID = document.querySelector('.post-card').getAttribute('data-id');
            console.log('Post ID: ' + postID);
            const contents = document.querySelector(`.comment`).value;
            const body = {contents, postID};
            console.log(JSON.stringify(body));
            try {
                const res = await fetch('/api/comments', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {'Content-Type': 'application/json'},
                });
                if(res.ok) {
                    // window.location.replace(`/post/${postID}`);
                    alert('Comment added!');
                } else {
                    alert('Failed to add comment!');
                }
            } catch (error) {
                console.error(error);
            }
        });
    });
}
