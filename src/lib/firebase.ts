// src/lib/firebase.ts

// 1. Gerekli kütüphaneleri ekliyoruz
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 2. SENİN AYARLARIN (Burası aynen kalıyor)
const firebaseConfig = {
  apiKey: "AIzaSyAXDidWRJzcyUYfrH-nP7omLmv93feaUPU",
  authDomain: "edebiyatonline-f61c2.firebaseapp.com",
  databaseURL: "https://edebiyatonline-f61c2-default-rtdb.firebaseio.com",
  projectId: "edebiyatonline-f61c2",
  storageBucket: "edebiyatonline-f61c2.firebasestorage.app",
  messagingSenderId: "167013886778",
  appId: "1:167013886778:web:fd68e4d5a4ea42995f3e03",
  measurementId: "G-5ST4H2C391"
};

// 3. UYGULAMAYI BAŞLAT (Next.js için Güvenli Yöntem)
// Eğer uygulama daha önce başlatıldıysa onu kullan, yoksa yenisini başlat.
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// 4. Veritabanını dışarı aktar
export const db = getDatabase(app);