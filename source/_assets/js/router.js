import pb from './pocketbase'

import menu from "./pages/menu";
import home from "./pages/home";
import checkout from "./pages/checkout";
import payment from "./pages/payment";
import product from "./pages/product";
import result3d from "./pages/3dresult";

import {shopLogin, shopLogout} from "./pages/shop";
import shopOrders from "./pages/shop_orders";

import {OrderStorage, ShopStorage} from "./storage";
import enableNoSleep from "./components/no_sleep";
import listenOrder from "./components/listen_order";

ShopStorage.get()
window.shopInfo = ShopStorage.get();
if (!window.shopInfo) {
    window.shopInfo = await pb.collection('shop_info').getOne('gns5q0ipgpy1o86');
    ShopStorage.set(window.shopInfo);
}

if (document.getElementById('shop_name')) {
    document.getElementById('shop_name').innerText = window.shopInfo.name;
}
document.title = window.shopInfo.name + ' | ' + document.title;

const orderId = OrderStorage.get();
if (orderId) {
    enableNoSleep();
    if (!window.location.pathname.startsWith('/shop')) {
        let order;
        try {
            order = await pb.collection('orders').getOne(orderId);
        } catch (e) {
            OrderStorage.clear();
        }

        const allowedStatus = ['pending', 'preparing'];

        if (!order || !allowedStatus.includes(order.status)) {
            OrderStorage.clear();
            window.location.reload();
        } else {
            listenOrder(pb);
        }
    }
}

switch (window.location.pathname) {
    case '/':
        home(pb);
        break;

    case '/menu':
        menu(pb);
        break;

    case '/product/':
        product(pb);
        break;

    case '/checkout':
        checkout(pb);
        break;

    case '/payment':
        payment(pb);
        break;

    case '/3d-result':
    case '/3d-result/':
        result3d(pb);
        break;

    case '/shop/login':
    case '/shop/':
    case '/shop':
        shopLogin(pb);
        break;

    case '/shop/logout':
        shopLogout(pb);
        break;

    case '/shop/orders':
        await shopOrders(pb);
        break;
    default:
        break;
}