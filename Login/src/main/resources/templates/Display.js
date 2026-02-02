document.addEventListener("DOMContentLoaded", function () {

    const apiurl = "http://localhost:8080/api/getdata";
    const tableBody = document.getElementById("tablebody");

    fetch(apiurl)
        .then(res => res.json())
        .then(data => {

            tableBody.innerHTML = "";

            data.forEach(user => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.email}</td>
                    <td>${user.contact}</td>
                    <td>${user.address}</td>
                    <td>${user.city}</td>
                    <td>${user.state}</td>
                    <td>${user.country}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(err => console.error(err));
});
