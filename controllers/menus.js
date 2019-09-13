const models = require('../models/'),
    menu = models.menus


exports.index = (req, res) => {
    menu.findAll()
        .then(menu => res.status(200).send(menu))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    menu.findOne({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(200).send(menu)
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    User.create(req.body).then(data=> {
        res.send({
            message: "success",
            data
        })
    })
}

// exports.store = (req, res) => {
//     const data = req.body
//     console.log(data)
//     menu.create(data)
//         .then(menu => res.status(201).send(menu))
//         .catch(err => res.status(400).send(err))
// }

exports.delete = (req, res) => {
    const id = req.params.id

    menu.destroy({ where: { id } })
        .then(menu => {
            if (menu) {
                return res.status(204).send({ message: 'menu deleted' })
            } else {
                return res.status(400).send({ message: 'menu not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}