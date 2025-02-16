## 📌 **Tally-App**
A minimalistic **Redux-inspired** store to manage and log the state of a tally counter application.  
The implementation runs in **Node.js** and logs the state changes in the console.

---

## 👨‍💻 **How to Run the Code**
### **1️⃣ Prerequisites**
Make sure you have **Node.js** installed. You can check by running:
```sh
node -v
```

### **2️⃣ Clone the Repository (if applicable)**
If you're using Git, clone the project:
```sh
git clone https://github.com/MorenaDlamini/MORDLA616_PTO2405_ChadBosch-MORENADLAMINI_DJS05.git
cd Tally-App
```

### **3️⃣ Run the Code**
To execute the tally counter app, open a terminal inside the **Tally-App** folder and run:
```sh
node index.js
```
This will log the state updates to the console.

---

## 📂 **Project Structure**
```
Tally-App/
│── index.js           # Entry point (Runs the app)
│── store.js           # Redux-inspired store implementation
│── reducer.js         # Handles state updates
│── actionCreators.js  # Functions to create actions
│── constants.js       # Action type constants
│── utils.js           # Helper functions
│── README.md          # Project documentation
```

---

## 🛠 **Approach**
- **Redux-Inspired Architecture** – Implements a store with `getState`, `dispatch`, and `subscribe`.  
- **Modular Structure** – Separated concerns using multiple files (store, reducer, actions, constants, and utilities).  
- **Functional Programming** – Uses **pure functions** to update the state immutably.  
- **Logging State Changes** – The application logs state updates to the console instead of a UI.  

---

## 📌 **Example Output**
When you run `node index.js`, you should see:  
```
SCENARIO 1: Initial State Verification
{ count: 0 }
SCENARIO 2: Incrementing the Counter
State: { count: 2 }
SCENARIO 3: Decrementing the Counter
State: { count: 1 }
SCENARIO 4: Resetting the Counter
State: { count: 0 }
```

