const user = JSON.parse(localStorage.getItem('loggedInUser'));

        if (!user) {
            window.location.href = 'login.html';
        }

        const userDetailsDiv = document.getElementById('userDetails');
        userDetailsDiv.innerHTML = ` <h2>User Details</h2>
            <p>First Name: ${user.firstName}</p>
            <p>Last Name: ${user.lastName}</p>
            <p>Email: ${user.email}</p>
            <p>Password: ${user.password}</p>
            <p>Date of Birth: ${user.dob}</p>
        `;