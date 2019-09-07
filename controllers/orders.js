const models = require('../models/'),
    order = models.orders

exports.index = (req, res) => {
    order.findAll()
        .then(order => res.status(200).send(order))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    order.findOne({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(200).send(order)
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    order.create(data)
        .then(order => res.status(201).send(order))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    order.destroy({ where: { id } })
        .then(order => {
            if (order) {
                return res.status(204).send({ message: 'order deleted' })
            } else {
                return res.status(400).send({ message: 'order not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}