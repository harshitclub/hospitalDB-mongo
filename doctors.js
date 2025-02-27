db.Doctors.insertMany([
  {
    name: "Dr. Amit Sharma",
    specialization: "Cardiologist",
    experienceYears: 20,
    contactNumber: "9876543210",
  },
  {
    name: "Dr. Priya Verma",
    specialization: "Neurologist",
    experienceYears: 15,
    contactNumber: "8765432109",
  },
  {
    name: "Dr. Rohit Gupta",
    specialization: "Orthopedic",
    experienceYears: 18,
    contactNumber: "7654321098",
  },
  {
    name: "Dr. Sneha Kapoor",
    specialization: "Pediatrician",
    experienceYears: 12,
    contactNumber: "6543210987",
  },
  {
    name: "Dr. Vikas Mehta",
    specialization: "Dermatologist",
    experienceYears: 10,
    contactNumber: "5432109876",
  },
  {
    name: "Dr. Neha Malhotra",
    specialization: "General Physician",
    experienceYears: 8,
    contactNumber: "4321098765",
  },
  {
    name: "Dr. Kunal Bansal",
    specialization: "Cardiologist",
    experienceYears: 22,
    contactNumber: "3210987654",
  },
  {
    name: "Dr. Swati Joshi",
    specialization: "Neurologist",
    experienceYears: 17,
    contactNumber: "2109876543",
  },
  {
    name: "Dr. Arjun Khanna",
    specialization: "Orthopedic",
    experienceYears: 14,
    contactNumber: "1098765432",
  },
  {
    name: "Dr. Meera Das",
    specialization: "Pediatrician",
    experienceYears: 9,
    contactNumber: "9988776655",
  },
  {
    name: "Dr. Manish Tiwari",
    specialization: "Dermatologist",
    experienceYears: 16,
    contactNumber: "8899776655",
  },
  {
    name: "Dr. Kiran Rao",
    specialization: "General Physician",
    experienceYears: 20,
    contactNumber: "7788996655",
  },
  {
    name: "Dr. Rahul Nair",
    specialization: "Cardiologist",
    experienceYears: 25,
    contactNumber: "6677889955",
  },
  {
    name: "Dr. Divya Aggarwal",
    specialization: "Neurologist",
    experienceYears: 13,
    contactNumber: "5566778899",
  },
  {
    name: "Dr. Suresh Yadav",
    specialization: "Orthopedic",
    experienceYears: 19,
    contactNumber: "4455667788",
  },
]);

doctor1 = db.Doctors.findOne({ name: "Dr. Amit Sharma" })._id;
doctor2 = db.Doctors.findOne({ name: "Dr. Priya Verma" })._id;
doctor3 = db.Doctors.findOne({ name: "Dr. Rohit Gupta" })._id;
doctor4 = db.Doctors.findOne({ name: "Dr. Sneha Kapoor" })._id;
doctor5 = db.Doctors.findOne({ name: "Dr. Vikas Mehta" })._id;
doctor6 = db.Doctors.findOne({ name: "Dr. Neha Malhotra" })._id;
doctor7 = db.Doctors.findOne({ name: "Dr. Kunal Bansal" })._id;
doctor8 = db.Doctors.findOne({ name: "Dr. Swati Joshi" })._id;
doctor9 = db.Doctors.findOne({ name: "Dr. Arjun Khanna" })._id;
doctor10 = db.Doctors.findOne({ name: "Dr. Meera Das" })._id;
doctor11 = db.Doctors.findOne({ name: "Dr. Manish Tiwari" })._id;
doctor12 = db.Doctors.findOne({ name: "Dr. Kiran Rao" })._id;
doctor13 = db.Doctors.findOne({ name: "Dr. Rahul Nair" })._id;
doctor14 = db.Doctors.findOne({ name: "Dr. Divya Aggarwal" })._id;
doctor15 = db.Doctors.findOne({ name: "Dr. Suresh Yadav" })._id;
