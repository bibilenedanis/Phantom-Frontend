import {BasketStorage} from "../storage";

export default async function product(pb) {
    const slug = window.location.search.slice(1);

    let product = await pb.collection('products').getFullList({
        fields: 'id, name, price, image, description, collectionId',
        filter: pb.filter('slug = {:slug}', {slug}),
    });

    if (product.length > 0) {
        product = product[0];
    }

    document.getElementsByClassName('product-quantity-wrapper')[0].setAttribute('data-product-id', product.id);

    document.getElementById('product_name').innerHTML = product.name;
    document.getElementById('product_description').innerHTML = product.description;
    document.getElementById('product_price').innerHTML = product.price + '₺';

    const image = pb.files.getUrl(product, product.image);
    if (image) {
        document.getElementById('product_image').src = image;
        document.getElementById('product_image').onload = function () {
            document.getElementById('product_image').classList.remove('hidden');
            document.getElementById('product_image_loader').remove();
        }
    }

    document.getElementsByClassName('product_quantity')[0].innerText = BasketStorage.getItemQuantity(product.id);
}