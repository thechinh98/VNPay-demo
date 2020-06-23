export function sortObject(o) {
    var sorted = {},
        key, a = [];

    for (key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    for (key = 0; key < a.length; key++) {
        sorted[a[key]] = o[a[key]];
    }
    return sorted;
}
export const config = {
	vnp_TmnCode:"1SNJ89L8",
	vnp_HashSecret:"ODJLXOCEWMFIEJXHJNMZUVFFVRDDXLOT",
	vnp_Url:"http://sandbox.vnpayment.vn/paymentv2/vpcpay.html",
	vnp_ReturnUrl: "http://localhost:3000/vnpay_return"
}