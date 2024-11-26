let textElement = document.getElementById("animated-text");
let words = ["Web Developer", "Design Grafis", "Editor"];
let wordIndex = 0;
let currentWord = "";
let isDeleting = false;
let currentCharIndex = 0;

function updateText() {
    if (isDeleting) {
        // Deleting text one character at a time
        currentWord = words[wordIndex].substring(0, currentCharIndex);
        textElement.textContent = currentWord;
        currentCharIndex--;

        // If the word is completely deleted, move to the next word
        if (currentCharIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Cycle through words
        }
    } else {
        // Typing text one character at a time
        currentWord = words[wordIndex].substring(0, currentCharIndex + 1);
        textElement.textContent = currentWord;
        currentCharIndex++;

        // If the word is fully typed, start deleting
        if (currentCharIndex === words[wordIndex].length) {
            setTimeout(() => {
                isDeleting = true;
            }, 210); // Wait 0.5 seconds before starting to delete
        }
    }
}

// Set interval to update text every 100ms (faster typing & deleting)
setInterval(updateText, 100);


window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}


let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// Menambahkan event listener untuk tombol Who's Yudha?
document.getElementById('who-is-yudha-btn').addEventListener('click', function() {
    // Scroll otomatis ke bagian footer
    document.getElementById('kontener').scrollIntoView({
        behavior: 'smooth', // Animasi smooth
        block: 'start'      // Mulai scroll dari atas elemen footer
    });
});




let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.animasi-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()


let bottomNavItems = document.querySelectorAll('.mobile-navigasi-item')

let bottomMove = document.querySelector('.mobile-navigasi-animasipindah')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        console.log('object')
        let crrItem = document.querySelector('.mobile-navigasi-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})

document.getElementById('hubungi-btn').addEventListener('click', function() {
    // Mendapatkan nilai dari input email
    const emailInput = document.getElementById('email-input').value;
    const feedback = document.getElementById('feedback');
    
    // Memeriksa apakah email yang dimasukkan valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (emailPattern.test(emailInput)) {
        // Menampilkan pesan konfirmasi jika email valid
        feedback.textContent = `Terima kasih! Kami akan menghubungi Anda di ${emailInput}.`;
        feedback.style.color = "green"; // Ganti warna teks menjadi hijau

        // Tambahkan logika untuk mengirim email atau proses lainnya jika perlu
        // Misalnya, menggunakan AJAX untuk mengirim data ke server

        // Mengosongkan input setelah berhasil
        document.getElementById('email-input').value = '';
    } else {
        // Menampilkan pesan error jika email tidak valid
        feedback.textContent = "Tolong masukkan alamat email yang valid!";
        feedback.style.color = "red"; // Ganti warna teks menjadi merah
    }
});
