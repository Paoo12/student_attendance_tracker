const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const AttendanceManager = require('../models/attendanceManager.js');


exports.login = async (req, res) => {
    const { email, passowrd } = req.body; //req body gets it from the form.
    const secret = process.env.secret_key;
    try {
        const user = await AttendanceManager.findOne({ email });

        if (!user) {
            return res.status(404).json('Invalid username');
        }
        //use bcrytp to verify password
        const result = await bcrypt.compare(password, user.password);
        const token = jwt.sign({ id: user._id.toString() }, secret, { expiresIn: '5m' });
    } catch (error) {

    }


}
