document.querySelector('#submit').addEventListener('click', async (e) => {
    e.preventDefault();
      const formData = new FormData(document.querySelector('#signup-form'));
      const username = formData.get('username');
      const password = formData.get('password');
      const body = { username, password};
      console.log(username, password, body);
  
      try {
        const res = await fetch('/api/users/signup', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {'Content-Type': 'application/json'},
        });
        
        const data = await res.json();
        console.log(data);
        if(res.ok) {
          document.location.replace('/dashboard');
        } else {
          alert(data.message);
        }
        } catch (error) {
        console.error(error);
        };
  });
  