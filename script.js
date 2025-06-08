function showContent(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    const activeLinks = document.querySelectorAll('.sidebar-menu li a');
    activeLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    const activeSection = document.getElementById(section);
    activeSection.style.display = 'block';

    const activeLink = document.querySelector(`.sidebar-menu li a[href="#"]`);
    activeLink.classList.add('active');
}

// By default, show the 'home' section
showContent('home');
// Set the date we're counting down to
let countDownDate = new Date("Jul 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
let x = setInterval(function() {

    // Get the current date and time
    let now = new Date().getTime();
    
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the elements
    document.getElementById("days").innerHTML = days + " DAYS";
    document.getElementById("hours").innerHTML = hours + " HOURS";
    document.getElementById("minutes").innerHTML = minutes + " MINUTES";
    document.getElementById("seconds").innerHTML = seconds + " SECONDS";
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
}, 1000);
// Function to toggle content based on switch click
function toggleContent(section) {
    // Menyembunyikan semua bagian konten
    const sections = document.querySelectorAll('.content-panel');  // Mengambil semua elemen dengan class 'content-panel'
    sections.forEach(function(content) {
        content.classList.remove('active');  // Menghapus kelas 'active' dari semua konten
    });

    // Menampilkan konten yang dipilih
    const selectedSection = document.getElementById(section);
    selectedSection.classList.add('active');  // Menambahkan kelas 'active' pada konten yang dipilih

    // Menandai link yang aktif
    const activeLinks = document.querySelectorAll('.switch-btn');  // Mengambil semua tombol switch
    activeLinks.forEach(function(link) {
        link.classList.remove('active');  // Menghapus kelas 'active' dari semua tombol
    });

    // Menambahkan 'active' pada tombol switch yang dipilih
    const activeLink = document.getElementById(section + "Switch");
    if (activeLink) {
        activeLink.classList.add('active');  // Menambahkan kelas 'active' pada tombol yang dipilih
    }
}

// Menampilkan 'module' secara default saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", function() {
    toggleContent('module');
});



