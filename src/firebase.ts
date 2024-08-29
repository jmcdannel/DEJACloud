import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

const firebaseConfig = {
  apiKey: 'AIzaSyBETNHPMHDqdWwmLzFPkJaMKwi98bMlaFQ',
  authDomain: 'dejacloud-563d6.firebaseapp.com',
  projectId: 'dejacloud-563d6',
  storageBucket: 'dejacloud-563d6.appspot.com',
  messagingSenderId: '763850552175',
  appId: '1:763850552175:web:a7665e2d25299403eeee9a'
}

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
// const db = getFirestore(firebaseApp)
export const db = getFirestore(firebaseApp)

// here we can export reusable database references
// export const todosRef = collection(db, 'todos')
