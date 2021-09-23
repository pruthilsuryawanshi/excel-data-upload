import async from 'async'
import Excel from '../models/dataModel.js'

const uploadFile = async (req, res) => {
    console.log(req.body)
    let arr = req.body
    const uniqueData = Array.from(new Set(arr.map(a => a.Email)))
        .map(email => {
            return arr.find(a => a.Email === email)
        })

    async.eachSeries(uniqueData, function (row, callback) {
        Excel.create(row)
        callback(null)
    }, function (err) {
        if (err) {
            res.status(400)
            throw new Error('Invalid user data')
        } else {
            res.status(201).json('Done')
        }
    })

}

export { uploadFile }