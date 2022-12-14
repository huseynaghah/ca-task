let tbodyEl = document.getElementById("tbodyid");

getCustomers();

let modal = document.getElementById("modal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

let realUpdate = document.getElementById("realUpdate");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getCustomers() {
    tbodyEl.innerHTML = "";
    network.getAll('/customers')
        .then(data => {
            console.log(data)
            // let customersArr = [];

            // data.forEach(element => {
            //     customersArr.push(element);
            // })

            let alpArr = data.sort((a, b) => {
               return a.companyName.localeCompare(b.companyName);
            })


            console.log(alpArr)


            alpArr.forEach(element => {
                tbodyEl.innerHTML += `
             <tr>
               <td>${element.companyName}</td>
                  <td>${element.contactName}</td>
                   <th><button class="delete-btn" id="${element.id}">Delete</button></th>
                   <th><button class="update-btn">Update</button></th>
               </tr>
                `
            })



            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    console.log(e.target.id)
                    network.delete("/customers", e.target.id)
                        .then(res => {
                            console.log("res", res);
                            getCustomers();
                        })
                })

            })

            document.querySelectorAll('.update-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    modal.style.display = "block";
                    let parent = btn.parentElement.parentElement;
                    document.getElementById("compName").value = parent.children[0].innerHTML;
                    document.getElementById("contName").value = parent.children[1].innerHTML;
                    document.getElementById("idObj").value = parent.children[2].children[0].id;
                    console.log(parent.children[2].children[0].id);
                    // for (let child of parent1.children){
                    // console.log(child)};

                })

            })

        }

        )
}

span.addEventListener("click", () => {
    modal.style.display = "none";
})

realUpdate.addEventListener("click", () => {
    modal.style.display = "none";
    var formObj = {
        companyName: "",
        contactName: ""
    }
    formObj.companyName= document.getElementById("compName").value;
    formObj.contactName= document.getElementById("contName").value;

    let lastId = document.getElementById("idObj").value;

    console.log(lastId);
    console.log(formObj);

    network.put('/customers', lastId, formObj)
    .then(res => getCustomers())

    
})
