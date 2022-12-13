let tbodyEl = document.getElementById("tbodyid");

getCustomers();

function getCustomers() {
    tbodyEl.innerHTML="";
    network.getAll('/customers')
        .then(data => {
            console.log(data)
            // let customersArr = [];

            // data.forEach(element => {
            //     customersArr.push(element);
            // })

            let alpArr = data.sort((a, b) => {
                a.companyName.localeCompare(b.companyName);
            })


            console.log(alpArr)


            alpArr.forEach(element => {
                tbodyEl.innerHTML += `
             <tr>
               <td>${element.companyName}</td>
                  <td>${element.contactName}</td>
                   <th><button class="delete-btn" id="${element.id}">Delete</button></td>
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

        }

        )
}