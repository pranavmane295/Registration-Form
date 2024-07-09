class Employee {
    constructor(name, email, phone, job) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.job = job;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const employeesList = document.getElementById('employeesList');

    registerBtn.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const job = document.getElementById('job').value;

        // Validate form fields
        if (name !== '' && email !== '' && phone !== '' && job !== '') {
            // Create new employee object
            const employee = new Employee(name, email, phone, job);

            // Display entered details in list
            const listItem = document.createElement('li');
            listItem.classList.add('employee-item');
            listItem.innerHTML = `
                <strong>Name:</strong> ${employee.name}<br>
                <strong>Email:</strong> ${employee.email}<br>
                <strong>Phone:</strong> ${employee.phone}<br>
                <strong>Profile ID:</strong> ${employee.job}
            `;
            employeesList.appendChild(listItem);

            // Optional: Reset form fields after submission
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('job').value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
