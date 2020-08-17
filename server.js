const express = require("express");
const router = express ();
 
router.set('view engine', 'ejs');
router.use('/assets', express.static('assets'))
router.get("/", function(req,res){
 res.render("index");
 //ejs  calistirdik
});
// Bir Redirect Formu olusturalim
router.get("/davet", function(req,res){
 res.redirect("https://web.kurtbot.tk/bot/add");
 //Kendinize Göre Ayarlaya Bilirsiniz

//konsola mesaj verelim
console.log("Bir kullanici Tikladi");
});


//404 Sistemi
router.use(function(req, res, next){
res.send(404, 'Aradınız Sayfa Yok, Üzgünüm.');
});

router.listen(8080);
// sunucu 8080 portunda acilcak
// meselan localhost kullaniyorsaniz
// http://localhost:8080
// bu port default portdur
