// Add console.log to check if form submission works
document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username === "adminyoung" && password === "admin") {
        console.log('Login successful');
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = "admin.html";
    } else {
        alert("Username atau Password salah!");
    }
});
// Set persistence sebelum login
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .then((userCredential) => {
    window.location.href = './admin.html';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
function handleLogin(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then((userCredential) => {
        // Login berhasil
        window.location.href = '/admin.html';
      })
      .catch((error) => {
        // Handle error login
        console.error(error);
        alert('Login gagal: ' + error.message);
      });
  }