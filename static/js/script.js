const data = [
      { "day": "mon", "amount": 17.45 },
      { "day": "tue", "amount": 34.91 },
      { "day": "wed", "amount": 52.36 },
      { "day": "thu", "amount": 31.07 },
      { "day": "fri", "amount": 23.39 },
      { "day": "sat", "amount": 43.28 },
      { "day": "sun", "amount": 25.48 }
    ];

    const chartContainer = document.querySelector('.chart');
    data.forEach(item => {
      const bar = document.createElement('div');
      bar.className = 'bar';
      bar.style.height = `${item.amount * 3}px`; // Scale the height for better visualization
      bar.innerHTML = `<span>$${item.amount}</span>`;
      const day = document.createElement('div');
      day.className = 'day';
      day.textContent = item.day;
      chartContainer.appendChild(bar);
      chartContainer.appendChild(day);
    });



const submit = document.getElementById("submit")
submit.addEventListener('click', async (e) => {
  e.preventDefault()

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  // authentication
  const response = await fetch("/api/register", {
    method: "GET",
    headers: {
      "Content-Type": "application.json"
    },
    body: JSON.stringify({ fullName, email, userName, password })
  })
  const data = response.data

  if(!response.ok) {
    throw new err ("invalid")
  }


  window.location.href('/display')
})