const Enemy = require("../../models/Enemy");

router.post('/',
    (req, res) => {
        const newEnemy = new Enemy({
            name: req.body.name,
            hp: req.body.hp,
            hpmax: req.body.hpmax,
            weapon1: req.body.weapon1,
            weapon2: req.body.weapon2,
            qp: req.body.qp,
            missles: req.body.missles,
            evasion: req.body.evasion,
            rosscoin: req.body.rosscoin,
            location: req.body.location,
        });


        newEnemy.save().then(enemy => res.json(enemy))
    }
);

router.get('/:enemy_id', (req, res) => {
    Enemy.find({ enemy_id: req.params.enemy_id })
        .then(enemy => res.json(enemy))
        .catch(err =>
            res.status(404).json({ noenemyfound: 'No enemy found from that id' }
            )
        );
});

router.get('/location/:location_id', (req, res) => {
    Enemy.find({ location: req.params.location_id })
        .then(enemy => res.json(enemy))
        .catch(err =>
            res.status(404).json({ noenemyfound: 'No enemy found from that location' }
            )
        );
});