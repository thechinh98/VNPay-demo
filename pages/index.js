import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const options = [
    { label: "Không chọn", value: null },
    { label: "Ngân hàng VNPAYQR", value: "VNPAYQR" },
    { label: "Ngân hàng NCB", value: "NCB" },
    { label: "Ngân hàng SCB", value: "SCB" },
    { label: "Ngân hàng SACOMBANK", value: "SACOMBANK" },
    { label: "Ngân hàng EXIMBANK", value: "EXIMBANK" },
    { label: "Ngân hàng MSBANK", value: "MSBANK" },
    { label: "Ngân hàng NAMABANK", value: "NAMABANK" },
    { label: "Ngân hàng VISA", value: "VISA" },
    { label: "Ngân hàng VNMART", value: "VNMART" },
    { label: "Ngân hàng VIETINBANK", value: "VIETINBANK" },
    { label: "Ngân hàng VIETCOMBANK", value: "VIETCOMBANK" },
    { label: "Ngân hàng HDBANK", value: "HDBANK" },
    { label: "Ngân hàng DONGABANK", value: "DONGABANK" },
    { label: "Ngân hàng TPBANK", value: "TPBANK" },
    { label: "Ngân hàng OJB", value: "OJB" },
    { label: "Ngân hàng BIDV", value: "BIDV" },
    { label: "Ngân hàng TECHCOMBANK", value: "TECHCOMBANK" },
    { label: "Ngân hàng VPBank", value: "VPBANK" },
    { label: "Ngân hàng AGRIBANK", value: "AGRIBANK" },
    { label: "Ngân hàng MBBank", value: "MBBANK" },
    { label: "Ngân hàng ACB", value: "ACB" },
    { label: "Ngân hàng OCB", value: "OCB" },
    { label: "Ngân hàng SHB", value: "SHB" },
    { label: "Ngân hàng IVB", value: "IVB" },
];

const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    btn: {
        background: "#0066ff",
        color: "white",
        textTransform: "lowercase",
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // or 'stretch'
    },
}));

const Order = () => {
    const classes = useStyles();
    const [orderType, setOrderType] = useState("topup");
    const [amount, setAmount] = useState(10000);
    const [orderDescription, setOrderDescription] = useState("");
    const [bankCode, setBankCode] = useState(null);
    const [language, setLanguage] = useState("vn");

    function handleChangeOrderType(event) {
        setOrderType(event.target.value);
    }

    function handleAmount(event) {
        setAmount(event.target.value);
    }

    function handleOrderDescription(event) {
        setOrderDescription(event.target.value);
    }

    function handleBankCode(event) {
        setBankCode(event.target.value);
    }

    function handleLanguage(event) {
        setLanguage(event.target.value);
    }
    async function handleClick() {
        const x = await axios({
            method: "post",
            url: "/api/create_payment_url",
            data: {
                orderType,
                amount,
                orderDescription,
                bankCode,
                language,
            },
        });

        if (x) {
            // console.log(x.data.data)
            window.location.assign(x.data.data);
        }
    }

    return ( <
        div className = "w-full p-64 pt-16 h-full"
        backgroundImage = 'url(require("..\utils\ui1.png"))' >
        <
        div className = "flex justify-between mb-32" >
        <
        Typography className = "text-medium"
        variant = "h4" > { " " }
        VNPAY DEMO { " " } <
        /Typography>{" "} <
        /div>{" "} <
        Typography variant = "h4" > Tạo mới đơn hàng < /Typography>{" "} <
        div className = "w-1/2 mt-8" >
        <
        FormControl variant = "outlined"
        className = "w-full" >
        <
        InputLabel id = "demo-simple-select-outlined-label" > { " " }
        Loại hàng hóa { " " } <
        /InputLabel>{" "} <
        Select fullWidth labelId = "demo-simple-select-outlined-label"
        id = "demo-simple-select-outlined"
        value = { orderType }
        onChange = { handleChangeOrderType }
        label = "Loại hàng hóa" >
        <
        MenuItem value = { "topup" } > Nạp tiền điện thoại < /MenuItem>{" "} <
        MenuItem value = { "billpayment" } > Thanh toán điện nước < /MenuItem>{" "} <
        MenuItem value = { "fashion" } > Nạp thẻ game < /MenuItem>{" "} <
        /Select>{" "} <
        /FormControl>{" "} <
        /div>{" "} <
        div className = "w-1/2 mt-8" >
        <
        TextField fullWidth id = "outlined-basic"
        type = "number"
        label = "Số tiền"
        variant = "outlined"
        value = { amount }
        onChange = { handleAmount }
        />{" "} <
        /div>{" "} <
        div className = "w-1/2 mt-8" >
        <
        TextField multiline rows = { 4 }
        value = { orderDescription }
        onChange = { handleOrderDescription }
        fullWidth id = "outlined-basic"
        label = "Nội dung thanh toán"
        variant = "outlined" /
        >
        <
        /div>{" "} <
        div className = "w-1/2 mt-8" >
        <
        FormControl variant = "outlined"
        className = "w-full" >
        <
        InputLabel id = "demo-simple-select-outlined-label" > { " " }
        Ngân hàng { " " } <
        /InputLabel>{" "} <
        Select fullWidth labelId = "demo-simple-select-outlined-label"
        id = "demo-simple-select-outlined"
        value = { bankCode }
        onChange = { handleBankCode }
        label = "Ngân hàng" >
        { " " } {
            options.map((item, ind) => {
                return ( <
                    MenuItem key = { ind }
                    value = { item.value } > { " " } { item.label } { " " } <
                    /MenuItem>
                );
            })
        } { " " } <
        /Select>{" "} <
        /FormControl>{" "} <
        /div>{" "} <
        div className = "w-1/2 mt-8 mb-12" >
        <
        FormControl variant = "outlined"
        className = "w-full" >
        <
        InputLabel id = "demo-simple-select-outlined-label" > { " " }
        Ngôn ngữ { " " } <
        /InputLabel>{" "} <
        Select fullWidth labelId = "demo-simple-select-outlined-label"
        id = "demo-simple-select-outlined"
        value = { language }
        onChange = { handleLanguage }
        label = "Ngôn ngữ" >
        <
        MenuItem value = "vn" > Tiếng Việt < /MenuItem>{" "} <
        MenuItem value = "en" > English < /MenuItem>{" "} <
        /Select>{" "} <
        /FormControl>{" "} <
        /div>{" "} <
        Button variant = "contained"
        onClick = { handleClick }
        className = { classes.btn } > { " " }
        Thanh toán { " " } <
        /Button>{" "} <
        /div>
    );
};

export default Order;