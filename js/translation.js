// ভাষা ডাটাবেস
const translations = {
    bn: {
        menuHome: "হোম",
        menuAbout: "আমাদের সম্পর্কে",
        menuActivities: "কার্যক্রম",
        menuCouncil: "পরিষদ",
        menuAdvisors: "উপদেষ্টা পরিষদ",
        menuGoverningBody: "পরিচালনা পরিষদ",
        menuCommittee: "কমিটি",
        menuCentralCommittee: "কেন্দ্রীয় কমিটি",
        menuUnionCommittee: "ইউনিয়ন কমিটি",
        menuRegionalCommittee: "আঞ্চলিক কমিটি",
        menuMemberForm: "সদস্য ফরম",
        menuPermanentMember: "স্থায়ী সদস্য ফরম",
        menuGeneralMember: "সাধারণ সদস্য ফরম",
        menuMemberList: "সদস্য তালিকা",
        menuPermanentList: "স্থায়ী সদস্য",
        menuGeneralList: "সাধারণ সদস্য",
        menuGalleryNews: "গ্যালারি ও নিউজ",
        menuGallery: "গ্যালারি",
        menuNews: "নিউজ",
        menuBlood: "রক্তদান",
        menuNotice: "নোটিশ",
        menuDonation: "ডোনেশন",
        menuContact: "যোগাযোগ",
        menuLogin: "লগইন",
        menuAdmin: "এডমিন",
        heroSpan: "রক্তদানে এগিয়ে আসুন",
        heroSlogan: "মাদককে না বলুন",
        heroText: "প্রতিটি ফোঁটা রক্ত একটি জীবনের জন্য অমূল্য — KYBDF",
        btnDonor: "রক্তদাতা হোন",
        btnMember: "সদস্য হোন",
        stat1: "সক্রিয় রক্তদাতা",
        stat2: "জীবন বাঁচিয়েছে",
        stat3: "মোট সদস্য",
        stat4: "রক্তদান শিবির",
        alertText: "গঠনতন্ত্রের ধারা ১.১ অনুযায়ী — কোনো টাকার বিনিময়ে রক্ত কেনাবেচা সম্পূর্ণ নিষিদ্ধ ও দণ্ডনীয় অপরাধ।",
        featuresTitle: "আমাদের মূল কার্যক্রম",
        feature1Title: "রক্তদান সেবা",
        feature1Text: "নিয়মিত রক্তদান কর্মসূচি, নতুন রক্তদাতা তৈরি ও জরুরি প্রয়োজনে রোগী ও দাতার সংযোগ স্থাপন।",
        feature2Title: "সামাজিক উন্নয়ন",
        feature2Text: "যুব সমাজকে মাদকমুক্ত করা, শীতবস্ত্র বিতরণ, দুর্যোগ সহায়তা ও বৃক্ষরোপণ।",
        feature3Title: "সাংগঠনিক উন্নয়ন",
        feature3Text: "ডিজিটাল ডাটাবেজ, নিয়মিত সভা, সদস্য প্রশিক্ষণ ও স্বচ্ছতা নিশ্চিতকরণ।",
        emergencyTitle: "জরুরি রক্ত প্রয়োজন?",
        formName: "রোগীর পুরো নাম",
        formHospital: "হাসপাতালের নাম ও ঠিকানা",
        formPhone: "আপনার মোবাইল নম্বর",
        formSubmit: "জরুরি রক্ত চাই →",
        footerOrgName: "কলমাকান্দা যুব রক্তদান ফাউন্ডেশন",
        footerTagline: "একটি অরাজনৈতিক স্বেচ্ছাসেবী রক্তদান ও সামাজিক সংগঠন",
        footerContactTitle: "যোগাযোগ",
        footerAddressTitle: "প্রধান কার্যালয়",
        footerAddress: "কলমাকান্দা সদর, নেত্রকোণা",
        copyright: "সর্বস্বত্ব সংরক্ষিত",
        developedBy: "Developed by: Tanvir Rahman Shipu"
    },
    en: {
        menuHome: "Home",
        menuAbout: "About Us",
        menuActivities: "Activities",
        menuCouncil: "Council",
        menuAdvisors: "Advisory Council",
        menuGoverningBody: "Governing Body",
        menuCommittee: "Committee",
        menuCentralCommittee: "Central Committee",
        menuUnionCommittee: "Union Committee",
        menuRegionalCommittee: "Regional Committee",
        menuMemberForm: "Member Form",
        menuPermanentMember: "Permanent Member Form",
        menuGeneralMember: "General Member Form",
        menuMemberList: "Member List",
        menuPermanentList: "Permanent Members",
        menuGeneralList: "General Members",
        menuGalleryNews: "Gallery & News",
        menuGallery: "Gallery",
        menuNews: "News",
        menuBlood: "Blood Donation",
        menuNotice: "Notice",
        menuDonation: "Donation",
        menuContact: "Contact",
        menuLogin: "Login",
        menuAdmin: "Admin",
        heroSpan: "Come Forward to Donate Blood",
        heroSlogan: "Say No to Drugs",
        heroText: "Every drop of blood is priceless for a life — KYBDF",
        btnDonor: "Be a Donor",
        btnMember: "Become Member",
        stat1: "Active Donors",
        stat2: "Lives Saved",
        stat3: "Total Members",
        stat4: "Blood Donation Camps",
        alertText: "According to Article 1.1 of the Constitution — Blood trading in exchange for money is strictly prohibited and punishable.",
        featuresTitle: "Our Main Activities",
        feature1Title: "Blood Donation Service",
        feature1Text: "Regular blood donation programs, creating new donors, and connecting patients with donors in emergencies.",
        feature2Title: "Social Development",
        feature2Text: "Youth drug-free initiatives, winter cloth distribution, disaster relief, and tree plantation.",
        feature3Title: "Organizational Development",
        feature3Text: "Digital database, regular meetings, member training, and ensuring transparency.",
        emergencyTitle: "Need Urgent Blood?",
        formName: "Patient's Full Name",
        formHospital: "Hospital Name & Address",
        formPhone: "Your Mobile Number",
        formSubmit: "Request Urgent Blood →",
        footerOrgName: "Kalmakanda Youth Blood Donate Foundation",
        footerTagline: "A non-political voluntary blood donation & social organization",
        footerContactTitle: "Contact",
        footerAddressTitle: "Head Office",
        footerAddress: "Kalmakanda Sadar, Netrokona",
        copyright: "All Rights Reserved",
        developedBy: "Developed by: Tanvir Rahman Shipu"
    }
};

