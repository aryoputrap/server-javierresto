exports.showall = (req,res) => {
    User.findAll().then(data => {
        res.send({
            message: "data berhasil diambil",
            data
        })
    })
}