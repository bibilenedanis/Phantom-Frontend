import toast from "../../components/toast";
import enableNoSleep from "../../components/no_sleep";
import moment from "moment";

export default async function shopCalls(pb) {
    if (!pb.authStore.isValid) {
        window.location.href = '/shop/login';
    }

    enableNoSleep();

    const calls = await pb.collection('calls').getFullList({
        sort: '-created',
        fields: 'id, table_id, created, collectionId'
    });

    for (let call of calls) {
        call.table = await pb.collection('tables').getOne(call.table_id);
        let rowHtml = createCallRow(call.id, call.table.number, call.created);

        document.getElementById('shop_calls_table').querySelector('tbody').insertAdjacentHTML('beforeend', rowHtml);
    }

    // realtime updates here
    pb.collection('calls').subscribe('*', async function (e) {
        if (e.record.status === 'pending') {
            let row = document.querySelector(`tr[data-call-id="${e.record.table_id}"]`);
            if (row) { // satır varsa sil !
                row.remove()
            }

            e.record.table = await pb.collection('tables').getOne(e.record.table_id);

            document.getElementById('shop_calls_table').querySelector('tbody').innerHTML =
                createCallRow(e.record.id, e.record.table.number, e.record.created) +
                document.getElementById('shop_calls_table').querySelector('tbody').innerHTML;

            document.getElementById('new_call_sound').play();
        }
    });

    window.updateCallStatus = async function (id) {
        let row = document.querySelector(`tr[data-call-id="${id}"]`);

        await pb.collection('calls').update(id, {status: 'done'});

        row.remove();

        toast('Çağrı durumu güncellendi', '#10B981');
    };
}

function createCallRow(id, table, created) {
    created = moment(created).format('YYYY-MM-DD HH:mm:ss')
    return `
            <tr data-call-id="${id}">
                <td class="py-4 px-6 border-b">Masa ${table}</td>
                <td class="py-4 px-6 border-b">${created}</td>
                <td class="py-4 px-6 border-b">
                    <button class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" onclick="updateCallStatus('${id}')">Tamamla</button>
                </td>
            </tr>
        `;
}
