const express = require("express");
const router = express.Router();
const http = require("https");


// //define root route
// router.get("/", function(req, res) {
//   //render home
//   res.render("home");
// });


const rakutenId = "";
const itemCode = "f016918-betsukai:10003150";
let rakuten_url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&itemCode=${itemCode}&applicationId=${rakutenId}`;


router.get("/", function(req, res) {

  http.get(rakuten_url, function(response) {
    let result = "";
    //run when getting the data
    response.on("data", function(data) {

      //add result one by one to empty variable-string
      result += data;
    });

    response.on("end", function() {
      //parse data
      const parsed = JSON.parse(result);
 

   console.log(parsed)
     
      // res.render("pictures", {
      //   images: images
      // });
    });
  });
});




module.exports = router;