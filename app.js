var express = require('express');
var cors = require('cors');
var app = express();

var Workers = [
  	{ first_name : 'Christophe' , last_name : 'job' , email_address : 'christophe.job@oracle.com' , manager_email_address : 'thomas.kurian@oracle.com' },
	{ first_name : 'Peter' , last_name : 'Magnussen' , email_address : 'psm@oracle.com' , manager_email_address : 'thomas.kurian@oracle.com' },
    { first_name : 'Thomas' , last_name : 'Kurian' , email_address : 'thomas.kurian@oracle.com' , manager_email_address : 'larry.ellison@oracle.com' },
    { first_name : 'Campbell' , last_name : 'Webb' , email_address : 'campbell.webb@oracle.com' , manager_email_address : 'thomas.kurian@oracle.com' },
    { first_name : 'Gopi' , last_name : 'Tummala' , email_address : 'gopi.tummala@oracle.com' , manager_email_address : 'psm@oracle.com' },
    { first_name : 'Jacky' , last_name : 'Abella' , email_address : 'jacky.dominguez@oracle.com' , manager_email_address : 'gopi.tummala@oracle.com' }
]

app.use(cors());

 
app.get('/v1/Workers', function (req, res) {
    console.log('request: ',req.url);

    var retval = [];
    r = 0;
    for (i = 0; i < Workers.length; i++) {
        if (Workers[i].email_address.search(req.query.email_address) != -1) {
            retval[r] = Workers[i];
            r++;
            Workers[i].directs = [];
            s = 0;
            for (j = 0; j < Workers.length; j++) {
                if (Workers[j].manager_email_address == Workers[i].email_address) {
                    Workers[i].directs[s] = Workers [j];
                    s++;
                }
            }
        }
    }
    res.json(retval);
})


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);