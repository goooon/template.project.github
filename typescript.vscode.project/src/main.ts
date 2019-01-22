
//import * as DES from "crypto-js/aes";
// import {TripleDES as DES} from "crypto-js";
// import * as UTF8 from "crypto-js/enc-utf8";
import * as CryptoJS from 'crypto-js';

class Startup {
    public static main(): number {
        console.log('Hello World');
        let value = "https://www.soft521.com";
        
        const key = "06E851D5";

        const keyHex = CryptoJS.enc.Utf8.parse(key);
        const ivHex = CryptoJS.enc.Utf8.parse(key);
        //加密
        value = CryptoJS.DES.encrypt(value, keyHex,{
            iv:ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            format:CryptoJS.format.Hex
        }).toString();
        console.log("这个value就是加密后的结果",value);
        //解密（需要把得到的结果转化成utf-8格式的）
        value = CryptoJS.DES.decrypt(value, keyHex,{
            iv:ivHex,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            format:CryptoJS.format.Hex
        }).toString(CryptoJS.enc.Utf8);
        console.log("这个value就是解密后的结果",value);
        return 0;
    }
}

Startup.main();