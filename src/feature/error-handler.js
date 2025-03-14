import User from './User.js';

async function fetchUsers() {
    try {
        let response = await fetch("https://dummyjson.com/users");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        let users = data.users.map(user => new User(user.id, user.name, user.email, user.phone));
        users.forEach(user => user.displayInfo());
    } catch (error) {
        console.error("Failed to fetch users:", error.message);
    }
}

fetchUsers();
