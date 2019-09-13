const models = require('../models/'),
    menu = models.menus,
    categories = models.categories

exports.index = (req, res) => {
    categories.findAll({
        include: [{
            model: menu
        }]
    })
        .then(categories => res.status(200).send(categories))
        .catch(err => res.status(400).send(err))
}

exports.show = (req, res) => {
    const id = req.params.id

    categories.findOne({
        where: { id }, include: [{
            model: menu
        }]
    })
        .then(categories => {
            if (categories) {
                return res.status(200).send(categories)
            } else {
                return res.status(400).send({ message: 'categories not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}

exports.store = (req, res) => {
    const data = req.body
    console.log(data)
    categories.create(data)
        .then(categories => res.status(201).send(categories))
        .catch(err => res.status(400).send(err))
}

// exports.menulist = (req, res) => {
//     menu.findAll({
//         where: { categoryId: req.params.id }
//         // include: [{
//         //     model: categories,
//         //     as: 'menulist',
//         //     where : {id : req.params.id}
//         // }]
//     })
//         .then(menus => res.status(200).send(menus))
//         .catch(err => res.status(400).send(err))
// }

exports.menulistall = (req, res) => {
    categories.findOne({
        where: { id: req.params.id },
        include: [{
            model: menu,
            as: 'menulist',
        }]
    })
        .then(menus => res.status(200).send(menus))
        .catch(err => res.status(400).send(err))
}

exports.delete = (req, res) => {
    const id = req.params.id
    categories.destroy({ where: { id } })
        .then(categories => {
            if (categories) {
                return res.status(204).send({ message: 'categories deleted' })
            } else {
                return res.status(400).send({ message: 'categories not found' })
            }
        })
        .catch(err => res.status(400).send(err))
}