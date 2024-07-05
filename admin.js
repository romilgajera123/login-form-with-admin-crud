document.addEventListener('DOMContentLoaded', function () {
    const usersTable = document.getElementById('usersTable').querySelector('tbody');
    const adminForm = document.getElementById('adminForm');
    let editIndex = null;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    function renderTable() {
        usersTable.innerHTML = '';
        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.dob}</td>
                <td>
                    <button class="edit" onclick="editUser(${index})">Edit</button>
                    <button class="delete" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
            usersTable.appendChild(row);
        });
    }

    window.editUser = function (index) {
        editIndex = index;
        const user = users[index];
        adminForm.firstName.value = user.firstName;
        adminForm.lastName.value = user.lastName;
        adminForm.email.value = user.email;
        adminForm.password.value = user.password;
        adminForm.dob.value = user.dob;
        adminForm.style.display = 'block';
        document.querySelectorAll('.edit')[index].style.display = 'none';
    }

    window.deleteUser = function (index) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        renderTable();
    }

    adminForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = adminForm.firstName.value;
        const lastName = adminForm.lastName.value;
        const email = adminForm.email.value;
        const password = adminForm.password.value;
        const dob = adminForm.dob.value;

        if (editIndex !== null) {
            users[editIndex] = { firstName, lastName, email, password, dob };
            editIndex = null;
        }

        localStorage.setItem('users', JSON.stringify(users));
        renderTable();
        adminForm.reset();
        adminForm.style.display = 'none';
    });

    renderTable();
});
