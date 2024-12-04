const mongoose = require('mongoose');

const attendanceManagerSchema = mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        dafualt: 'Attendance Manager',
        enum: ['Attendance Manager', 'Student'],
    }

});

const AttendanceManager = mongoose.model('AttendanceManager', attendanceManagerSchema);

module.exports = AttendanceManager;