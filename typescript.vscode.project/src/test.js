
var assert = require('assert');  
var crypto = require('crypto');  
  
function test_des(param) {  
    var key = new Buffer(param.key);  
    var iv = new Buffer(param.iv ? param.iv : 0)  
    var plaintext = param.plaintext  
    var alg = param.alg  
    var autoPad = param.autoPad  
      
    //encrypt  
    var cipher = crypto.createCipheriv(alg, key, iv);  
    //cipher.setAutoPadding(true)  //default true  
    var ciph = cipher.update(plaintext, 'utf8', 'hex');  
    ciph += cipher.final('hex');  
  
    //decrypt  
    var decipher = crypto.createDecipheriv(alg, key, iv);  
    //cipher.setAutoPadding(autoPad)  
    var txt = decipher.update(ciph, 'hex', 'utf8');  
    txt += decipher.final('utf8');      
}  
  
  
test_des({  
    alg: 'des-cbc',  
    autoPad: true,  
    key: '06E851D5',  
    plaintext: 'www.qqzyl.net',  
    iv: '06E851D5'  
})  
  