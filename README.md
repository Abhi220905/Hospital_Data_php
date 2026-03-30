# 🏥 Hospital Management System (CRUD)

A simple full-stack web application to manage hospital data using **PHP, MySQL, and Vanilla JavaScript**.

---

## 🚀 Features

- 📋 View all hospitals
- ➕ Add new hospital
- ✏️ Update hospital details
- 🗑️ Delete hospital
- 🔄 Real-time UI update (no page reload)
- 📡 REST-like API using PHP

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: PHP
- Database: MySQL (phpMyAdmin)
- Server: XAMPP

---

## 📂 Project Structure
Hospital_demo/
│
├── frontend/
│ ├── index.html
│ ├── css/
│ └── js/app.js
│
├── backend/
│ ├── api/
│ │ ├── getHospitals.php
│ │ ├── addHospital.php
│ │ ├── updateHospital.php
│ │ └── deleteHospital.php
│ └── config/db.php


---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|---------|------------|
| GET | /getHospitals.php | Fetch all hospitals |
| POST | /addHospital.php | Add new hospital |
| POST | /updateHospital.php | Update hospital |
| GET | /deleteHospital.php?id=ID | Delete hospital |

---

## 💡 Learnings

- CRUD operations using PHP & MySQL
- Fetch API integration
- Handling JSON responses
- Debugging real-world issues (ID null, auto increment)
- Clean frontend-backend communication

---

## 📌 Future Improvements

- 🔍 Search & filter
- 📊 Dashboard charts
- 🔐 Authentication system
- 🎨 UI improvements

---

## 👨‍💻 Author

Developed by Abhishek 
