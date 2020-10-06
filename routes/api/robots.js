const express = require("express")
const router = express.Router();
const Robot = require('../../models/Robot')
const passport = require('passport')
// const db = require('../../config/keys.js').mongoURI


//Validations below

// const validateRobot = require('../../validation/robots')

router.get('/test', (req, res) => {
    res.json({ msg: "This is the tweet router" })
})

router.get('/', (req, res) => {
    Robot.find()
        .sort({ hp: -1 })
        .then(robots => res.json(robots))
        .catch(err => res.status(404).json({ norobotsfound: "No robots found"}));
})

// router.get('/user/:user_id', (req, res) => {
//     Robot.findById(req.params.user_id)
//         .sort({ hp: -1 })
//         .then(robots => res.json(robots))
//         .catch(err => res.status(404).json({ norobotsfound: "No robot found for that user"}));
// })


router.get('/user/:user_id', (req, res) => {
    Robot.find({ pilot_id: req.params.user_id })
        .then(robot => res.json(robot))
        .catch(err =>
            res.status(404).json({ norobotsfound: 'No robot found from that user' }
            )
        );
});

// patch?
// this is for changing the attributes of our robot
// need to add validations for verifying robot properties
// here is the user id for travis 5f7b616c838bfcf2e0b4dbc2
router.post('/user/:user_id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        // const {errors, isValid} = validateRobot(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }
    const newRobot = new Robot({
        name: req.body.name,
        pilot_id: req.params.user_id,
        hp: req.body.hp,
        hpmax: req.body.hpmax,
        weapon1: req.body.weapon1,
        weapon2: req.body.weapon2,
        qp: req.body.qp,
        missles: req.body.missles,
        evasion: req.body.evasion,
        rosscoin: req.body.rosscoin,
        photoUrl: req.body.photoUrl,
    });


    newRobot.save().then(robot => res.json(robot))
    }
);
    
router.patch('/:id', 
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        // debugger
    const updateRobot = req.body;
    Robot.findById(req.params.id)
        .then(robot => robot.update(
           { $set: updateRobot }
        )).then(robot => res.json(robot)).catch(err => console.log(err))
})

module.exports = router;