export default async function home(pb) {
    const itemsToReplace = {
        'shop_district': window.shopInfo.name + ' - ' + window.shopInfo.district,
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
}
