1. Sign-Up Page

Fields Required:
        •	First Name
        •	Last Name
        •	Email (must end with @gmail.com)
        •	Password
        •	Confirm Password
        •	Date of Birth

Validation:
        •	All fields must be filled.
        •	Email should be validated to ensure it ends with @gmail.com.
        •	Password and Confirm Password must match.
        
Functionality:
        •	When the user clicks the "Submit" button, validate all fields.
        •	If validation passes, save the user's details in the local storage of the browser in JSON format.
        

2. Login Page

Fields Required:
        •	Email
        •	Password
        
Functionality:

        •	When the user clicks the "Login" button, check the local storage to see if the entered email and password match any stored user data.
        •	If the credentials are correct:
        o	Display a success message using a toast notification.
        o	Redirect the user to a new page displaying their details (First Name, Last Name, Email, Password, Date of Birth).
        •	If the credentials are incorrect:
        o	Display an error message using a toast notification stating "Email or Password is incorrect".

3. User Details Page

Functionality:
        •	Once the user logs in successfully, they should be redirected to this page.
        •	This page should retrieve the user's details from local storage and display them.

4. Admin Page

Access:
        •	This page should be accessible only if the user logs in with the email "admin" and password "admin".

Functionality:
        •	Display all user data stored in local storage in a tabular format.
        •	Each row in the table should have options to:
        o	Edit user details.
        o	Delete user details.

Editing User Details:
        •	Provide a form or inline editing option for each user to update their details.
        •	When changes are made, update the local storage accordingly.

Deleting User Details:
        •	Provide a delete button for each user.
        •	When the delete button is clicked, remove the user's details from local storage.

