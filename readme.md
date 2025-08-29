# Bajaj Finserv Assignment – REST API

This project is a **Node.js + Express** REST API built as part of the **Bajaj Finserv Assignment**.  
It processes an array of inputs and returns structured results such as separated numbers, alphabets, special characters, sum, and concatenated strings with alternating capitalization.

---

## 🚀 Live API
- **POST Endpoint:** [https://bajaj-finsev-assignment.onrender.com/bfhl](https://bajaj-finsev-assignment.onrender.com/bfhl)  
- **Note:**  
  - The **home URL (`/`)** does not serve a response page.  
  - Only the **`/bfhl` route** is active, and it accepts **POST requests** with JSON input.  

---

## 📌 Features
- Accepts an array of mixed inputs (numbers, alphabets, special characters).
- Returns:
  - `is_success`: operation status
  - `user_id`: in the format `{full_name_ddmmyyyy}`
  - `email`: your registered email
  - `roll_number`: your roll number
  - `odd_numbers`: array of odd numbers (strings)
  - `even_numbers`: array of even numbers (strings)
  - `alphabets`: array of alphabets in **uppercase**
  - `special_characters`: array of special characters
  - `sum`: sum of numbers (as a string)
  - `concat_string`: concatenation of alphabets in reverse order with alternating caps

---

## 📥 Example Request
```
curl -X POST https://bajaj-finsev-assignment.onrender.com/bfhl \
  -H "Content-Type: application/json" \
  -d '{"input":["a","B","3","#","4","d","E","5","%","1"]}'
```
