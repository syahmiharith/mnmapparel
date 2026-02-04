"use client"

import { useEffect } from "react"
import { initializeApp, getApps } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const hasFirebaseConfig = Object.values(firebaseConfig).every(Boolean)

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!hasFirebaseConfig) {
      console.warn("Firebase config missing. Set NEXT_PUBLIC_FIREBASE_* env vars.")
      return
    }
    
    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
    const perf = getPerformance(app)
    void perf

    getAnalytics(app)
  }, [])

  return null
}
