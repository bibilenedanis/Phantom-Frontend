import {OrderStorage} from "../storage";
import enableNoSleep from "./no_sleep";

export default function listenOrder(pb) {
    enableNoSleep();

    const orderId = OrderStorage.get();

    if (!orderId) {
        return;
    }

    if (window.listeningOrder && window.listeningOrder === orderId) {
        return;
    }

    window.listeningOrder = orderId;

    if (document.getElementById('order-preparing-text')) {
        document.getElementById('order-preparing-text').classList.remove('hidden');
    }

    pb.collection('orders').subscribe(orderId, function (e) {
        if (e.action === 'update') {
            if (e.record.status === 'ready') {
                document.getElementById('order-ready-modal').classList.remove('hidden');
                document.getElementById('order-preparing-text').classList.add('hidden');
                pb.collection('orders').unsubscribe(orderId);
                OrderStorage.clear();
            }
        }
    });
}