const express=require('express');
const router=express.Router();
const widgetdb = require('widgetdb');

const app=express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

/**
 @GET /user homepage
 */
router.get('/',function(req,res){

return res.send('main function');

});

/**
 @GET /users/:id
 */

router.get('/:id',function(req,res){

let id=req.params.id;

  if(!id){

    return res.send('Please enter a valid URL');
  } else {
    return res.send(widgetdb.get(id));
  }


});


router.put('/:id',bodyParser.json(),function(req,res){

  let value=req.body.value;
 //
   let id=req.params.id;

  if(value && id){

 widgetdb.put(id,value);
  }

  return res.sendStatus(200);

});


/**
 @POST /user
 */

router.post('/user',bodyParser.json(),function(req,res){

  let id=req.body.id;

  let value=req.params.value;

  if(value && id){

    widgetdb.put(id,value);
  }

  return res.send(widgetdb.get(id));

});


module.exports=router;
