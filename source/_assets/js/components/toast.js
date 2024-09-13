import "toastify-js/src/toastify.css"
import Toastify from "toastify-js/src/toastify";

export default function toast(text, backgroundColor = '', duration = 3000) {
    Toastify({
        text: text,
        duration: duration,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: backgroundColor,
        },
    }).showToast();
}

