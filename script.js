document.getElementById("studentform").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.getElementById("course").value;
    const email = document.getElementById("email").value;

    const table = document.getElementById("studentTable");
    const row = document.createElement("tr");

    row.innerHTML = '<td class="border px-4 py-2">' + name + '</td>' +
        '<td class="border px-4 py-2">' + age + '</td>' +
        '<td class="border px-4 py-2">' + course + '</td>' +
        '<td class="border px-4 py-2">' + gender + '</td>' +
        '<td class="border px-4 py-2">' + email + '</td>' +
        '<td class="border px-4 py-2">' +
        '<button class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 delete-btn">Delete</button>' +
        '</td>';

    table.appendChild(row);
    document.getElementById("studentform").reset();

    row.querySelector(".delete-btn").addEventListener("click", function () {
        row.remove();
    });
});