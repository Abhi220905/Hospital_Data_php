const API_URL = "http://localhost/Hospital_demo/backend/api";

// Fetch + Display
async function fetchHospitals() {
  try {
    const res = await fetch(`${API_URL}/getHospitals.php`);
    const data = await res.json();

    const container = document.getElementById("hospitalList");
    container.innerHTML = "";

    data.forEach((h) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${h.Hospital_Name}</h3>
        <p>${h.City} - ${h.Department}</p>
      `;

      // Delete
      const delBtn = document.createElement("button");
      delBtn.innerText = "Delete";
      delBtn.onclick = async () => {
        await fetch(`${API_URL}/deleteHospital.php?id=${h.Hospital_ID}`);
        fetchHospitals();
        alert("Data Deleted Successfuly");
      };

      // Edit
      const editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.onclick = async () => {
        const name = prompt("New name:");
        if (!name) return;

        await fetch(`${API_URL}/updateHospital.php`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            Hospital_ID: h.Hospital_ID,
            Hospital_Name: name,
          }),
        });

        fetchHospitals();
        alert("Data Updated Successfuly");
      };

      card.append(delBtn, editBtn);
      container.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
}

// Add
async function addHospital() {
  const name = document.getElementById("name").value;
  if (!name) return alert("Enter name");

  await fetch(`${API_URL}/addHospital.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      Hospital_Name: name,
      City: "Ahmedabad",
      Department: "General",
      Beds_Available: 50,
      Doctors_Count: 10,
      Rating: 4.5,
    }),
  });

  document.getElementById("name").value = "";
  fetchHospitals();
  alert("Data Added Successfuly");
}

// Init
fetchHospitals();
