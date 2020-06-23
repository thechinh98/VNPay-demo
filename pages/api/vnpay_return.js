import { sortObject, config } from '../../utils'

export default (req, res) => {
    if (req.method === "POST") {
        var vnp_Params = req.query;
        console.log("vnp", vnp_Params)

        var secureHash = vnp_Params['vnp_SecureHash'];

        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        vnp_Params = sortObject(vnp_Params);
        let {  vnp_HashSecret } = config
        var secretKey = vnp_HashSecret
        var querystring = require('qs');
        var signData = secretKey + querystring.stringify(vnp_Params, { encode: false });

        var sha256 = require('sha256');

        var checkSum = sha256(signData);

        if(secureHash === checkSum){
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            res.status(200).json({code: vnp_Params['vnp_ResponseCode']})
        } else{
            res.status(200).json({code: '97'})
        }
    }
}