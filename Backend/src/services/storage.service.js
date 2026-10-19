
const dotenv=require('dotenv');
const ImageKit=require("@imagekit/nodejs");

dotenv.config();
const imagekit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
})
async function uploadfile(buffer){
    const result=await imagekit.files.upload({
        file:buffer.toString('base64'),
        fileName:'image.jpg'
    })
    return result;
}
module.exports=uploadfile;