// Service Worker FCM – Sci Club Val d'Ayas

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// Config identico al token.html
firebase.initializeApp({
  apiKey: "AIzaSyAoWhSFPFYQfG7qa3h9j1iO777PiqujP4E",
  authDomain: "app-sci-club.firebaseapp.com",
  projectId: "app-sci-club",
  storageBucket: "app-sci-club.firebasestorage.app",
  messagingSenderId: "343564256746",
  appId: "1:343564256746:web:dc0c5b54ebfe98bcc71e93"
});

const messaging = firebase.messaging();

// Notifiche quando l’app è chiusa
messaging.onBackgroundMessage((payload) => {
  console.log("Messaggio ricevuto in background:", payload);

  const title = payload.notification?.title || "Sci Club";
  const options = {
    body: payload.notification?.body || "",
  };

  self.registration.showNotification(title, options);
});
