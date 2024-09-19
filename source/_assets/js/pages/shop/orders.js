import toast from "../../components/toast";
import enableNoSleep from "../../components/no_sleep";

window.rowColors = {
    'pending': 'bg-red-300',
    'preparing': 'bg-white-300',
    'ready': 'bg-green-300',
    'done': 'bg-blue-300',
};

export default async function shopOrders(pb) {
    if (!pb.authStore.isValid) {
        window.location.href = '/shop/login';
    }

    document.getElementById('activate_sounds').addEventListener('click', function () {
        document.getElementById('new_order_sound').play();
        document.getElementById('new_call_waitress_sound').play();
        this.remove();
    });

    enableNoSleep();

    const orders = await pb.collection('orders').getFullList({
        sort: '-created',
        fields: 'id, table, status, note, created'
    });

    const orderItems = await pb.collection('order_tracking').getFullList();

    for (let order of orders) {
        order.items = orderItems.filter(item => item.order_id === order.id);

        let rowColor = window.rowColors[order.status] ?? '';

        let rowHtml = createOrderRow(rowColor, order, order.items);

        document.getElementById('shop_orders_table').querySelector('tbody').insertAdjacentHTML('beforeend', rowHtml);
    }

    // realtime updates here
    pb.collection('orders').subscribe('*', async function (e) {
        if (e.action === 'update') {
            if (e.record.status === 'pending') {
                let row = document.querySelector(`tr[data-order-id="${e.record.id}"]`);
                if (row) { // satır varsa yeniden ekleme !
                    return;
                }

                const orderItems = await pb.collection('order_tracking').getFullList({
                    filter: pb.filter('order_id = {:order_id}', {order_id: e.record.id})
                });

                let rowColor = window.rowColors[e.record.status] ?? '';
                document.getElementById('shop_orders_table').querySelector('tbody').innerHTML =
                    createOrderRow(rowColor, e.record, orderItems) +
                    document.getElementById('shop_orders_table').querySelector('tbody').innerHTML;

                document.getElementById('new_order_sound').play();
            }
        }
    });

    window.updateOrderStatus = async function (orderId) {
        let row = document.querySelector(`tr[data-order-id="${orderId}"]`);
        let status = row.querySelector('.order-status-select').value;

        if (!['pending', 'preparing', 'ready', 'done'].includes(status)) {
            return;
        }

        await pb.collection('orders').update(orderId, {status: status});

        Object.values(window.rowColors).forEach(color => {
            row.classList.remove(color);
        });

        row.classList.add(window.rowColors[status]);

        if (status === 'done') {
            row.remove();
        }

        toast('Sipariş durumu güncellendi', '#10B981');
    };

    // implement call waitresses
    pb.collection('calls').subscribe('*', async function (e) {
        if (e.record.status !== 'pending') {
            return;
        }

        e.record.table = await pb.collection('tables').getOne(e.record.table_id);

        document.getElementById('calling-tables').innerHTML = document.getElementById('calling-tables').innerHTML +
            `<p class="mb-4">${e.record.table.number} numaralı masa çağırıyor</p>`;

        document.getElementById('call-waitress-modal').classList.remove('hidden');

        let playCount = 0;
        document.getElementById('new_call_waitress_sound').play();
        document.getElementById('new_call_waitress_sound').addEventListener('ended', function() {
            playCount++;
            if (playCount < 2) {
                document.getElementById('new_call_waitress_sound').play();
            }
        });
    });

    // close call waitress modal
    document.getElementById('close-call-waitress-modal').addEventListener('click', function () {
        document.getElementById('calling-tables').innerHTML = '';
        document.getElementById('call-waitress-modal').classList.add('hidden');
    });
}

function createOrderRow(rowColor, order, items) {
    let itemsToList = [];
    for (let item of items) {
        for (let i = 0; i < item.quantity; i++) {
            itemsToList.push(item.product_name);
        }
    }

    return `
            <tr class="${rowColor}" data-order-id="${order.id}">
                <td class="py-4 px-6 border-b">Masa ${order.table}</td>
                <td class="py-4 px-6 border-b">
                    ${itemsToList.map(item => `<p>${item}</p>`).join('')}
                </td>
                <td class="py-4 px-6 border-b">${order.note}</td>
                <td class="py-4 px-6 border-b">
                    <select class="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 order-status-select">
                        <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Bekliyor</option>
                        <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Hazırlanıyor</option>
                        <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Hazır</option>
                        <option value="done" ${order.status === 'done' ? 'selected' : ''}>Servis Edildi</option>
                    </select>
                </td>
                <td class="py-4 px-6 border-b">${order.created.slice(0, -5)}</td>
                <td class="py-4 px-6 border-b">
                    <button class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" onclick="updateOrderStatus('${order.id}')">Güncelle</button>
                </td>
            </tr>
        `;
}
