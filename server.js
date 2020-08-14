const express = require("express");
const router = express ();

router.get("/", function(req,res){
 res.write("AnaSayfaya Hosgeldin");
}
// Bir Redirect Formu olusturalim
router.get("/davet", function(req,res){
 res.redirect("https://web.kurtbot.tk/bot/add");
 //Kendinize Göre Ayarlaya Bilirsiniz

//konsola mesaj verelim
console.log("Bir kullanici Tikladi");
}

