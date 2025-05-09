// Form gönderimi
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries());
    
    // Form verilerini konsola yazdır (gerçek uygulamada burada API'ye gönderilir)
    console.log('Form verileri:', formValues);
    
    // Başarılı mesajı göster
    alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
    
    // Formu temizle
    this.reset();
});

// Sayfa yüklendiğinde animasyon
document.addEventListener('DOMContentLoaded', function() {
    // Hero bölümü animasyonu
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 500);
});

// Scroll olayını dinle
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Hamburger ve mobil menü
const hamburger = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeMobileNav = document.getElementById('close-mobile-nav');

if (hamburger && mobileNav && closeMobileNav) {
    hamburger.addEventListener('click', () => {
        mobileNav.classList.add('active');
    });
    closeMobileNav.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
    // Menüden bir linke tıklanınca menü kapansın
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });
}

// Ürünler arama kutusu canlı filtreleme
const productSearch = document.getElementById('product-search');
if (productSearch) {
    productSearch.addEventListener('input', function() {
        const search = this.value.toLowerCase();
        document.querySelectorAll('.flower-card').forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();
            if (name.includes(search) || desc.includes(search)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Ağaçlar arama kutusu canlı filtreleme
const treeSearch = document.getElementById('tree-search');
if (treeSearch) {
    treeSearch.addEventListener('input', function() {
        const search = this.value.toLowerCase();
        // Sadece ağaçlar bölümündeki kartları seç
        const treeSection = document.querySelector('#agaclar .product-grid');
        if (treeSection) {
            treeSection.querySelectorAll('.flower-card').forEach(card => {
                const name = card.querySelector('h3').textContent.toLowerCase();
                const desc = card.querySelector('p').textContent.toLowerCase();
                if (name.includes(search) || desc.includes(search)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
} 