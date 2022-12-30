
require('dotenv').config()
const {CONNECTION_URI} = process.env
const Sequelize = require('sequelize')

// you wouldn't want to rejectUnauthorized in a production app, but it's great for practice
const sequelize = new Sequelize(CONNECTION_URI, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})


module.exports = {
  
    createOrder: (req, res) => {
        console.log(req.body);
        
        sequelize.query(`INSERT into orders (ordernumber,customer_first_name,customer_last_name,customer_phone_no,customer_emailid,item_name,flavors,mixers,sweeetness,icelevels,order_date,order_total,tax) values (nextval('order_no'),'${req.body.customerfname}', '${req.body.customerlname}','${req.body.customerphone}','${req.body.customeremail}','${req.body.itemname}','${req.body.flavors}','${req.body.mixers}','${req.body.sweetness}','${req.body.icelevels}','${req.body.order_date}','${req.body.order_total}','${req.body.tax}');
        `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
        
   },

    getOrders: (req, res) => {
        sequelize.query(`select c.orderNumber,  c.customer_first_name , c.order_date, c.order_total,c.order_date from orders c ORDER BY c.orderNumber DESC limit 1; `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }






}
