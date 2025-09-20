// Add your code here
// index.js

// Function to submit data to the API
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name, email })
  })
  .then(response => response.json())
  .then(data => {
    // Append the returned id to the DOM
    const p = document.createElement('p');
    p.textContent = `User ID: ${data.id}`;
    document.body.appendChild(p);
  })
  .catch(error => {
    // Append the error message to the DOM
    const p = document.createElement('p');
    p.textContent = error.message;
    document.body.appendChild(p);
  });
}

// Expose function to window for testing
window.submitData = submitData;
