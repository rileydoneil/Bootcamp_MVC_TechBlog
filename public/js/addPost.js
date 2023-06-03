const addPostForm = document.getElementById('add-post-form');
const successModal = document.getElementById('success-modal');

addPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(addPostForm);
    const title = formData.get('title');
    const contents = formData.get('content');
    if(!title || !contents) {
        alert('Please fill out all fields!');
        return;
    };
    const body = {title, contents};
    console.log(JSON.stringify(body));

    try {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        });

        if(res.ok) {
            successModal.classList.add('show');
            successModal.style.display = 'block';
        } else {
            alert('Failed to save Post!');
        }
    } catch (error) {
        console.error(error);
    };
});