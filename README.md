Maaf mas, saya kuliah lagi banyak tugas akhir
jadi baru bisa nonton forum di rabu minggu kedua. Jadi 
baru tau ada tugas 3 hari setelah deadline. Tapi sekarang saya
sudah mengerjakan di folder assignment repo ini. 
Sekali lagi mohon maaf mas.

## Assignment 
I use **port 8000** for this assignment
### API Endpoints
1. Get all users  
   GET localhost:8000/users
2. Get a specific user  
   GET localhost:8000/users/:id
3. Create a user  
   POST localhost:8000/users/create  
   Takes 2 data in body: name and password.  
   **Example:**  
   ```json
   {
   "name": "orang",
   "password": "0r4ang"
   }
   ```
4. Update users' name or password for the given id
   POST localhost:8000/users/create  
   Takes 3 data in body: id, name, and password.  
   **Example:**
   ```json
   {
   "id": "2",
   "name": "orang",
   "password": "0r4ang"
   }
   ```
5. Delete a user for the given id  
   GET localhost:8000/users/delete/:id