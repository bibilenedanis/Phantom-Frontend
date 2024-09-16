import {LocalStorage, TableStorage} from "../storage";

export default async function call(pb) {
    if (LocalStorage.getItem("call")) {
        console.log('Call already made');

        return;
    }

    const table = TableStorage.get();

    await pb.collection('calls').create({
        table_id: table,
    });

    LocalStorage.setItem("call", true, 60 * 1000);
}
