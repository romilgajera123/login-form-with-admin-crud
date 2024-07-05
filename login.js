document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'admin@gmail.com' && password === 'admin') {
        window.location.href = 'admin.html';
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert(`Login successful! Welcome, ${user.firstName} ${user.lastName}`);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'userdetail.html';
    } else {
        alert('Email or Password is incorrect');
    }
});