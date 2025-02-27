db.Patients.insertMany([
  {
    name: "Amit Sharma",
    age: 45,
    gender: "Male",
    contactNumber: "9876543210",
    address: "123 MG Road, Delhi",
    medicalHistory: ["Diabetes", "Hypertension"],
  },
  {
    name: "Priya Verma",
    age: 32,
    gender: "Female",
    contactNumber: "8765432109",
    address: "45 Green Street, Mumbai",
    medicalHistory: ["Asthma"],
  },
  {
    name: "Rohit Gupta",
    age: 28,
    gender: "Male",
    contactNumber: "7654321098",
    address: "78 Park Avenue, Kolkata",
    medicalHistory: [],
  },
  {
    name: "Sneha Kapoor",
    age: 38,
    gender: "Female",
    contactNumber: "6543210987",
    address: "56 Civil Lines, Bangalore",
    medicalHistory: ["Thyroid Disorder"],
  },
  {
    name: "Vikas Mehta",
    age: 50,
    gender: "Male",
    contactNumber: "5432109876",
    address: "12 Residency Road, Chennai",
    medicalHistory: ["High Cholesterol"],
  },
  {
    name: "Neha Malhotra",
    age: 29,
    gender: "Female",
    contactNumber: "4321098765",
    address: "34 Brigade Road, Hyderabad",
    medicalHistory: ["Migraine"],
  },
  {
    name: "Kunal Bansal",
    age: 42,
    gender: "Male",
    contactNumber: "3210987654",
    address: "90 South City, Pune",
    medicalHistory: [],
  },
  {
    name: "Swati Joshi",
    age: 36,
    gender: "Female",
    contactNumber: "2109876543",
    address: "67 New Colony, Ahmedabad",
    medicalHistory: ["PCOD"],
  },
  {
    name: "Arjun Khanna",
    age: 55,
    gender: "Male",
    contactNumber: "1098765432",
    address: "87 North Road, Chandigarh",
    medicalHistory: ["Heart Disease"],
  },
  {
    name: "Meera Das",
    age: 27,
    gender: "Female",
    contactNumber: "9988776655",
    address: "22 Lake View, Jaipur",
    medicalHistory: [],
  },
  {
    name: "Manish Tiwari",
    age: 48,
    gender: "Male",
    contactNumber: "8899776655",
    address: "54 GT Road, Lucknow",
    medicalHistory: ["Arthritis"],
  },
  {
    name: "Kiran Rao",
    age: 60,
    gender: "Female",
    contactNumber: "7788996655",
    address: "32 Market Street, Bhopal",
    medicalHistory: ["Osteoporosis"],
  },
  {
    name: "Rahul Nair",
    age: 31,
    gender: "Male",
    contactNumber: "6677889955",
    address: "45 Sunshine Lane, Kochi",
    medicalHistory: [],
  },
  {
    name: "Divya Aggarwal",
    age: 41,
    gender: "Female",
    contactNumber: "5566778899",
    address: "76 Modern Town, Surat",
    medicalHistory: ["Hypertension"],
  },
  {
    name: "Suresh Yadav",
    age: 37,
    gender: "Male",
    contactNumber: "4455667788",
    address: "100 Central Road, Indore",
    medicalHistory: ["Anemia"],
  },
]);

patient1 = db.Patients.findOne({ name: "Amit Sharma" })._id;
patient2 = db.Patients.findOne({ name: "Priya Verma" })._id;
patient3 = db.Patients.findOne({ name: "Rohit Gupta" })._id;
patient4 = db.Patients.findOne({ name: "Sneha Kapoor" })._id;
patient5 = db.Patients.findOne({ name: "Vikas Mehta" })._id;
patient6 = db.Patients.findOne({ name: "Neha Malhotra" })._id;
patient7 = db.Patients.findOne({ name: "Kunal Bansal" })._id;
patient8 = db.Patients.findOne({ name: "Swati Joshi" })._id;
patient9 = db.Patients.findOne({ name: "Arjun Khanna" })._id;
patient10 = db.Patients.findOne({ name: "Meera Das" })._id;
patient11 = db.Patients.findOne({ name: "Manish Tiwari" })._id;
patient12 = db.Patients.findOne({ name: "Kiran Rao" })._id;
patient13 = db.Patients.findOne({ name: "Rahul Nair" })._id;
patient14 = db.Patients.findOne({ name: "Divya Aggarwal" })._id;
patient15 = db.Patients.findOne({ name: "Suresh Yadav" })._id;
