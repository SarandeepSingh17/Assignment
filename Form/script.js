function validateEmail(email) {
    // Regular expression for validating an Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function validatePhoneNumber(phoneNumber) {
    // Regular expression for validating a U.S. phone number (10 digits, dashes optional)
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber.replace(/[-\s]/g, ''));
}
function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var maleChecked = document.getElementById("male").checked;
    var femaleChecked = document.getElementById("female").checked;
    var gender = maleChecked ? "Male" : (femaleChecked ? "Female" : "Not Specified");
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    // Validations (you can add more as needed)
    
    if (!firstName || !lastName || !dob || !country || (!maleChecked && !femaleChecked) || !profession || !email || !mobile) {
        alert("All fields are required!");
    }else if(!validateEmail(email))
    {
        alert("Email not valid");
    }
    else if(!validatePhoneNumber(mobile))
    {
        alert("Invalid Phone Number");
    } 
    else {
        var popupContent = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
        `;
        document.getElementById("popupContent").innerHTML = popupContent;
        document.getElementById("popup").style.display = "block";
    }
    return true;
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
