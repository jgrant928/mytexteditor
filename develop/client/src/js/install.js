const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeInstallPrompt', (event) => {
        window.deferredPrompt = event;
        butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
            return;
        }
        promptEvent.prompt();
        const result = await promptEvent.userChoice;
        if (result.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt', result);
        } else {
            console.log('User dismissed the A2HS prompt', result);
        }
        window.deferredPrompt = null;
        butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
        console.log('a2hs installed');
        window.deferredPrompt = null;
});