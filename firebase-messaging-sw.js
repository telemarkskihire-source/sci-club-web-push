// firebase-messaging-sw.js
// Service worker per FCM – Sci Club Val d'Ayas

importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

// STESSA CONFIG CHE HAI IN token.html
firebase.initializeApp({
  apiKey: "TODO_API_KEY",
  authDomain: "TODO_PROJECT_ID.firebaseapp.com",
  projectId: "TODO_PROJECT_ID",
  storageBucket: "TODO_PROJECT_ID.appspot.com",
  messagingSenderId: "TODO_SENDER_ID",
  appId: "TODO_APP_ID",
});

// Inizializza messaging
const messaging = firebase.messaging();

// Gestione notifiche in background
messaging.onBackgroundMessage((payload) => {
  console.log("Messaggio FCM in background: ", payload);
  const notificationTitle = payload.notification?.title || "Sci Club";
  const notificationOptions = {
    body: payload.notification?.body || "",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
