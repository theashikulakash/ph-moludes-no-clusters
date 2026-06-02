




// // ১. শুরুতে বর্তমান ফিল্টার সেট করা
// let filterTab = "All";

// // ২. ড্যাশবোর্ড এবং ফিল্টার আপডেট করার মেইন ফাংশন
// function refreshSite() {
//     const jobCards = document.querySelectorAll('.job-card');
//     const emptyCard = document.getElementById('empty-card');
    
//     let interCount = 0;
//     let rejectCount = 0;
//     let activeCard = 0;

//     jobCards.forEach(jCard => {
//         const stateTog = jCard.querySelector('.not-applied').innerText.trim();

//         // ড্যাশবোর্ড গণনা
//         if (stateTog === "INTERVIEW") interCount++;
//         if (stateTog === "REJECTED") rejectCount++;

//         // ফিল্টার লজিক
//         if (filterTab === "All" || stateTog === filterTab) {
//             jCard.style.display = "block";
//             activeCard++;
//         } else {
//             jCard.style.display = "none";
//         }
//     });

//     // ৩. এইচটিএমএল এ সংখ্যা বসানো
//     document.getElementById('all-count').innerText = jobCards.length;
//     document.getElementById('interview-count').innerText = interCount;
//     document.getElementById('rejected-count').innerText = rejectCount;
//     document.getElementById('total-count').innerText = activeCard + " jobs";

//     // ৪. এম্পটি স্টেট দেখানো (যদি কোনো কার্ড না থাকে)
//     if (activeCard === 0) {
//         emptyCard.style.display = "block";
//     } else {
//         emptyCard.style.display = "none";
//     }
// }

// // ৫. বাটনগুলোতে কাজ করার জন্য ফাংশন সেটআপ
// function buttonWiz() {
//     const jobCards = document.querySelectorAll('.job-card');

//     jobCards.forEach(card => {
//         const deleteBtn = card.querySelector('.not-applied'); // statusDisplay name change
//         const interBtn = card.querySelector('.inter-btn');
//         const rejectBtn = card.querySelector('.reject-btn');
//         const dBtn = card.querySelector('.delete-btn'); // Variable name kept as requested (dBtn to deleteBtn below)

//         // ইন্টারভিউ বাটন
//         if (interBtn) {
//             interBtn.onclick = () => {
//                 deleteBtn.innerText = "INTERVIEW";
//                 refreshSite();
//             };
//         }

//         // রিজেক্ট বাটন
//         if (rejectBtn) {
//             rejectBtn.onclick = () => {
//                 deleteBtn.innerText = "REJECTED";
//                 refreshSite();
//             };
//         }

//         // ডিলিট বাটন
//         const deleteBtnAction = card.querySelector('.delete-btn'); 
//         if (deleteBtnAction) {
//             deleteBtnAction.onclick = () => {
//                 card.remove(); 
//                 refreshSite(); 
//             };
//         }
//     });
// }

// // ৬. ফিল্টার ট্যাব কন্ট্রোল
// const tabs = document.querySelectorAll('.stat-tog');

// tabs.forEach(tab => {
//     tab.onclick = () => {
//         // ১. কোন ফিল্টারে ক্লিক করা হয়েছে তা সেট করা
//         filterTab = tab.getAttribute('data-filter');

//         // ২. সব ট্যাবের কালার আগে রিসেট করা
//         tabs.forEach(t => {
//             t.classList.remove('bg-blue-600'); 
//             t.classList.add('bg-white'); 
//         });

//         // ৩. শুধু বর্তমান ট্যাবে নীল কালার দেওয়া
//         tab.classList.remove('bg-white');
//         tab.classList.add('bg-blue-600');

//         // ৪. অ্যাপ রিফ্রেশ করা
//         refreshSite();
//     };
// });

// // শুরুতে সব রান করা
// buttonWiz();
// refreshSite();