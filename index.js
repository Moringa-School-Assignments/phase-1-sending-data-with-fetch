// Add your code here
// let formData = {
//     "name": "Steve",
//     "email": "steve@steve.com",
// }
let ul = document.querySelector(".error");
function submitData(name, email){
    let form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        name = event.target.name.value;
        email = event. target.email.value;
    })

    let obj = {
        "name" : name,
        "email": email
    }
    const content = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(obj)
    }

    let user = fetch("http://localhost:3000/users", content)
        .then(res => res.json())
        .then(user => {
            let newItem = document.querySelector(".new");
            newItem.innerHTML = user.id;
        })
        .catch(error => {
            let itemError = document.createElement("li");
            let errorMessage = document.createTextNode(error);
            itemError.appendChild(errorMessage);
            ul.appendChild(itemError)

        })
    return user;
}