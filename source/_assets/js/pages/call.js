import {LocalStorage, TableStorage} from "../storage";

export default async function call(pb) {
    const lastCallDate = LocalStorage.getItem("call")
    if (lastCallDate) {
        let remainSeconds = Math.round(60 - Math.abs(Date.now() - lastCallDate) / 1000);
        document.getElementById('call_waitress_counter').classList.remove('hidden');
        document.getElementById('call_waitress_counter_text').innerText = remainSeconds + 'sn';

        setInterval(() => {
            remainSeconds = Math.round(60 - Math.abs(Date.now() - lastCallDate) / 1000);
            document.getElementById('call_waitress_counter_text').innerText = remainSeconds + 'sn';
            if (remainSeconds <= 0) {
                window.location.reload();
            }
        }, 1000);

        return;
    }

    document.getElementById('call_waitress_button').classList.remove('hidden');

    document.getElementById('call_waitress_button').onclick = async function () {
        document.getElementById('call_waitress_button').classList.add('hidden');
        document.getElementById('call_waitress_text').classList.remove('hidden');

        const table = TableStorage.get();

        const response = await pb.send('/api/call-waitress', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: {
                table: TableStorage.get(),
            }
        })

        if (response.error) {
            toast(response.error, '#ff0000');
            return;
        }

        LocalStorage.setItem("call", Date.now(), 60 * 1000);

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };
}
