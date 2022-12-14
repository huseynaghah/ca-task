let tbodyEl = document.getElementById("tbodyid");

getOrders()

function getOrders() {
    tbodyEl.innerHTML = "";
    network.getAll('/orders')
        .then(data => {
            console.log(data);
            let timeArr = data.sort((a, b) => {
                if ( a. orderDate < b.orderDate){
                    return -1;
                }
                if (a.orderDate> b.orderDate) {
                    return 1;
                }
                return 0;
           
            })
            console.log(timeArr);
            timeArr.forEach(element => {
                tbodyEl.innerHTML += `
            <tr>
              <td>${element.customerId}</td>
                 <td>${element.employeeId}</td>
                <td>${element.orderDate}</td>
              </tr>
               `
            })
        })
}