export const BasketStorage = {
    set(productId, quantity) {
        if (quantity < 0) {
            quantity = 0;
        }

        if (quantity > 30) {
            quantity = 30;
        }

        const basket = BasketStorage.get();
        basket[productId] = quantity;
        LocalStorage.setItem('basket', basket);

        if (typeof window.basketUpdated === "function") {
            window.basketUpdated(basket);
        }
    },
    get() {
        const basket = LocalStorage.getItem('basket');
        return basket ? basket : {};
    },
    getItemsHasQuantity() {
        let basket = BasketStorage.get();

        for (let productId in basket) {
            basket[productId] = basket[productId] * 1;
            if (basket[productId] === 0) {
                delete basket[productId];
            }
        }

        return basket;
    },
    getItemQuantity(productId) {
        const basket = BasketStorage.get();
        if (!basket[productId]) {
            return 0;
        }

        basket[productId] = parseInt(basket[productId]);

        if (basket[productId] < 0) {
            basket[productId] = 0;
            LocalStorage.setItem('basket', basket);
        }

        if (basket[productId] > 30) {
            basket[productId] = 30;
            LocalStorage.setItem('basket', basket);
        }

        return basket[productId];
    },
    clear() {
        LocalStorage.removeItem('basket');
    },
};

export const ProductStorage = {
    get() {
        return LocalStorage.getItem('products');
    },

    // cache 1m
    set(products) {
        LocalStorage.setItem('products', products, 60 * 1000);
    }
}

export const OrderStorage = {
    get() {
        return LocalStorage.getItem('order');
    },

    // cache 1h
    set(orderId) {
        LocalStorage.setItem('order', orderId, 60 * 60 * 1000);
    },

    clear() {
        LocalStorage.removeItem('order');
    }
}

export const ShopStorage = {
    get() {
        return LocalStorage.getItem('shop');
    },

    // cache 1h
    set(shop) {
        LocalStorage.setItem('shop', shop, 60 * 60 * 1000);
    }
}

const LocalStorage = {
    getItem(key) {
        // get the parsed value of the given key
        let result;
        try {
            result = JSON.parse(window.localStorage.getItem(key));
        } catch (e) {
            window.localStorage.removeItem(key);
            return null;
        }

        // if the key has value
        if (result) {
            // if the entry is expired
            // remove the entry and return null
            if (result.expireTime <= Date.now()) {
                window.localStorage.removeItem(key);
                return null;
            }

            // else return the value
            return result.data;
        }

        // if the key does not have value
        return null;
    },

    // default expiry is 1 hour
    setItem(key, value, maxAge = 60 * 60 * 1000) {
        // store the value as object
        // along with expiry date
        let result = {
            data: value
        }


        if (maxAge) {
            // set the expiry
            // from the current date
            result.expireTime = Date.now() + maxAge;
        }

        // stringify the result
        // and the data in original storage
        window.localStorage.setItem(key, JSON.stringify(result));
    },

    // remove the entry with the given key
    removeItem(key) {
        window.localStorage.removeItem(key);
    },

    // clear the storage
    clear() {
        window.localStorage.clear();
    }
};