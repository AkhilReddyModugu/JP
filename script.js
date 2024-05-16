async function display() {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        const tableEle = document.getElementById('res');
        tableEle.innerHTML = '';

        users.forEach((user) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.branch}</td>
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

        await axios.post('http://localhost:3000/users', data);
        alert('New student data inserted!!');
        display();
}

async function remove(){
    let uid= prompt('Enter student id to delete');
    await axios.delete(`http://localhost:3000/users${uid}`);
    alert(`Student with id: ${uid} deleted`);
    display();
}
// window.onload = display;
