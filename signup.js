function submit() {
    let myform = document.getElementById('testForm');
    let formData = new FormData();
    formData.append('id', document.getElementById('signup-id').value);
    formData.append('pw', document.getElementById('signup-pw').value);
    bth = document.getElementById('signup-birth-yy').value+
    "-"+ document.getElementById('signup-birth-mm').value+
    "-"+ document.getElementById('signup-birth-dd').value;

    formData.append('birthday', bth);
    formData.append('phone', document.getElementById('signup-phone').value);
    // formData.append('signup-input-birth', document.getElementById('signup-input-birth').files[0]);

    for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
    }
    fetch('http://localhost:1235/test/sign-up', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(Object.fromEntries(formData))
    }).then((response) => console.log(response));
    
    alert("success");
}
