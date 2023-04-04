
async function displayUserData() {
    try {
        // Fetch user data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
  
        // Select the table body element
        const tableBody = document.querySelector('#userTable tbody');
  
        // Loop through the user data and create table rows
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
  }
  
  // Call the async function to display the user data
  displayUserData();