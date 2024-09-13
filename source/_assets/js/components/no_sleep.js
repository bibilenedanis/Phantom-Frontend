import NoSleep from "nosleep.js";

export default async function enableNoSleep() {
    window.noSleep = new NoSleep();
    window.noSleepEnabled = false;
    document.addEventListener('click', function enableNoSleep() {
        if (window.noSleepEnabled) {
            return;
        }
        window.noSleepEnabled = true;
        document.removeEventListener('click', enableNoSleep, false);
        noSleep.enable();
    }, false);

    document.addEventListener('touchstart', function enableNoSleep() {
        if (window.noSleepEnabled) {
            return;
        }
        window.noSleepEnabled = true;
        document.removeEventListener('touchstart', enableNoSleep, false);
        noSleep.enable();
    }, false);
}