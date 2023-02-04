// The commonly - used HTTP methods are POST, GET, PUT, PATCH, and DELETE.These methods correspond to create, read, update, and delete (or CRUD) operations, respectively.

/*
// Get request.
fetch('http://localhost:3000/chat/getChats')
.then(res => res.json())
.then(res => console.log('res-->', res))

// Post request.
fetch('http://localhost:3000/chat/addChats', {method:'post'} )
.then(res => res.json())
.then(res => console.log('res-->', res))

// Put/Update request.
fetch('http://localhost:3000/chat/updateChats', {method:'PUT'} )
.then(res => res.json())
.then(res => console.log('res-->', res))

// Delete request.
fetch('http://localhost:3000/chat/deleteChats', {method:'DELETE'} )
.then(res => res.json())
.then(res => console.log('res-->', res))
*/


const express = require('express')
const router = express.Router()
const Rides = require('../models/Rides')

// Get-Data.
router.get('/getRides', async (req, res) => {
    const rides = await Rides.find({})
    res.send({ message: 'Get Rides Successfully', data: rides })
})

// Add-Data.
router.post('/addRides', async (req, res) => {
    const data = req.body;
    try {
        const rideData = new Rides(data)
        await rideData.save()
        res.send({ message: 'Get Rides Successfully' })
    } catch (e) {
        res.send({ error: e.message })
    }
})

// Update-Data.
router.put('/updateRides/:id', async (req, res) => {
    Rides.findByIdAndUpdate(req.params.id, req.body, (error, result) => {
        if (!error) {
            res.send({ message: 'Update Rides Successfully', result: result })
        } else {
            res.send({ error: error })
        }
    })
})

// Delete-Data.
router.delete('/deleteRides/:id', (req, res) => {
    Rides.findByIdAndDelete(req.params.id, req.body, (error, result) => {
        if (!error) {
            res.send({ message: 'Delete Rides Successfully', result: result })
        } else {
            res.send({ error: error })
        }
    })
})

module.exports = router;