const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li")

const requirements =[
    {regex: /.{8,}/, index: 0},  //minimum 8 characters
    {regex: /.[0-9]/, index: 1},  //at leatst one number
    {regex: /.[a-z]/, index: 2},  // at least one lowercase number
    {regex: /.[^A-Za-z0-9]/, index: 3},  //at least one special sympol
    {regex: /.[A-Z]/, index: 4},  //at least one uppercase letter
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid) {
            requirementItem.firstElementChild.className = "fa-solid fa-check";
            requirementItem.classList.add("valid");
        } else{
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
            requirementItem.classList.remove("valid");
        }
    })
});

eyeIcon.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    
    eyeIcon.className = `fa-solid fa-eye${passwordInput.type === "password" ? "": "-slash"}`;
});