import pb from './pocketbase'

import menu from "./pages/menu";
import home from "./pages/home";
import checkout from "./pages/checkout";
import payment from "./pages/payment";
import product from "./pages/product";
import result3d from "./pages/3dresult";
import call from "./pages/call";

import {shopLogin, shopLogout} from "./pages/shop/login";
import shopOrders from "./pages/shop/orders";

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

    case '/call':
        call(pb);
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