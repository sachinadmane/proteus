const express = require('express');
const router = express.Router();
const widgetdb = require('widgetdb');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

/**
 @GET /user homepage
 */
router.get('/', function (req, res) {

    return res.send('main function');

});

/** GET a user by ID. Calls the Widget get method
 @GET /users/:id
 */

router.get('/:id', function (req, res) {

    let id = req.params.id;

    if (!id) {

        return res.send('Please enter a valid URL');
    } else {
        return res.send(widgetdb.get(id));
    }


});


/** This will map the PUT request FROM THE API to the widget's PUT Method
 @PUT /users/:id
 */

router.put('/:id', bodyParser.json(), function (req, res) {

    let value = req.body.value;
    //
    let id = req.params.id;

    if (value && id) {

        return res.send(widgetdb.put(id, value));
    } else {

        return res.sendStatus(400);

    }

});


/** This will map the POST request FROM THE API to the widget's PUT Method
 @POST /user
 * @return {Promise<object>} A promise that contiains
 * the value of the widget when fulfilled.
 */

router.post('/', bodyParser.json(), function (req, res) {

    let id = req.body.id;

    let value = req.body.value;

    if (value && id) {

        widgetdb.put(id, value);

        return res.send(widgetdb.get(id));
    } else {

        return res.sendStatus(400);
    }
});


module.exports = router;
