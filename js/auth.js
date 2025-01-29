// Initialize Firebase Auth
const auth = firebase.auth();

function checkAuth() {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject();
      }
    });
  });
}

// Add this to every protected page (admin.html)
function protectPage() {
  checkAuth()
    .catch(() => {
      window.location.href = '/index.html';
    });
}

function handleLogout() {
    firebase.auth().signOut()
      .then(() => {
        window.location.href = '/index.html';
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  }
  // Tambahkan state management
let currentUser = null;

firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  if (user) {
    // User sudah login
    console.log('User is signed in');
    localStorage.setItem('isLoggedIn', 'true');
  } else {
    // User belum login
    console.log('No user signed in');
    localStorage.removeItem('isLoggedIn');
    window.location.href = './index.html';
  }
});

function checkAuthState() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    window.location.href = './index.html';
  }
}