## FMT—Find My Travelmate

FMT web application connects people to share the ride.  

* ### Live Demo URL: ***https://fmtwebapp.herokuapp.com/***
* Date Created: 2020-06-14
* Last Modification Date: 2021-01-05

## Author

* Jigar Makwana(Jigar.Makwana@dal.ca) - (Developer)


## Getting Started

To test the web application follow the below sections.

## To run Locally

1. Clone the following directory to you local system.
	***https://git.cs.dal.ca/jmakwana/a2_jigar_makwana/-/tree/master/A2***
2. Run the following command which will install dependencies from package.json file.
	npm install
3. You may further need to install the required packages if those are not already installed.
   Run the following commands to install the packages.
   npm i bootstrap react-bootstrap
   npm i material-ui
   npm i react-dom react-router
   npm i express
   npm i path
   npm i axios
4. To start the web app run the following command.
	npm start
5. Open the browser and enter the following URL.
	***http://localhost:8080/***
	
## To run the live demo
1. Enter the following URL in your browser.
	***https://fmtwebapp.herokuapp.com/***

## Running the tests

Currently there are 7 functional pages are up on the website. Additionally 2 more pages are added: 
one to show the message that pages are under implementation and another is to show 404 error when 
invalid url is encountered.

**the following are the working pages** 

1. Landing page (Home Page)
2. Sign Up page
3. Login page
4. Forgot Password page
5. Reset Password page
6. Notification page
7. Feedback page

**Additional pages**

8. Car Journey page: Shows message Under Implementation
9. Air Journey page: Shows message Under Implementation
10. About Us: Shows message Under Implementation
11. FAQs: Shows message Under Implementation
12. Feedback Shows message Under Implementation
13. Contact Us: Shows message Under Implementation
14. Terms: Shows message Under Implementation
15. Privacy Policy: Shows message Under Implementation
16. 404 Error page: Shows message page not found

**Working icons in footer** 

17. Facebook icon: For now, redirects the user to Facebook Login page
18. Instagram icon: For now, redirects the user to Instagram Login page
19. Twitter icon: For now, redirects the user to Twitter Login page

**Note:**

**1.**  For this assignment the notification bell icon is shown in header along with 
Sign Up, Login and other navigation liks. In the actual website the bell icon does
not show up until the user is logged in. Once the user logs in, the Sign Up and Login
links gets disappear from header and new navigation liks Notification (bell) icon and
User Profile icons appears in the header.

**2**  To go to Reset Password page, Enter the valid email id on Forgot Password and click
"Send Password Link". In actual website on cliking this button a reset password link is 
sent to the entered email id. Once clicking on that link the user gets redirected to the
reset password page. For demonstating the Reset Password functionality "Send Password Link"
redirects to the Reset Password page.

**3.**  Back (Previous) arrow on notifocation page redirects to Home page.

**4.**  Entering valid details on Sign Up page redirects to Login page.

### Break down into end to end tests

**Sign Up**

1. User visits ‘Find My Travel Mate’ homepage.
2. User clicks on ‘Sign Up’ option in menu bar on homepage.
3. System displays ‘Sign Up’ page, requesting user’s email and password.
4. User enters their preferred email, password, and confirm password.
5. User accepts the Terms & Conditions and Privacy Policy by checking the checkbox.
6.1 System displays a message letting the user know their email is invalid.
6.1.1 User enters a new email address to Sign up.
6.1.2 User enters a new password and confirm password.
6.2 System displays a message letting the user know their preferred password invalid.
(Valid password must contain at least one digit and one special character)
6.2.1 User enters a new password and confirm password.
6.2.3 User clicks on ‘Sign Up’ button.
7. System displays registration confirmation message to the user.
8. User is redirected to the ‘Log In’ page.

**Login**

1. User clicks on ‘Log In’ on the home page.
2. User enters their email and password.
3. User clicks on ‘Log In’ button.
4. User is redirected to the ‘Home’ page.

**Forgot Password**

1. User visits ‘Log In’ page.
2. User clicks on ‘Forgot Password?’ link.
3. User is redirected to the ‘Forgot Password’ page.
4. User enters an email address.
5. System displays a message letting the user know their email is invalid.
6. User enters a valid email address.
5. User clicks on ‘Send Password Link’ button.

