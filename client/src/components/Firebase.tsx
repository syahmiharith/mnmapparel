"use client"

import { useEffect } from "react"
import { initializeApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
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
