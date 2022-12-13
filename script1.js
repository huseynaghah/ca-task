function add() {

    let newCategoty =  {
        description : document.getElementById("descCat").value,
        name : document.getElementById("nameCat").value
    }

    network.add("categories", newCategoty)
    .then(res => {
        console.log("res," , res);
    })
    .then(data => Toastify({
        text: `Category was added with ${document.getElementById("nameCat").value} name`,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "red",
        },
      }).showToast())
}