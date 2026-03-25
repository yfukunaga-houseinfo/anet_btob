// 全ページ共通：スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('reveal');
    });
}, { threshold: 0.1 });

document.querySelectorAll('section, .bento-card').forEach(el => {
    el.style.opacity = "0"; // 初期状態
    observer.observe(el);
});

// 全ページ共通：設計コンペプロセスのモーダル制御
const processModal = document.getElementById("processModal");
const openProcessBtn = document.getElementById("openProcess");

if (openProcessBtn) {
    openProcessBtn.onclick = () => openModalAtStep(0);
}

function openModalAtStep(stepNumber) {
    if (!processModal) return;
    processModal.style.display = "block";
    document.body.style.overflow = "hidden";
    if (stepNumber > 0) {
        setTimeout(() => {
            const target = document.getElementById(`step-detail-${stepNumber}`);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

function closeProcessModal() {
    if (processModal) processModal.style.display = "none";
    document.body.style.overflow = "auto";
}

// モーダル外クリックで閉じる処理
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
};
