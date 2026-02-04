"use client"

import { useEffect } from "react"
import { initializeApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyBkauCN9FUSl_QeHAwM7A1YzTTZ4bxoPuk",
  authDomain: "mnmapparel-486012.firebaseapp.com",
  projectId: "mnmapparel-486012",
  storageBucket: "mnmapparel-486012.firebasestorage.app",
  messagingSenderId: "1030433708457",
  appId: "1:1030433708457:web:b26178c9808f607b42ccb8",
  measurementId: "G-H0P1R0MK0M",
}

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return
    
    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
    const perf = getPerformance(app);
    void perf;

    getAnalytics(app)
  }, [])

  return null
}
