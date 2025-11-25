// Simple script to create admin account in Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhZnYTGTKoFpFPi8EzgYVlO_dZho9VBs4",
  authDomain: "humsj-charity.firebaseapp.com",
  projectId: "humsj-charity",
  storageBucket: "humsj-charity.firebasestorage.app",
  messagingSenderId: "493349195104",
  appId: "1:493349195104:web:86eb158b513e03fb822205",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createAdminAccount() {
  try {
    console.log('Creating admin account...');
    
    // Create admin user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      'admin@humsj.edu.et',
      'Admin@123456'
    );
    
    const user = userCredential.user;
    console.log('Admin user created in Auth:', user.uid);
    
    // Create admin profile in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: 'admin@humsj.edu.et',
      displayName: 'Ahmed Hassan',
      role: 'admin',
      status: 'active',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    
    console.log('✅ Admin account created successfully!');
    console.log('Email: admin@humsj.edu.et');
    console.log('Password: Admin@123456');
    process.exit(0);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('✅ Admin account already exists!');
      console.log('Email: admin@humsj.edu.et');
      console.log('Password: Admin@123456');
    } else {
      console.error('❌ Error creating admin account:', error.message);
    }
    process.exit(1);
  }
}

createAdminAccount();
