const express = require("express");
const mysql = require("mysql");
const db = require("./db");
const {
  createDatabaseQuery,
  useDatabaseQuery,
  createAdminTableQuery,
  createSuperadminTableQuery,
  createDoctorsTableQuery,
  createPatientsTableQuery,
  createLabagentsTableQuery,
  createCentersTableQuery,
  createLabsTableQuery,
  createAppointmentsTableQuery,
  createPackagesTableQuery,
  createMailboxTableQuery,
  createReviewSystem2Query,
  createReviewSystem3Query,
  createPhysicalExam2Query,
  createPhysicalExam1Query,
  createAssementTableQuery,
  createHistory1TableQuery,
  createHistory2TableQuery,
  createMedicationsTableQuery,
  createReviewSystem1TableQuery,
  createLocationTableQuery,
  createSpecializationsTableQuery,
  insertAdminTableQuery,
  insertSuperadminTableQuery,
} = require("./queries");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors("*"));
app.use(express.json());
var nodemailer = require("nodemailer");

let savedOTPS = {};

var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_USER, // Your gmail address.
    // Not @developer.gserviceaccount.com
    clientId: process.env.REACT_APP_CLIENTID,
    clientSecret: process.env.REACT_APP_CLIENTSECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
});

app.post("/sendotp", (req, res) => {
  let email = req.body.email;
  let digits = "0123456789";
  let limit = 4;
  let otp = "";
  for (i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  var mailOptions = {
    from: process.env.REACT_APP_FROMMAIL,
    to: `${email}`,
    subject: "Verification mail to register for Prevmedsol",
    generateTextFromHTML: true,
    html: `<b>Hello user, Please use this otp ${otp} for verification</b>`,
  };

  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      // response.send("couldn't send")
    } else {
      savedOTPS[email] = otp;
      setTimeout(() => {
        delete savedOTPS.email;
      }, 60000);
      console.log(response);
      return res.json(response);
    }
    smtpTransport.close();
  });
});

app.post("/verify", (req, res) => {
  let otprecived = req.body.otp;
  let email = req.body.email;
  if (savedOTPS[email] == otprecived) {
    res.send("Verfied");
  } else {
    res.status(500).send("Invalid OTP");
  }
});

