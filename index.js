function configObj(name, email) { 
    return {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ name: name, email: email})
    }
};

function submitData(name, email) {
    return fetch("http://localhost:3000/users", configObj(name, email))
    .then(resp => resp.json())
    .then(function(json) {
        const idNum = document.createElement("p");
        idNum.innerHTML =json["id"] + " " + json["name"];
        document.body.appendChild(idNum);
    })
    .catch(function(error) {
        const errorMsg = document.createElement("p");
        errorMsg.innerHTML = error.message;
        document.body.appendChild(errorMsg);
    });
}