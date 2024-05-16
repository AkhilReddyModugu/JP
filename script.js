async function display() {
        const response = await axios.get('http://localhost:3333/users');
        const users = response.data;
        const tableEle = document.getElementById('res');
        tableEle.innerHTML = '';

        users.forEach((user) => {
            const row = document.createElement('tr');
            row.innerHTML = `   
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.branch}</td>
                <td><button onclick="remove(${user.id})">Delete</button></td>
                <td><button onclick="update(${user.id})">Edit</button></td>
            `;
            tableEle.appendChild(row);
        });
}

async function insert() {
        const data = {
            id: document.getElementById('id').value,
            name: document.getElementById('name').value,
            branch: document.getElementById('branch').value
        };

        await axios.post('http://localhost:3333/users', data);
        alert('New student data inserted!!');
        display();
}

async function remove(id){
    await axios.delete(`http://localhost:3333/users/${id}`);
    alert(`Student with id: ${id} deleted`);
    display();
}

async function update(id) {
    let newName = prompt("Enter new name");
    let newBranch = prompt("Enter new branch");

    const newData = {
        name: newName,
        branch: newBranch
    };

    await axios.put(`http://localhost:3333/users/${id}`, newData);
    alert(`User with ID ${id} updated successfully`);
    display();
}
