//Import Lib
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

//Init Identifier
const app = express()
const port = 3001
app.use(bodyParser.json())

const CategoryController = require('./controllers/categories')
const MenuController = require('./controllers/menus')
const OrderController = require('./controllers/orders')
const TransactionController = require('./controllers/transactions')

//Init Route
app.group("/api/v1", (router) => {

    //API
    router.get('/categories',CategoryController.index);
    router.get('/category/:id',CategoryController.show);
    router.post('/category',CategoryController.store);
    // router.patch('/category/:id',CategoryController.patch);
    router.delete('/category/:id',CategoryController.delete)
    router.get('/categoriess/:id', CategoryController.menulist)
    router.get('/categoriesss/:id', CategoryController.menulistall)
    //GetMenuByIDCat
    // router.get('/category/menus/:idCategory',CategoryMenusController.show);

    //API
    router.get('/menus',MenuController.index);
    router.get('/menu/:id',MenuController.show);
    router.post('/menus',MenuController.store);
    router.patch('/menu/:id',MenuController.patch);
    router.delete('/menu/:id',MenuController.delete);

    // //API
    // router.get('/orders',OrderController.index);
    // router.get('/order/:id',OrderController.show);
    // router.post('/order',OrderController.store);
    // router.patch('/order/:id',OrderController.patch);
    // router.delete('/order/:id',OrderController.delete);

    // //API
    // router.get('/transactions',TransactionController.index);
    // router.get('/transaction/:id',TransactionController.show);
    // router.post('/transaction',TransactionController.store);
    // router.patch('/transaction/:id',TransactionController.patch);
    // router.delete('/transaction/:id',TransactionController.delete);
    
})

//Init Listener Port
app.listen(port, () => console.log(`Listening on port ${port}!`))