**Reset Password**

1. User clicks on ‘Send Password Link’ button on Forgot Password.
2. User is redirected to the ‘Reset Password’ page.
3. User enters a new password.
4. User confirms the new password.
5. User clicks on ‘Reset Password’ button.
5.1 System displays a message letting the user know their passwords do not match.
5.1.1 User enters a new password.
5.1.2 User confirms the new password.
5.1.3 User clicks on ‘Reset Password’ button.
5. 2 System displays a message letting the user know their preferred password is not valid.
(Valid password must contain at least one digit and one special character)
5.2.1 User enters a new password.
5.2.2 User confirms the new password.
5.2.3 User clicks on ‘Reset Password’ button.
6. System displays success message.

**Feedback**

1. User clicks on ‘Feedback’ from each page of the website.
2. User is redirected to the ‘Feedback’ page.
3. User enters email id.
3.1 System displays a message letting the user know their email is invalid.
3.1.1 User enters a new email address.
4. User enters the feedback.
5. User clicks on Submit button.
6. System displays the ‘Feedback Submitted’ message.

**Notifications**

1. User clicks on a Bell icon in menu bar on home page.
2. User is redirected to the ‘Notifications’ page.
3. User clicks on "View" button to view detailed notification.

**Cross Browser Compability**
1. Enter the deploment URL in Google Chrome.
2. Enter the deploment URL in Microsoft Edge.
3. Enter the deploment URL in Safari.
4. Enter the deploment URL in Mozila Firefox.

**Responsivness**
1. Enter the deploment URL in an IPhone.
2. Enter the deploment URL in an Android Phone.
3. Enter the deploment URL in Browser and change the size of the window.

## Deployment

To deploy the live demo using Heroku and Github the following steps were followed
1. First, followed the steps mentioned in **run Locally** section of **Getting Started** to
   ensure that the web application runs fine locally.
	***https://git.cs.dal.ca/jmakwana/a2_jigar_makwana/-/tree/master/A2***
2. Next, run the following command to build the application.
	npm run build
3. Next, push the following four folder/files to the Github repository.
	package.json
	package-lock.json
	server.js
	build (folder)
4. Created a project in Heroku and connected the Github repository with Heroku.
5. Navigated to deploy section and deployed your master branch.
6. Heroku deployed the application and generate a deploy link
	***https://fmtwebapp.herokuapp.com/***
7. Entered the deployment URL in browser and tested the application.

## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces.
* [Npm](https://www.npmjs.com/) - Package manager for the JavaScript
* [React-Bootstrap](https://react-bootstrap.github.io/getting-started/) - CSS Framework for developing responsive and mobile-first websites.
* [Express](https://expressjs.com/) - A server framework for Node.js


## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implement, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

### ValidateProperties.js

Lines 01 - 49
---------------

```
export function validateEmail() {
    const {email} = this.state;
    let isEmailValid = true;
    let error = {...this.state.error}

    // checks for email format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        isEmailValid = false;
        error.email = 'Please enter a valid email id'
    }

    this.setState({isEmailValid, error}, this.validateForm)
}

export function validatePassword() {
    const {password} = this.state;
    let isPasswordValid = true;
    let error = {...this.state.error}

    // Password must contain at least 6 chars
    // Password must contain at least one digit
    // Password must contain at least one special character

    if (password.length < 6) {
        isPasswordValid = false;
        error.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)){
        isPasswordValid = false;
        error.password = 'Password must contain at least one digit';
    } else if (!/[!@#$%^&*]/.test(password)){
        isPasswordValid = false;
        error.password = 'Password must contain at least one special character: !@#$%^&*';
    }

    this.setState({isPasswordValid, error}, this.validateForm);
}

export function validateConfirmPassword() {
    const {confirmPassword, password} = this.state;
    let isConfirmPasswordValid = true;
    let error = {...this.state.error}

    if (password !== confirmPassword) {
        isConfirmPasswordValid = false;
        error.confirmPassword = 'Passwords do not match'
    }

    this.setState({isConfirmPasswordValid, error}, this.validateForm);
}

```

The code above was created by adapting the code in 
"Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac) 
as shown below: 

```

  validateEmail = () => {
    const {email} = this.state;
    let emailValid = true;
    let errorMsg = {...this.state.errorMsg}

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      emailValid = false;
      errorMsg.email = 'Invalid email format'
    }

    this.setState({emailValid, errorMsg}, this.validateForm)
  }

  validatePassword = () => {
    const {password} = this.state;
    let passwordValid = true;
    let errorMsg = {...this.state.errorMsg}

    // must be 6 chars
    // must contain a number
    // must contain a special character

    if (password.length < 6) {
      passwordValid = false;
      errorMsg.password = 'Password must be at least 6 characters long';
    } else if (!/\d/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain a digit';
    } else if (!/[!@#$%^&*]/.test(password)){
      passwordValid = false;
      errorMsg.password = 'Password must contain special character: !@#$%^&*';
    }

    this.setState({passwordValid, errorMsg}, this.validateForm);
  }


  validatePasswordConfirm = () => {
    const {passwordConfirm, password} = this.state;
    let passwordConfirmValid = true;
    let errorMsg = {...this.state.errorMsg}

    if (password !== passwordConfirm) {
      passwordConfirmValid = false;
      errorMsg.passwordConfirm = 'Passwords do not match'
    }

    this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
  }

```

The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)  
was implemented by Michael Verdi to provide a tutorial on Reactjs Form Validation.

The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)'s 
code was used because it provides the clean and optimal solution for learning
Reactjs Form Validation for a beginner.

The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)'s  
code was modified by Jigar Makwana to learn and implement Reactjs Form Validations
in the Assignment 2 of the coursework CSCI5409 at Dalhousie University.
The function varibale names and directory structure is modified.
Also, the new strategy to call the above functions is implemented.
(June 15, 2020)


### ErrorMsg.js

Lines 01 - 10
---------------

```
import React from "react";

export function ErrorMsg(props) {
    if (!props.valid) {
        return(
            <div className='error-msg'>{props.message}</div>
        )
    }
    return null;
}

```

The code above was created by adapting the code in 
"Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac) 
as shown below:  

```
function ValidationMessage(props) {
  if (!props.valid) {
    return(
      <div className='error-msg'>{props.message}</div>
    )
  }
  return null;
}

```
The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)  
was implemented by Michael Verdi to provide a tutorial on Reactjs Form Validation.

The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)'s 
code was used because it provides the clean and optimal solution for learning
Reactjs Form Validation for a beginner.

The code in "Form Validation in React (2019)"
(https://medium.com/@verdi/form-validation-in-react-2019-27bc9e39feac)'s  
code was modified by Jigar Makwana to learn and implement Reactjs Form Validations
in the Assignment 2 of the coursework CSCI5409 at Dalhousie University. The above 
functon name, variable names, and directory stucture is modified. 
Also, the new strategy to call the above function is implemented.
(June 15, 2020)

### Images Used

** [Local Name] [source] [URL] [Date Last Accessed]** 
A2HomeCar.png, pinclipart, https://www.pinclipart.com/maxpin/iobTom/, [June 14, 2020]
A2HomeFlight.png, kissclipart, 
https://www.kissclipart.com/airport-cartoon-png-clipart-airport-airplane-clip-etp8wp/, [June 14, 2020]
A2HeaderBell.png,ya-webdesign, https://i.ya-webdesign.com/images/white-bell-icon-png-11.png ,[June 14, 2020]
A2FooterFb.png, listimg.pinclipart , 
https://listimg.pinclipart.com/picdir/s/2-21918_download-transparent-background-facebook-logo-clipart-facebook-logo.png,
[June 14, 2020]
A2FooterTwitter.png, hiclipart, https://www.hiclipart.com/free-transparent-background-png-clipart-qimav ,[June 14, 2020]
A2FooterInsta.png, hiclipart, https://p7.hiclipart.com/preview/462/874/418/5bbf4add2c4b8.jpg [June 14, 2020]

## Acknowledgments

* Thanks to Michael Verdi for providing a tutorial on Reactjs Form Validation.
