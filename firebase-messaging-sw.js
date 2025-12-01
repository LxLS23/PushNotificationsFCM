// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
    apiKey: "AIzaSyBzmwU0TK5TUCt1bUs7dt9f8aSs9c-8vf4",
    authDomain: "awp10d.firebaseapp.com",
    projectId: "awp10d",
    storageBucket: "awp10d.firebasestorage.app",
    messagingSenderId: "34182075343",
    appId: "1:34182075343:web:b6533f4333ab3d140878ba"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || "Notificación";
    const options = {
        body: payload.notification?.body || "",
        icon: "/PushNotificationsFCM/192.png"
    };
    self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/PushNotificationsFCM/'));
});