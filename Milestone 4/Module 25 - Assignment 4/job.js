// ১. গ্লোবাল ভেরিয়েবল (বর্তমান ফিল্টার মনে রাখার জন্য)
let currentFilter = "All";

// ২. ক্যালকুলেটর ফাংশন (সব কিছু একসাথে আপডেট করবে)
function updateAll() {
    const allCards = document.querySelectorAll('.job-card');
    const emptyState = document.getElementById('empty-state');
    
    let interviewTotal = 0;
    let rejectedTotal = 0;
    let visibleJobsCount = 0;

    // প্রতিটি কার্ডের ওপর দিয়ে লুপ চালানো
    allCards.forEach(function(card) {
        const statusText = card.querySelector('.not-applied').innerText.trim();

        // ড্যাশবোর্ডের জন্য কাউন্ট করা
        if (statusText === "INTERVIEW") interviewTotal++;
        if (statusText === "REJECTED") rejectedTotal++;

        // ফিল্টারিং লজিক: কার্ড দেখানো বা লুকানো
        if (currentFilter === "All" || statusText === currentFilter) {
            card.style.display = "block";
            visibleJobsCount++; // বর্তমানে কয়টি কার্ড দেখা যাচ্ছে
        } else {
            card.style.display = "none";
        }
    });

    // ৩. ড্যাশবোর্ড এবং ফিল্টার কাউন্ট আপডেট করা
    document.getElementById('all-count').innerText = allCards.length;
    document.getElementById('interview-count').innerText = interviewTotal;
    document.getElementById('rejected-count').innerText = rejectedTotal;
    document.getElementById('total-count').innerText = visibleJobsCount + " jobs";

    // ৪. এম্পটি স্টেট দেখানো (যদি দৃশ্যমান কার্ড ০ হয়)
    if (visibleJobsCount === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }
}

// ৫. ক্লিক ইভেন্ট লজিক (ইভেন্ট ডেলিগেশন ব্যবহার করে)
document.addEventListener('click', function(event) {
    const target = event.target;
    const card = target.closest('.job-card');

    if (!card) return; // কার্ডের বাইরে ক্লিক করলে কাজ করবে না

    const statusBadge = card.querySelector('.not-applied');

    // ডিলিট বাটন (ID বা Class যাই হোক কাজ করবে)
    if (target.id === 'del-btn' || target.classList.contains('delete-btn')) {
        card.remove();
        updateAll();
    }

    // ইন্টারভিউ বাটন
    if (target.id === 'inter-btn' || target.classList.contains('inter-btn')) {
        statusBadge.innerText = "INTERVIEW";
        updateAll();
    }

    // রিজেক্ট বাটন
    if (target.id === 'reject-btn' || target.classList.contains('reject-btn')) {
        statusBadge.innerText = "REJECTED";
        updateAll();
    }
});

// ৬. ফিল্টার ট্যাব কন্ট্রোল
const tabs = document.querySelectorAll('.stat-tog');
tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        currentFilter = tab.getAttribute('data-filter'); // বাটনের ফিল্টার ভ্যালু নেওয়া
        
        // সব ট্যাবের স্টাইল রিসেট করে বর্তমান ট্যাবে কালার দেওয়া
        tabs.forEach(t => t.style.backgroundColor = "white");
        tab.style.backgroundColor = "blue"; // আপনার পছন্দের কালার দিতে পারেন
        
        updateAll(); // ফিল্টার বদলানোর পর সব আপডেট করা
    });
});

// পেজ লোড হওয়ার সময় প্রথমবার রান করা
updateAll();