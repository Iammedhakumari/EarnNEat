/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(params) {
	


var Cloudant = require('@cloudant/cloudant');    
    return new Promise(function (resolve, reject) {
        try {
            let url = 'REPLACE_CLOUDANT_URL';
            let cloudant = new Cloudant({ url: url, username: 'USERNAME', password: 'PASSWORD'});
            let db2 = cloudant.db.use('joblist');
           
            db2.find({'selector':{'zipcode':params.zipcode}},function (err, result) {
                if (err) {
                    reject({ error: err });
                } 
                else {
                    resolve({ data: result.docs});
                }
            });
        }
        catch (error) {
            reject({ error: error })
        }
    });
}
