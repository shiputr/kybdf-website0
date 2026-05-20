// ========== হ্যামবার্গার মেনু ==========
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// ========== হেডার হাইড স্ক্রল ==========
let lastScroll = 0;
const topHeader = document.getElementById('topHeader');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 30) {
        topHeader.classList.add('hide');
    } else {
        topHeader.classList.remove('hide');
    }
    lastScroll = currentScroll;
});

// ========== কাউন্টার অ্যানিমেশন ==========
const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let count = 0;
            const update = () => {
                const inc = Math.ceil(target / 30);
                if (count < target) {
                    count += inc;
                    if (count > target) count = target;
                    counter.innerText = count;
                    setTimeout(update, 40);
                }
            };
            update();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => observer.observe(c));

// ========== জরুরি রক্ত ফর্ম ==========
const emergencyForm = document.getElementById('emergencyForm');
if (emergencyForm) {
    emergencyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msgDiv = document.getElementById('emergencyMsg');
        if (msgDiv) {
            msgDiv.innerHTML = '<span style="background:#d4edda; color:#155724; padding:10px 20px; border-radius:40px; display:inline-block;">✅ আপনার অনুরোধ গ্রহণ করা হয়েছে। আমাদের টিম শীঘ্রই যোগাযোগ করবে।</span>';
            emergencyForm.reset();
            setTimeout(() => msgDiv.innerHTML = '', 5000);
        }
    });
}

// ========== মোর বাটন ফাংশনালিটি ==========
const moreBtn = document.querySelector('.more-btn');
const moreDropdown = document.querySelector('.more-dropdown');

if (moreBtn && moreDropdown) {
    moreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        moreDropdown.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
        if (!moreBtn.contains(e.target) && !moreDropdown.contains(e.target)) {
            moreDropdown.classList.remove('show');
        }
    });
}

// ========== মডাল ফাংশন ==========
function openModal(title, description) {
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    
    if (modal && modalTitle && modalText) {
        modalTitle.innerText = title;
        modalText.innerText = description;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('infoModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        closeModal();
    }
}

// ========== সদস্য সার্চ ফাংশন ==========
function searchMembers() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.member-card');
    
    cards.forEach(card => {
        const name = card.querySelector('h3')?.innerText.toLowerCase() || '';
        const blood = card.querySelector('.blood-group')?.innerText.toLowerCase() || '';
        const designation = card.querySelector('.designation')?.innerText.toLowerCase() || '';
        
        if (name.includes(filter) || blood.includes(filter) || designation.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}