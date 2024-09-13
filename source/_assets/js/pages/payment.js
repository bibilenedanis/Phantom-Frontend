import {BasketStorage} from "../storage";
import toast from "../components/toast";

export  default async function payment(pb) {
    let basket = BasketStorage.getItemsHasQuantity();

    if (!basket) {
        window.location = '/checkout';
        return;
    }

    const products = await pb.collection('products').getFullList({
        fields: 'id, name, price',
        sort: 'name',
        filter: Object.keys(basket).map(id => `id = '${id}'`).join(' || '),
    });

    if (products.length === 0) {
        window.location = '/checkout';
        return;
    }

    if (products.length !== Object.keys(basket).length) {
        BasketStorage.clear();
        window.location = '/menu';
        return;
    }

    let total = 0;
    for (let product of products) {
        total += product.price * basket[product.id];
    }

    document.getElementById('payment_total_price').innerText = total + '₺';
    //
    // window.fillPaymentForm = function () {
    //     document.getElementById('card-number').value = '5571135571135575';
    //     document.getElementById('card-name').value = 'Pw test';
    //     document.getElementById('expiry-month').value = '12';
    //     document.getElementById('expiry-year').value = '24';
    //     document.getElementById('card-cvc').value = '000';
    // };

    document.getElementById('payment_form').addEventListener('submit', async function (e) {
        e.preventDefault();

        // re-check basket before starting payment
        let basket = BasketStorage.getItemsHasQuantity();
        if (products.length !== Object.keys(basket).length) {
            toast('Basket is empty', '#ff0000');
            BasketStorage.clear();
            window.location = '/menu';
            return;
        }

        const creditCardNumber = document.getElementById('card-number').value;
        const creditCardName = document.getElementById('card-name').value;
        const creditCardExpireMonth = document.getElementById('expiry-month').value;
        const creditCardExpireYear = document.getElementById('expiry-year').value;
        const creditCardCvc = document.getElementById('card-cvc').value;

        if (window.validatePaymentForm(creditCardNumber, creditCardName, creditCardExpireMonth, creditCardExpireYear, creditCardCvc)) {
            const response = await pb.send('/api/generate-three-d-secure-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    basket: basket,
                    note: document.getElementById('order-note').value.substring(0, 200),
                }
            })

            if (!response || !response.token || !response.url) {
                toast('Ödeme başarısız, lütfen bilgilerinizi kontrol edip yeniden deneyin', '#ff0000');
                return;
            }

            const params = {
                ThreeDSessionId: response.token,
                CardHolderName: creditCardName,
                CardNo: creditCardNumber,
                ExpireDate: creditCardExpireMonth + '/' + creditCardExpireYear,
                Cvv: creditCardCvc,
            };

            let form = document.createElement('form');
            form.method = 'POST';
            form.action = response.url;
            // form.target = '_blank';
            form.style.display = 'none';

            for (let key in params) {
                let i = document.createElement('input');
                i.type = 'text';
                i.name = key;
                i.value = params[key];
                form.appendChild(i);
            }

            let b = document.createElement('button');
            b.type = 'submit';
            b.innerText = 'Pay';
            b.classList.add('bg-green-400');
            form.appendChild(b);

            document.body.appendChild(form);
            form.submit();
        }
    });
}

window.validatePaymentForm = (creditCardNumber, creditCardName, creditCardExpireMonth, creditCardExpireYear, creditCardCvc) => {
    if (
        !creditCardNumber ||
        !creditCardName ||
        !creditCardExpireMonth ||
        !creditCardExpireYear ||
        !creditCardCvc
    ) {
        toast('Lütfen tüm alanları doldurun', '#ff0000');
        return;
    }

    if (creditCardNumber.length !== 16) {
        toast('Kredi kartı numarası 16 haneli olmalıdır', '#ff0000');
        return;
    }

    if (!window.validateCreditCardNumber(creditCardNumber)) {
        toast('Kredi kartı numarası geçersiz', '#ff0000');
        return;
    }

    if (creditCardName.length < 3) {
        toast('Kredi kartı adı en az 3 karakter olmalıdır', '#ff0000');
        return;
    }

    if (creditCardExpireMonth.length !== 2) {
        toast('Kredi kartı son kullanma ayı 2 haneli olmalıdır', '#ff0000');
        return;
    }

    if (creditCardExpireYear.length !== 2) {
        toast('Kredi kartı son kullanma yılı 2 haneli olmalıdır', '#ff0000');
        return;
    }

    if (creditCardCvc.length !== 3) {
        toast('Kredi kartı cvc 3 haneli olmalıdır', '#ff0000');
        return;
    }

    return true;
}

// luhn algorithm
window.validateCreditCardNumber = (value) => {
    if (/[^0-9-\s]+/.test(value)) return false;

    let nCheck = 0;
    let bEven = false;
    value = value.replace(/\D/g, "");

    for (let n = value.length - 1; n >= 0; n--) {
        let cDigit = value.charAt(n);
        let nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) === 0;
}