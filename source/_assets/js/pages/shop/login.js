import toast from '../../components/toast';

export function shopLogout(pb) {
    pb.authStore.clear();
    window.location.href = '/shop/login';
}

export function shopLogin(pb) {
    if (pb.authStore.isValid) {
        window.location.href = '/shop/orders';
    }

    document.getElementById('login_form').addEventListener('submit', async function (e) {
        e.preventDefault();
        await window.login();
    });

    window.login = async function () {
        document.getElementById('login_form_action_button').disabled = true;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await pb.collection('users').authWithPassword(email, password);
            if (pb.authStore.isValid) {
                window.location.href = '/shop/orders';
            } else {
                toast('Kullanıcı adı veya şifre hatalı');
            }
        } catch (e) {
            toast('Kullanıcı adı veya şifre hatalı');
        }

        document.getElementById('login_form_action_button').disabled = false;
        document.getElementById('password').value = '';
    }
}
