import {BasketStorage, OrderStorage} from "../storage";
import listenOrder from "../components/listen_order";
import getQueryString from "../components/query_string";

export default async function result3d(pb) {
    let queryString = getQueryString();

    if (!queryString.order) {
        window.location = '/menu';
        return;
    }
    let order;
    try {
        order = await pb.collection('orders').getOne(queryString.order);
    } catch (e) {
        window.location = '/menu';
        return;
    }

    if (!order) {
        window.location = '/menu';
        return;
    }

    Date.prototype.addHours = function(h) {
        this.setTime(this.getTime() + (h*60*60*1000));
        return this;
    }

    let createdAt = new Date(order.created);
    createdAt.addHours(3);

    document.getElementById('3d-result-total').innerText = order.total+'₺';
    document.getElementById('3d-result-date').innerText = createdAt.toISOString().split('T')[0];
    document.getElementById('3d-result-time').innerText = createdAt.toISOString().split('T')[1].slice(0, -5);

    if (queryString.message) {
        document.getElementById('order-fail').classList.remove('hidden');
        document.getElementById('order-fail-message').classList.remove('hidden');
        document.getElementById('order-fail-go-button').classList.remove('hidden');

        document.getElementById('order-fail-message').innerText = queryString.message;
        return;
    }

    document.getElementById('order-success').classList.remove('hidden');
    document.getElementById('order-success-go-button').classList.remove('hidden');
    BasketStorage.clear();
    window.basketUpdated(BasketStorage.get());
    OrderStorage.set(queryString.order);

    // realtime updates here
    listenOrder(pb);
};