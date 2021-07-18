
var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
const net = require('net')
var xml2js = require('xml2js');

require('./passport-config');

var modelAccess = require('./models/access-point-model');
var modelTag = require('./models/wifi-tags-model');
var modelActiveDevices = require('./models/active-devices');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var employeesRouter = require('./routes/employees');
var accessPointRouter = require('./routes/access-point');
var vehicalsRouter = require('./routes/vehicals');
var assetsRouter = require('./routes/assets');
var wifiTagsRouter = require('./routes/wifi-tags');
var deviceAssociationRouter = require('./routes/device-association');
var activeDeviceRouter = require('./routes/active-devices');

const { json } = require('express');

var app = express(); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/employees', passport.authenticate('jwt', { session: false }), employeesRouter);
app.use('/vehicals', passport.authenticate('jwt', { session: false }), vehicalsRouter);
app.use('/assets', passport.authenticate('jwt', { session: false }), assetsRouter);
app.use('/wifi-tags', passport.authenticate('jwt', { session: false }), wifiTagsRouter);
app.use('/access-point', passport.authenticate('jwt', { session: false }), accessPointRouter);
app.use('/deviceAssociation',passport.authenticate('jwt',{session: false}), deviceAssociationRouter);
app.use('/active-device',passport.authenticate('jwt', { session: false }),activeDeviceRouter);


var parser = new xml2js.Parser();
/*const socket = new net.Socket();

var wifiTags = [];




function filterActiveTags(req,res) {
  
};

function getActiveDevice(req,res) {
    
 var  host = req.ipAddress;
 var  port = parseInt(req.port);  
  
  socket.on('error', (err) => console.log(err))
  socket.on('data', (data) => {
	
	result = data.toString("utf8");
	parser.parseString(result.replace(/['"]+/g, ''),function(err,res){
		if(res!= null){
			r = res['Tag'];
		    for (var i in r) {
          modelTag.getwifiTagss(function(err, result) {
            if(err) {
                res.json(err)
            } else {
              
              if(result!= null){
                var j=0;
                 while(j < result.length){
                   if(result[j].tag_mac === r[i][0]){
                     
                     console.log('Matched!' + result[j].tag_mac+'...'+r[i][0]);
                     modelActiveDevices.addactivedevice({id :result[j].id,tag_mac: result[j].tag_mac}, function(err, result) {
                      console.log({data: result, error: err});
                  })
                     
                   }
                   else{
                    console.log('Not Matched...' + result[j].tag_mac+'...'+r[i][0]);
                   }
                   j++;
                 }
             }
            }
          })
		    	
		    	break; 
		    }
		}
		
	})
	
    
});

socket.connect(port, host, () => {
  socket.write('<Start><MsgID>0</MsgID><Start>')
})
}


modelAccess.getaccessPoints(function(err, result) { 
  if(err) {
      res.json(err) 
  } else {
       
      
      getActiveDevice(result[0])
  }
});*/




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

