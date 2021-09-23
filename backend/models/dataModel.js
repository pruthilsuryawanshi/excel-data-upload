import mongoose from 'mongoose'

const reqString = {
    type: String,
    required: true,
    unique: true,
}

const reqNumber = {
    type: Number,
    required: true,
}

const s = {
    type: String
}

const n = {
    type: Number
}

var dataSchema = mongoose.Schema
    (
        {
            'Name of the Candidate': reqString,
            Email: reqString,
            'Mobile No.': n,
            'Date of Birth': n,
            'Work Experience': s,
            'Resume Title': s,
            'Current Location': s,
            'Postal Address': s,
            'Current Employer': s,
            'Current Designation': s,
        }
    )

const Excel = mongoose.model('Excel', dataSchema)

export default Excel