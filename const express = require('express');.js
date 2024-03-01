const express = require('express'); 
    const app = express(); 
  
    let users = [ 
    { id: 1, name: 'John Doe', email: 'john@example.com' }, 
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' } 
    ]; 
  
    // Get all users 
    app.get('/users', (req, res) => { 
    res.json(users); 
    }); 
  
    const port = process.env.PORT || 3000; 
    app.listen(port, () => { 
    console.log(`Server is running on port ${port}`); 
    }); 

    <div id="operator_btns">
  <button id="plus" onclick="op='+'">+</button>
  <button id="minus" onclick="op='-'">-</button>
  <button id="times" onclick="op='*'">x</button>
  <button id="divide" onclick="op='/'">:</button>
</div>