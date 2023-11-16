const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Eranna@123",
    database: "prevmedsol"
})


//doctor login check
app.post('/doctor', (req, res) => {
    const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
})


//patient login check
app.post('/patient', (req, res) => {
    const sql = "SELECT * FROM patients WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            const sql1 = "SELECT * FROM registeredusers WHERE `email` = ? AND `password` = ?";
            db.query(sql1, [req.body.username, req.body.password], (err1, data1) => {
                if(err1){
                    return res.json("Error");
                }
                if(data1.length > 0){
                    return res.json("Success");
                }
                else{
                    return res.json("Fail");
                }
            })
        }
    })
})

//lab agent login check
app.post('/lab', (req, res) => {
    const sql = "SELECT * FROM labagents WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Fail");
        }
    })
})

//frontoffice login check
// app.post('/doctor', (req, res) => {
//     const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
//     db.query(sql, [req.body.username, req.body.password], (err, data) => {
//         if (err) {
//             return res.json("Error");
//         }
//         if (data.length > 0) {
//             return res.json("Success");
//         } else {
//             return res.json("Fail");
//         }
//     })
// })


// add user(register) sql
app.post('/register', (req, res) => {

        const sql = "INSERT INTO registeredusers (`firstname`,`middlename`,`lastname`,`email`,`password`,`cpassword`,`phone`,`gender`,`dob`,`bloodgroup`,`country`,`state`,`city`,`street1`,`street2`,`zipcode` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.middlename,
            req.body.lastname,
            req.body.email,
            req.body.password,
            req.body.cpassword,
            req.body.phone,
            req.body.gender,
            req.body.dob,
            req.body.bloodgroup,
            req.body.country,
            req.body.state,
            req.body.city,
            req.body.street1,
            req.body.street2,
            req.body.zipcode,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})



// add Doctor sql
app.post('/adddoctor', (req, res) => {
 
        const sql = "INSERT INTO doctors (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`hospital`,`specialization`,`address`,`country`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.hospital,
            req.body.specialization,
            req.body.address,
            req.body.country,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// add patient sql
app.post('/addpatient', (req, res) => {
 
        const sql = "INSERT INTO patients (`firstname`,`lastname`,`gender`,`bloodgroup`,`dob`,`phone`,`email`,`password`,`address`,`state`,`city`,`status` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.bloodgroup,
            req.body.dob,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.address,
            req.body.state,
            req.body.city,
            req.body.status,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// add lab agent sql
app.post('/addlabagent', (req, res) => {
  
        const sql = "INSERT INTO labagents (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`labname`,`address`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.firstname,
            req.body.lastname,
            req.body.gender,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.labname,
            req.body.address,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// add center sql
app.post('/addcenter', (req, res) => {
 
        const sql = "INSERT INTO centers (`centername`,`phone`,`email`,`password`,`fromtiming`,`totiming`,`address`,`state`,`city` ) VALUES (?)";
        const values = [
            req.body.centername,
            req.body.phone,
            req.body.email,
            req.body.password,
            req.body.fromtiming,
            req.body.totiming,
            req.body.address,
            req.body.state,
            req.body.city,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// add lab sql
app.post('/addlab', (req, res) => {
 
        const sql = "INSERT INTO labs (`labname`,`address`,`state`,`city`,`fromtiming`,`totiming` ) VALUES (?)";
        const values = [
            req.body.labname,
            req.body.address,
            req.body.state,
            req.body.city,
            req.body.fromtiming,
            req.body.totiming,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// add appointment sql
app.post('/addappointment', (req, res) => {

        const sql = "INSERT INTO appointments (`patient`,`appointment`,`center`,`date`,`time` ) VALUES (?)";
        const values = [
            req.body.patient,
            req.body.appointment,
            req.body.center,
            req.body.date,
            req.body.timing,
        ]
        db.query(sql, [values], (err, data) => {
            if (err) {
                console.log(err)
                return res.json(err);
            }
            console.log("data added successfully");
            return res.json(data);
        })
})


// retrieving data for dashboard
// retrieving data for dashboard
function queryPromise(sql) {
    return new Promise((resolve, reject) => {
      db.query(sql, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

app.get('/dashboardPage', (req, res) => {
    const sqlTable1 = 'SELECT COUNT(*) as ROWCOUNT  FROM doctors';
    const sqlTable2 = 'SELECT COUNT(*) as ROWCOUNT FROM patients';
    const sqlTable3 = 'SELECT COUNT(*) as ROWCOUNT  FROM labs';
    const sqlTable4 = 'SElECT COUNT(*) as ROWCOUNT FROM appointments'
  
    Promise.all([
      queryPromise(sqlTable1),
      queryPromise(sqlTable2),
      queryPromise(sqlTable3),
      queryPromise(sqlTable4),

    ])
      .then(([result1,result2,result3,result4]) => {
        // Combine the results
        const combinedData = { table1: result1, table2: result2, table3: result3,table4:result4};
        console.log(combinedData)
        res.json(combinedData);
      })
      .catch((error) => {
        console.error('Database query error: ' + error.message);
        res.status(500).send('Database error');
      });
  });




// retrieving patients
app.get('/addappointment', (req, res) => {
    const sql1 = "SELECT  firstname, lastname from patients";
    const sql2 = "select centername from centers";

    const result = {data1:[],data2:[]};

    db.query(sql1, (err, dbdata) => {
        if (err) {
            return res.json("Error");
        }
        else{
            result.data1 = dbdata
        }
        
        db.query(sql2, (err, dbdata1)=>{
            if(err){
                return res.json("Error");
            }
            else{
                result.data2 = dbdata1
            }
            return res.json(result);

        })
    })
})


// retrieving centers
app.get('/managecenters', (req, res) => {
    const sql = "SELECT * FROM centers";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving labs
app.get('/managelabs', (req, res) => {
    const sql = "SELECT * FROM labs";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving patients 
app.get('/patients', (req, res) => {
    const sql = "SELECT * FROM patients";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving doctors 
app.get('/doctors', (req, res) => {
    const sql = "SELECT * FROM doctors";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving labagents 
app.get('/labagents', (req, res) => {
    const sql = "SELECT * FROM labagents";
    db.query(sql, (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("Fail");
        }
    })
})

// retrieving patient appointments
app.get('/patientappointment', (req, res) => {
    const sql1 = "SELECT * from patients";
    const sql2 = "SELECT * FROM appointments";

    const result = {data1:[],data2:[]};

    db.query(sql1, (err, dbdata) => {
        if (err) {
            return res.json("Error");
        }
        else{
            result.data1 = dbdata
        }
        
        db.query(sql2, (err, dbdata1)=>{
            if(err){
                return res.json("Error");
            }
            else{
                result.data2 = dbdata1
            }
            return res.json(result);

        })
    })
})

app.listen(8080, () => {
    console.log("listening");
})
