db.createCollection("Patients", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age", "gender", "contactNumber"],
      properties: {
        name: {
          bsonType: "string",
          description: "Patient's full name",
        },
        age: {
          bsonType: "int",
          minimum: 0,
          maximum: 150,
          description: "Patient's age, should be between 0 and 150",
        },
        gender: {
          bsonType: "string",
          enum: ["Male", "Female", "Other"],
          description: "Gender of the patient",
        },
        contactNumber: {
          bsonType: "string",
          pattern: "^[0-9]{10}$",
          description: "10-digit contact number",
        },
        address: {
          bsonType: "string",
          description: "Patient's residential address",
        },
        medicalHistory: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
          description: "List of past diseases or conditions",
        },
      },
    },
  },
});

db.createCollection("Doctors", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "specialization", "experienceYears", "contactNumber"],
      properties: {
        name: {
          bsonType: "string",
          description: "Doctor's full name",
        },
        specialization: {
          bsonType: "string",
          enum: [
            "Cardiologist",
            "Neurologist",
            "Orthopedic",
            "Pediatrician",
            "Dermatologist",
            "General Physician",
          ],
          description: "Specialization field",
        },
        experienceYears: {
          bsonType: "int",
          minimum: 0,
          maximum: 70,
          description: "Years of experience",
        },
        contactNumber: {
          bsonType: "string",
          pattern: "^[0-9]{10}$",
          description: "10-digit contact number",
        },
      },
    },
  },
});

db.createCollection("Appointments", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["patientId", "doctorId", "appointmentDate", "status"],
      properties: {
        patientId: {
          bsonType: "objectId",
          description: "Reference to the Patients collection",
        },
        doctorId: {
          bsonType: "objectId",
          description: "Reference to the Doctors collection",
        },
        appointmentDate: {
          bsonType: "date",
          description: "Date and time of the appointment",
        },
        status: {
          bsonType: "string",
          enum: ["Scheduled", "Completed", "Cancelled"],
          description: "Current status of the appointment",
        },
        notes: {
          bsonType: "string",
          description: "Additional notes about the appointment",
        },
      },
    },
  },
});

db.createCollection("MedicalRecords", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "patientId",
        "doctorId",
        "diagnosis",
        "treatment",
        "recordDate",
      ],
      properties: {
        patientId: {
          bsonType: "objectId",
          description: "Reference to the Patients collection",
        },
        doctorId: {
          bsonType: "objectId",
          description: "Reference to the Doctors collection",
        },
        diagnosis: {
          bsonType: "string",
          description: "Diagnosis description",
        },
        treatment: {
          bsonType: "string",
          description: "Details of treatment provided",
        },
        medications: {
          bsonType: "array",
          items: {
            bsonType: "string",
          },
          description: "List of prescribed medications",
        },
        recordDate: {
          bsonType: "date",
          description: "Date when the record was created",
        },
      },
    },
  },
});
