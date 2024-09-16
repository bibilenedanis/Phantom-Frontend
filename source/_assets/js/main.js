import './components/quantity';
import './components/basket_update_event';
import './components/smooth_scroll';

import './router';

import pb from "./pocketbase";
import {OrderStorage, ShopStorage} from "./storage";
import listenOrder from "./components/listen_order";

window.shopInfo = ShopStorage.get();
if (!window.shopInfo) {
    window.shopInfo = await pb.collection('shop_info').getOne('gns5q0ipgpy1o86');
    ShopStorage.set(window.shopInfo);
}

if (document.getElementById('shop_name')) {
    document.getElementById('shop_name').innerText = window.shopInfo.name;
}
document.title = window.shopInfo.name + ' | ' + document.title;

// --------------------------------

const orderId = OrderStorage.get();
if (orderId) {
    if (!window.location.pathname.startsWith('/shop')) {
        let order;
        try {
            order = await pb.collection('orders').getOne(orderId);
        } catch (e) {
            OrderStorage.clear();
        }

        const allowedStatuses = ['pending', 'preparing'];

        if (!order || !allowedStatuses.includes(order.status)) {
            OrderStorage.clear();
            window.location.reload();
        } else {
            listenOrder(pb);
        }
    }
}