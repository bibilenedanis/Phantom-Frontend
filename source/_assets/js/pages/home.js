import {ShopStorage, TableStorage} from "../storage";
import getQueryString from "../components/query_string";

export default async function home(pb) {
    window.shopInfo = ShopStorage.get();
    if (!window.shopInfo) {
        window.shopInfo = await pb.collection('shop_info').getOne('gns5q0ipgpy1o86');
        ShopStorage.set(window.shopInfo);
    }

    const itemsToReplace = {
        'shop_district': window.shopInfo.name + (window.shopInfo.district ? (' - ' + window.shopInfo.district) : ''),
        'shop_description': window.shopInfo.description,
    };
    for (let key in itemsToReplace) {
        if (document.getElementById(key)) {
            document.getElementById(key).innerHTML = itemsToReplace[key];
        }
    }

    const shopCoverImage = document.getElementById('shop_cover_image');
    if (shopCoverImage) {
        shopCoverImage.src = pb.files.getUrl(window.shopInfo, window.shopInfo.image);
        shopCoverImage.onload = () => {
            shopCoverImage.classList.remove('hidden');
            document.getElementById('shop_cover_image_loader').remove();
        };
    }

    const shopLogo = document.getElementById('shop_logo');
    if (shopLogo && window.shopInfo.logo) {
        shopLogo.src = pb.files.getUrl(window.shopInfo, window.shopInfo.logo);
    }

    const actionButtons = {
        call_waitress_button: window.shopInfo.call_waitress_button,
        show_previous_orders_button: window.shopInfo.show_previous_orders_button,
        goto_checkout_button: window.shopInfo.goto_checkout_button,
    };

    let actionButtonCount = 0;
    for (let key in actionButtons) {
        if (document.getElementById(key) && actionButtons[key]) {
            actionButtonCount++;
            document.getElementById(key).classList.remove('hidden');
        }
    }

    // Set Table
    let queryString = getQueryString();
    if (queryString.table) {
        pb.collection('tables').getOne(queryString.table, {
            fields: 'id',
        }).then((tableRecord) => {
            TableStorage.set(tableRecord.id);
        }).catch(() => {
            TableStorage.clear();
        });
    }
}
