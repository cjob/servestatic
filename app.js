var express = require('express');
var cors = require('cors');
var app = express();

var Workers = [
  	{ first_name : 'Christophe' , last_name : 'job' , email_address : 'christophe.job@oracle.com' , manager_email_address : 'thomas.kurian@oracle.com' },
	{ first_name : 'Peter' , last_name : 'Magnussen' , email_address : 'psm@oracle.com' , manager_email_address : 'thomas.kurian@oracle.com' },
    { first_name : 'Thomas' , last_name : 'Kurian' , email_address : 'thomas.kurian@oracle.com' , manager_email_address : 'larry.ellison@oracle.com' }
]  

app.use(cors());

 
app.get('/v1/Workers', function (req, res) {
    var retval = [];
        r = 0;
	for (i =0 ; i < Workers.length ; i ++) {

		if (Workers[i].email_address.search(req.query.email_address) != -1)
			retval[r] = Workers[i];
		    r++;
	}
	res.json(retval);
})

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);