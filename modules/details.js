'use strict';

  function showDetailsHandler(req,res){
    const SQL = 'SELECT * FROM holidays WHERE id=$1;';
    const values = [req.params.id];
    client.query(SQL, values).then(results =>{
      res.render('./pages/layout/detail',{ show : results.rows[0]});
    })
    .catch((err) => {
      errorHandler(err, req, res);
    });
    }
  
  module.exports = showDetailsHandler;