// Create database and tables
db.query(createDatabaseQuery, (err) => {
  if (err) throw err;

  db.query(useDatabaseQuery, (err) => {
    if (err) throw err;
    db.query(createAdminTableQuery, (err) => {
      if (err) throw err;
      db.query(insertAdminTableQuery, (err) => {
        if (err) throw err;
        db.query(createSuperadminTableQuery, (err) => {
          if (err) throw err;
          db.query(insertSuperadminTableQuery, (err) => {
            if (err) throw err;
            db.query(createDoctorsTableQuery, (err) => {
              if (err) throw err;

              db.query(createPatientsTableQuery, (err) => {
                if (err) throw err;

                db.query(createLabagentsTableQuery, (err) => {
                  if (err) throw err;

                  db.query(createCentersTableQuery, (err) => {
                    if (err) throw err;

                    db.query(createLabsTableQuery, (err) => {
                      if (err) throw err;

                      db.query(createAppointmentsTableQuery, (err) => {
                        if (err) throw err;

                        db.query(createPackagesTableQuery, (err) => {
                          if (err) throw err;

                          db.query(createMailboxTableQuery, (err) => {
                            if (err) throw err;

                            db.query(createPhysicalExam1Query, (err) => {
                              if (err) throw err;

                              db.query(createPhysicalExam2Query, (err) => {
                                if (err) throw err;

                                db.query(createAssementTableQuery, (err) => {
                                  if (err) throw err;

                                  db.query(createReviewSystem2Query, (err) => {
                                    if (err) throw err;

                                    db.query(
                                      createReviewSystem3Query,
                                      (err) => {
                                        if (err) throw err;

                                        db.query(
                                          createHistory1TableQuery,
                                          (err) => {
                                            if (err) throw err;

                                            db.query(
                                              createHistory2TableQuery,
                                              (err) => {
                                                if (err) throw err;

                                                db.query(
                                                  createMedicationsTableQuery,
                                                  (err) => {
                                                    if (err) throw err;

                                                    db.query(
                                                      createReviewSystem1TableQuery,
                                                      (err) => {
                                                        if (err) throw err;

                                                        db.query(
                                                          createLocationTableQuery,
                                                          (err) => {
                                                            if (err) throw err;
    
                                                            db.query(
                                                              createSpecializationsTableQuery,
                                                              (err) => {
                                                                if (err) throw err;
        
                                                                console.log(
                                                                  "Database and tables created successfully"
                                                                );
                                                              }
                                                            );
                                                          }
                                                        );
                                                      }
                                                    );
                                                  }
                                                );
                                              }
                                            );
                                          }
                                        );
                                      }
                                    );
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});

// checking admin
app.post("/admin", (req, res) => {
  const sql = "SELECT * FROM admin WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// retrieving admin
app.get("/admin", (req, res) => {
  const sql = "SELECT * FROM admin";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/adminprofile", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE admin SET ? WHERE email = ?";

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});


// Queries related to doctor starts
//doctor login check
app.post("/doctor", (req, res) => {
  const sql = "SELECT * FROM doctors WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add Doctor sql
app.post("/adddoctor", (req, res) => {
  const sql =
    "INSERT INTO doctors (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`hospital`,`specialization`,`address`,`country`,`state`,`city` ) VALUES (?)";
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
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving doctors
app.get("/doctors", (req, res) => {
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
  });
});

app.post("/doctors", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE doctors SET ? WHERE email = ?";

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/doctors", (req, res) => {
  const email = req.body.email;
  const sql = "DELETE FROM doctors WHERE email = ?";

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to doctor ends

// Queries related to patient starts
//patient login check
app.post("/patient", (req, res) => {
  const sql = "SELECT * FROM patients WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add user(register) sql
app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO patients (`firstname`,`middlename`,`lastname`,`email`,`password`,`phone`,`gender`,`dob`,`bloodgroup`,`country`,`state`,`city`,`street1`,`street2`,`zipcode` ) VALUES (?)";
  const values = [
    req.body.firstname,
    req.body.middlename,
    req.body.lastname,
    req.body.email,
    req.body.password,
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
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// add patient sql
app.post("/addpatient", (req, res) => {
  const sql =
    "INSERT INTO patients (`firstname`,`lastname`,`gender`,`bloodgroup`,`dob`,`phone`,`email`,`password`,`address`,`state`,`city`,`status` ) VALUES (?)";
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
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving patients
app.get("/patients", (req, res) => {
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
  });
});

app.post("/patients", (req, res) => {
  const email = req.body.email;
  if (req.body.frompage === "forgotpassword") {
    const sql = "UPDATE patients SET password = ? WHERE email = ?";
    var password = req.body.password;
    db.query(sql, [password, email], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log("Data updated successfully");
      return res.json(data);
    });
  } else {
    const sql = "UPDATE patients SET ? WHERE email = ?";
    var newData = req.body;
    db.query(sql, [newData, email], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      console.log("Data updated successfully");
      return res.json(data);
    });
  }

  // console.log(email);
});

app.delete("/patients", (req, res) => {
  const email = req.body.email;
  const sql = "DELETE FROM patients WHERE email = ?";

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to patient ends

// Queries related to lab agent starts
//lab agent login check
app.post("/lab", (req, res) => {
  const sql = "SELECT * FROM labagents WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// add lab agent sql
app.post("/addlabagent", (req, res) => {
  const sql =
    "INSERT INTO labagents (`firstname`,`lastname`,`gender`,`phone`,`email`,`password`,`labname`,`address`,`state`,`city` ) VALUES (?)";
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
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving labagents
app.get("/labagents", (req, res) => {
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
  });
});

app.post("/labagents", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE labagents SET ? WHERE email = ?";

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/labagents", (req, res) => {
  const email = req.body.email;
  const sql = "DELETE FROM labagents WHERE email = ?";

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to lab agent ends

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

// Queries related to centers starts
// add center sql
app.post("/addcenter", (req, res) => {
  const sql =
    "INSERT INTO centers (`centername`,`phone`,`email`,`password`,`fromtiming`,`totiming`,`address`,`state`,`city` ) VALUES (?)";
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
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving centers
app.get("/managecenters", (req, res) => {
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
  });
});

app.post("/managecenters", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE centers SET ? WHERE email = ?";

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/managecenters", (req, res) => {
  const email = req.body.email;
  const sql = "DELETE FROM centers WHERE email = ?";

  db.query(sql, [email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to centers ends

// Queries related to labs starts
// add lab sql
app.post("/addlab", (req, res) => {
  const sql =
    "INSERT INTO labs (`labname`,`address`,`state`,`city`,`fromtiming`,`totiming` ) VALUES (?)";
  const values = [
    req.body.labname,
    req.body.address,
    req.body.state,
    req.body.city,
    req.body.fromtiming,
    req.body.totiming,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving labs
app.get("/managelabs", (req, res) => {
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
  });
});

app.post("/managelabs", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE labs SET ? WHERE email = ?";

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});
// Queries related to labs ends

// Queries related to appointment
// add appointment sql
app.post("/addappointment", (req, res) => {
  const sql =
    "INSERT INTO appointments (`patient`,`appointment`,`center`,`date`,`time` ) VALUES (?)";
  const values = [
    req.body.patient,
    req.body.appointment,
    req.body.center,
    req.body.date,
    req.body.timing,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving add appointment details
app.get("/addappointment", (req, res) => {
  const sql1 = "SELECT  firstname, lastname from patients";
  const sql2 = "select centername, fromtiming, totiming from centers";
  const sql3 = "SELECT labname, fromtiming, totiming from labs";

  const result = { data1: [], data2: [], data3: [] };

  db.query(sql1, (err, dbdata) => {
    if (err) {
      return res.json("Error");
    } else {
      result.data1 = dbdata;
    }

    db.query(sql2, (err, dbdata1) => {
      if (err) {
        return res.json("Error");
      } else {
        result.data2 = dbdata1;
      }
      db.query(sql3, (err, dbdata2) => {
        if (err) {
          return res.json("Error");
        } else {
          result.data3 = dbdata2;
        }
        return res.json(result);
      });
    });
  });
});

// retrieving patient appointments
app.get("/patientappointment", (req, res) => {
  const sql1 = "SELECT * from patients";
  const sql2 = "SELECT * FROM appointments";

  const result = { data1: [], data2: [] };

  db.query(sql1, (err, dbdata) => {
    if (err) {
      return res.json("Error");
    } else {
      result.data1 = dbdata;
    }

    db.query(sql2, (err, dbdata1) => {
      if (err) {
        return res.json("Error");
      } else {
        result.data2 = dbdata1;
      }
      return res.json(result);
    });
  });
});
// Queries related to appointment

// Queries related to specialization

app.post("/addspecialization", (req,res) => {
  const sql = "INSERT INTO specializations (`specialization`,`specialization_description`) values (?)";
  const values = [
    req.body.specialization,
    req.body.description,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.get("/specialization", (req, res) => {
  const sql = "SELECT * FROM specializations";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// Queries related to specialization

// retrieving data for dashboard
app.get("/dashboardPage", (req, res) => {
  const result = [];

  const sql = "select count(*) as rowcount  from ";

  db.query(sql + "doctors", (err, dbdata1) => {
    if (err) {
      return res.json("Error");
    } else {
      result.push(dbdata1);
    }

    db.query(sql + "patients", (err, dbdata2) => {
      if (err) {
        return res.json("Error");
      } else {
        result.push(dbdata2);
      }

      db.query(sql + "labs", (err, dbdata3) => {
        if (err) {
          return res.json("Error");
        } else {
          result.push(dbdata3);
        }

        db.query(sql + "appointments", (err, dbdata4) => {
          if (err) {
            return res.json("Error");
          } else {
            result.push(dbdata4);
          }
          return res.json(result);
        });
      });
    });
  });
});

// Queries related to packages starts
// add package sql
app.post("/addpackage", (req, res) => {
  const sql =
    "INSERT INTO packages (`packagename`,`packagedescription`,`amount`,`imageurl`,`service1`,`service2`,`service3`,`service4`,`service5`,`service6`,`service7`,`service8`,`service9`,`service10` ) VALUES (?)";
  const values = [
    req.body.packagename,
    req.body.description,
    req.body.amount,
    req.body.imageurl,
    req.body.service1,
    req.body.service2,
    req.body.service3,
    req.body.service4,
    req.body.service5,
    req.body.service6,
    req.body.service7,
    req.body.service8,
    req.body.service9,
    req.body.service10,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

// retrieving packages
app.get("/packages", (req, res) => {
  const sql = "SELECT * FROM packages";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/managepackages", (req, res) => {
  const packagename = req.body.packagename;
  const newData = req.body;
  const sql = "UPDATE packages SET ? WHERE packagename = ?";

  // console.log(newData);

  db.query(sql, [newData, packagename], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.delete("/managepackages", (req, res) => {
  const packagename = req.body.packagename;
  const sql = "DELETE FROM packages WHERE packagename = ?";

  db.query(sql, [packagename], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

// Queries related to packages ends

// send email related sql
app.post("/patientsentdata", (req, res) => {
  const sql =
    "INSERT INTO sentmailbox (`fromemail`,`toemail`,`subject`,`message`,`date`,`time`,`status`) VALUES (?)";
  const values = [
    req.body.fromemail,
    req.body.toemail,
    req.body.subject,
    req.body.message,
    req.body.date,
    req.body.time,
    req.body.status,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("patientsent data added successfully");
    return res.json(data);
  });
});

// retrieving patientsenddata
app.get("/patientsentdata", (req, res) => {
  const sql = "SELECT * FROM sentmailbox";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// Update patientsenddata
app.post("/inbox", (req, res) => {
  const toemail = req.body.toemail;
  const status = req.body.status;
  const sql = "UPDATE sentmailbox SET status = ? WHERE toemail = ?";

  // console.log(email);

  db.query(sql, [status, toemail], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

// Queries related to superadmin starts

// checking superadmin
app.post("/superadmin", (req, res) => {
  const sql = "SELECT * FROM superadmin WHERE `password` = ?";
  db.query(sql, [req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

// retrieving superadmin
app.get("/superadmin", (req, res) => {
  const sql = "SELECT * FROM superadmin";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.post("/superadminprofile", (req, res) => {
  const email = req.body.email;
  const newData = req.body;
  const sql = "UPDATE superadmin SET ? WHERE email = ?";

  // console.log(email);

  db.query(sql, [newData, email], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});

app.post("/history1", (req, res) => {
  const sql =
    "insert into emrhistory1 (`history1_id`, `complaint_date`, `present_illness`, `onset`, `duration`, `frequency`, `location`, `quality`, `severity`, `aggravating_factors`, `alleviating_factors`, `associated_symptoms`) values (?)";

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
  // console.log(Object.values(req.body));
});

app.post("/history2", (req, res) => {
  const sql =
    "insert into emrhistory2 (`history2_id`, `diabetes`, `heartdisease`, `heartdisease_desc`, `hypertension`, `stroke`, `asthama`, `asthama_desc`, `cancer`, `arthritis`, `tuberculosis`, `epilepsy`, `epilepsy_desc`, `operation_date`, `operation_type`, `operation_reason`, `operation_outcome`, `operation_complication`, `polio`, `measles`, `mumps`, `rubella`, `whooping_cough`, `chicken_pox`, `rheumatic_fever`, `bcg`, `mmr`, `polio_immune`, `hepatitis`, `influenza`, `pneumonia`, `varicella`, `motor_vehicle_accidents`, `motor_vehicle_accidents_desc`, `blood_group`, `blood_transfusions_received`, `blood_transfusions_given`, `hospitalizations`, `hospitalized_date`, `hospitalized_reason`, `hospitalized_outcome`, `parents_living`, `cause_of_death`, `siblings`, `medical_issues_with_siblings`, `no_of_children`, `medical_issues_with_children`, `spouse`, `hemoccults`, `blood_pressure`, `xray_chest`, `hepotitis_b`, `cholestorol_screen`, `basic_metabolic_panel`, `foot_exam`, `tuberculin_skin_test`, `random_blood_sugar`, `vision_check`, `hepatitis_c`, `pap_smear`, `liver_function_tests`, `hepotitis_a`, `urine_analysis`, `CBC_with_differential`, `diabetics_urine`, `hiv`, `living_accommodations`, `birthplace`, `education`, `hobbies`, `religion`, `persons_at_home`, `employment`, `diet`, `marriage_divorce`, `exercise`, `secondary_smoking`, `history_of_secondary_smoking`, `tobacco`, `tobacco_no_of_years`, `drugs`, `drugs_no_of_years`, `alcohol`, `alcohol_no_of_years`) values (?)";

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
  // console.log(Object.values(req.body));
});

app.post("/medication", (req, res) => {
  const sql =
    "insert into emrmedication (`medications_id`, `medications`, `medicine_type`, `medicine_name`, `dose`, `frequency`, `duration`, `reason_for_taking`, `compliance`, `takes_as_prescribed`, `allergies`, `allergic_reaction`, `allergy_type`) values (?)";

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
  // console.log(Object.values(req.body));
});

app.post("/addassessment", (req, res) => {
  const sql =
    "INSERT INTO assessments (`assement_id`,`assessment`, `plans`) VALUES (?)";

  db.query(sql, [Object.values(req.body)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("data added successfully");
    return res.json(data);
  });
});

app.post("/physicalexam1", (req, res) => {
  const sql =
    "INSERT INTO physicalexam1 (`physical1_id`,`Blood Pressure`,`Pulse`,`Respirations`,`Temperature`,`State of Health`,`Stature`,`Dress`,`Hygiene`,`Skin scars`,`Rashes`,`Bruises`,`Tattoos`,`Hair Consistency`,`Nail Pitting`,`Pupil size`,`Shape`,`Reactivity`,`Conjunctival`,`Scelral icterus`,`Fundal Papiledema`,`Hemorrhage`,`Lids`,`Extraocular Movements`,`Visual Fields`,`Acuity`,`Shape - Symmetry`,`Tenderness`,`Discharge`,`External Canal`,`Tympanic Membrone Inflammation`,`Gross Auditory Acuity`,`Symmetry`,`Nose-Tenderness`,`Nose-Discharge`,`Mucosa`,`Turbinate Inflammation`,`Frontal Maxillary Sinus Tenderness`,`Mouth Hygiene`,`Dentures`,`Erythema`,`Exudates`,`selectedValue`) VALUES (?)";

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }
    console.log("Data added successfully");
    return res.json(data);
  });
});
app.post("/physicalexam2", (req, res) => {
  const sql =
    "INSERT INTO physicalexam2 (`physical2_id`,`Masses`, `Range of Motion`,`Spine - trachea deviation`,`Thyroid size`, `Chest symmetry with respirations`, `Wheezes`, `Crackles`, `Vocal Ferritus`,`Rate`,`Rhythm`,`Murmurs`,`Rubs`,`Gallops`,`Clicks`,`Precordial Movements`,`Shape`,`Scars`,`Bowel sounds`,`Consistency`,`Abdomen Tenderness`,`Rebound`,`Abdomen Masses`,`Gaurding`,`Spleen Size`,`Liver Span`,`Ercussion`,`Costovertebral Tenderness`,`Skin Changes`,`Symmetry`,`Tenderness`,`Breasts Masses`,`Dimpling`,`Rashes`,`Ulcers`,`Genitourinary Scars`,`Nodules`,`Induration`,`Discharge`,`Scrotal Masses`,`Carotid`,`Radial`,`Femoral`,`Popliteal`,`Posterior tibial`,`Dorsalis pedis pulses`,`Carotid Bruits`,`Jugular Venous Distension`,`Edema`,`Varicosa Veins`,`Cervical Infraclavicular`,`Axillary`,`Trochlear`,`Cranial nerves`,`Sensation`,`Strength`,`Reflexes`,`Cerebellum`,`Gait`,`Sphincter tone`,`Prostate consistency`,`Masses Occult Stool Bicod`,`Muscle Atrophy`,`Weakness`,`Joint ange of motion`,`Instability`,`Redness`,`Swelling`,`Musculoskeletal Tenderness`,`Spine Deviation`,`Musculoskeletal Gait`) VALUES (?)";

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem1", (req, res) => {
  //   const sql = "INSERT INTO reviewsystem2 () VALUES (?)";
  const sql =
    "INSERT INTO reviewsystem1 (`review1_id`,`weight_change`,`weight_change_in_kg`,`weight_change_time`,`fatigue`,`weakness`,`fever`,`chills`,`night_sweats`,`Skin`,`Hair`,`Nail Changes`,`Itching Skin`,`Rashes`,`Sores`,`Lumps`,`trauma`,`trauma_desc`,`headache`,`location`,`frequency`,`vomiting`,`nausea`,`visual_changes`,`Glasses`,`Contact Lenses`,`Blurriness`,`Tearing`,`Itching Eyes`,`Acute Visual Loss`,`Rhinorrhea`,`Stuffiness`,`Sneezing`,`Allergy`,`Itching Nose`,`Epistaxis`,`Bleeding Gums`,`Hoarseness`,`Soar Throat`,`Swollen Neck`) VALUES (?)";

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem2", (req, res) => {
  //   const sql = "INSERT INTO reviewsystem2 () VALUES (?)";
  const sql =
    "INSERT INTO reviewsystem2 (`review2_id`,`Skin Changes`,`Masses/lumps`,`Breast Pain`,`Discharge`,`Self Exams`,`Shortness of Breath`,`Wheeze`,`Cough`,`Sputum`,`Hemoptysis`,`Pneumonia`,`Asthma`,`Bronchitis`,`Emphysema`,`Tuberculosis`,`Last Chest X-ray`,`Hypertension`,`Murmurs`,`Angina`,`Palpitation`,`Dyspnea on exertion`,`Orthopnea`,`Paroxysmal nocturnal dyspnea`,`Edema`,`Last EKG`,`Appetite`,`Nausea`,`Vomiting`,`Indigestion`,`Dysphagia`,`Bowel Movement`,`Frequency Change`,`Stool Color`,`Diarrhea`,`Constipation`,`Bleeding - Hemetemesis`,`Bleeding - Hemorrhoids`,`Bleeding - Melena or Hematechezia`,`Abdominal Pain`,`Jaundice`,`Hepatic`,`Frequency`,`Hesitancy`,`Urgency`,`Polyuria`,`Dysuria`,`Hematuria`,`Nocturia`,`Incontinence`,`Stones`,`Infection`,`Muscle Weakness`,`Musculoskeletal Pain`,`Joint Stiffness`,`Range of Motion`,`Instability`,`Redness`,`Swelling`,`Arthritis`,`Gout`) VALUES (?)";

  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

app.post("/reviewsystem3", (req, res) => {
  const sql =
    "INSERT INTO reviewsystem3 (`review3_id`,`Penile discharge sore`,`Testicular pain or masses`,`Hernias`,`Menarch`,`Period regularity`,`Frequency`,`Duration`,`Dysmennorhea`,`Last Period`,`Itching`,`Discharge`,`Sores`,`Pregnancies and Complications`,`Miscarriages - Abortions`,`Birth Control`,`Menopause`,`Hot flashes - Sweats`,`STD History - treatment`,`Sex interest`,`Function problems`,`Contraception methods`,`Heat cold intolerance`,`Excessive Sweating`,`Polyuria`,`Polydipsia`,`Polyphagia`,`Thyroid Problems`,`Diabetes`,`Anaemia`,`Easy bruising - bleeding`,`Petechia`,`Purpura`,`Transfusions`,`Loss of sensation - numbness`,`Tingling`,`Tremors`,`Weakness`,`Paralysis Fainting`,`Blackouts`,`Seizures`,`Mood`,`Anxiety`,`Depression`,`Tension`,`Memory`,`Leg edema`,`Claudication`,`Varicose veins`,`Thromboses - emboli`) VALUES (?)";
  db.query(sql, [Object.values(req.body.accordionContents)], (err, data) => {
    if (err) {
      console.log(err);
      return res.json("Error");
    }

    console.log("Data added successfully");
    return res.json(data);
  });
});

// Queries related to superadmin ends

// Queries related to locations

app.post("/location", (req,res) => {
  const sql = "INSERT INTO locations (`location_state`,`location_city`) values (?)";
  const values = [req.body.location_state, req.body.location_city];
  db.query(sql, [values], (err,data) => {
    if (err){
      console.log(err);
      return res.json("Error");
    }
    console.log("Data added successfully");
    return res.json(data);
  })
});

app.get("/location", (req, res) => {
  const sql = "SELECT * FROM locations";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json(data);
    } else {
      return res.json("Fail");
    }
  });
});

app.delete("/location", (req, res) => {
  const location_id = req.body.id;
  const sql = "DELETE FROM locations WHERE location_id = ?";

  db.query(sql, [location_id], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data deleted successfully");
    return res.json(data);
  });
});

app.post("/locations", (req, res) => {
  const state = req.body.location_id;
  const newData = req.body;
  const sql = "UPDATE locations SET ? WHERE location_id = ?";

  // console.log(newData);

  db.query(sql, [newData, state], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});
app.post("/locationcity", (req, res) => {
  const state = req.body.location_id;
  const newData = req.body;
  const sql = "UPDATE locations SET ? WHERE location_id = ?";

  // console.log(newData);

  db.query(sql, [newData, state], (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    console.log("Data updated successfully");
    return res.json(data);
  });
});
// Queries related to locations
app.listen(8080, () => {
  console.log("listening");
});
