const pw = document.querySelector("#password");
const confPw = document.querySelector("#confirm-password");
const form = document.querySelector("#signUp");

function validatePasswordsMatch() {
    if (pw.value !== confPw.value) {
        confPw.setCustomValidity("Passwords do not match");
    } else {
        confPw.setCustomValidity("");
    }
}

pw.addEventListener("input", validatePasswordsMatch);
confPw.addEventListener("input", validatePasswordsMatch);

form.addEventListener("submit", (e) => {
    validatePasswordsMatch();

    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});