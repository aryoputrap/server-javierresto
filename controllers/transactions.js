const models = require('../models/'),
    transaction = models.transactions,
    order = models.orders


exports.index = (req, res) => {
    transaction.findAll({
        include: [{
            model: order
        }]
    })
        .then(transaction => res.status(200).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    transaction.findOne({
        where: { id }, include: [{
            model: order
        }]
    })
        .then(transaction => {
            if (transaction) {
                return res.status(200).send(transaction)
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    transaction.create(data)
        .then(transaction => res.status(201).send(transaction))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id

    transaction.destroy({ where: { id } })
        .then(transaction => {
            if (transaction) {
                return res.status(204).send({ message: 'transaction deleted' })
            } else {
                return res.status(400).send({ message: 'transaction not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}