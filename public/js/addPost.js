const addPostForm = document.getElementById('add-post-form');
const successModal = document.getElementById('success-modal');

addPostForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(addPostForm);
    const title = formData.get('title');
    const content = formData.get('content');
    const body = {title, content};

    try {
        const res = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-Type': 'application/json'},
        });
        const data = await res.json();
        console.log(data);
        if(res.ok) {
            successModal.classList.add('is-active');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
    };
});