// ভাষা প্রয়োগ ফাংশন
let currentLang = 'bn';

function applyLanguage(lang) {
    currentLang = lang;
    
    // মেনু টেক্সট আপডেট
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                const placeholderKey = el.getAttribute('data-key-placeholder');
                if (placeholderKey && translations[lang][placeholderKey]) {
                    el.placeholder = translations[lang][placeholderKey];
                }
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
    
    // ফুটার কপিরাইট আপডেট
    const copyrightSpan = document.querySelector('.copyright span:first-child');
    const developedSpan = document.querySelector('.copyright span:last-child');
    if (copyrightSpan) copyrightSpan.innerHTML = translations[lang].copyright;
    if (developedSpan) developedSpan.innerHTML = translations[lang].developedBy;
    
    // লোগোতে ভাষা অনুযায়ী নাম দেখানো
    document.body.classList.remove('lang-bn', 'lang-en');
    document.body.classList.add(`lang-${lang}`);
    
    // অ্যাক্টিভ ভাষা বাটন আপডেট
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
}

function setLanguage(lang) {
    applyLanguage(lang);
}

// ভাষা সিলেক্টর ইভেন্ট
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// পেজ লোড হলে সংরক্ষিত ভাষা প্রয়োগ
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'bn';
    setLanguage(savedLang);
});