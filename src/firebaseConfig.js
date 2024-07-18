// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB4h3YTiO5PrY4tOjfg2wenDfL7zPEJiKM",
  authDomain: "courseenroll-5e543.firebaseapp.com",
  databaseURL: "https://courseenroll-5e543-default-rtdb.firebaseio.com",
  projectId: "courseenroll-5e543",
  storageBucket: "courseenroll-5e543.appspot.com",
  messagingSenderId: "192050808031",
  appId: "1:192050808031:web:19486fa7f77b96b073956a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
