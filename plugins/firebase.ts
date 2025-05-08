import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(nuxtApp => {
    if (import.meta.server) return

    const firebaseConfig = {
        apiKey: "AIzaSyCMGjhsu41qzJ7PC71gxtBCVfuxCIWTSLM",
        authDomain: "xploit-3fece.firebaseapp.com",
        projectId: "xploit-3fece",
        storageBucket: "xploit-3fece.firebasestorage.app",
        messagingSenderId: "109618375332",
        appId: "1:109618375332:web:46b40cafab2ec273075431",
        measurementId: "G-R2X5SGEP6Y"
    }

    const app = initializeApp(firebaseConfig)
    getAnalytics(app)
})