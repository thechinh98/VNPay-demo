import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

export default function vnpay_return() {
  const router = useRouter();

  const [valid, setvalid] = useState(false);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // const urlParams = new URLSearchParams(window.location.search);
    // const myParam = urlParams.get('vnp_SecureHash');
    // console.log(myParam)
    async function checkSum() {
      const x = await axios({
        method: "post",
        url: `/api/vnpay_return${window.location.search}`,
      });
      x.data.code === "00" ? setvalid(true) : setvalid(false);
      if (x.data.code === "00") {
        Swal.fire(
          "Congratulation!",
          "Payment successfully!",
          "success"
        ).then(() => router.push("/"));
      } else {
        Swal.fire("Oops!", "Payment failed!", "error").then(() =>
          router.push("/")
        );
      }
      setloading(false);
    }

    checkSum();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>{valid ? "Success" : "Error"}</div>
      )}
    </div>
  );
}
