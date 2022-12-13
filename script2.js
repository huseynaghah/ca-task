let tbodyEl= document.getElementById("tbodyid");

load();

function load() {
    network.getAll('/suppliers')
    .then(data => {
        data.forEach(element => {


            tbodyEl.innerHTML+=`
            <tr>
                <td>${element.companyName}</td>
                <td>${element.contactName}</td>
                <th>${element.contactTitle}</td>
                <td>${element.address.region}</td>
            </tr>
            `
        });
    })

}
