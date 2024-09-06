document.addEventListener('DOMContentLoaded', function() {
    const registerSection = document.getElementById('registerSection');
    const loginSection = document.getElementById('loginSection');
    const profileSection = document.getElementById('profile1');
    const navLinks = document.querySelectorAll('.nav-link');
  
    // ナビゲーションリンクのクリックイベント
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = this.getAttribute('data-target');
        showSection(targetSection);
      });
    });

    // ログインフォームと登録フォームの切り替え
    document.getElementById('showLoginForm').addEventListener('click', function() {
      registerSection.style.display = 'none';
      loginSection.style.display = 'block';
    });

    document.getElementById('showRegisterForm').addEventListener('click', function() {
      loginSection.style.display = 'none';
      registerSection.style.display = 'block';
    });

    // 新規登録ボタンを押した時の処理
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault(); // デフォルトの送信を防ぐ
      alert('GOOD!'); // アラートでリアクション表示
      showSection('loginSection'); // ログイン画面に移動
    });

    // ログインボタンを押した時の処理
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thanks✨'); // アラートでリアクション表示
      showSection('profile1'); // プロフィール作成画面に移動
    });

    // プロフィール作成のSubmitボタンを押した時の処理
    document.querySelector('form[action*="ダミー"]').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Good JOB❤️'); // アラートでリアクション表示
      // 必要であれば次のアクションを実行
    });

    // 指定されたセクションを表示
    function showSection(sectionId) {
      const sections = [registerSection, loginSection, profileSection];
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
      document.getElementById(sectionId).style.display = 'block';
    }
});
















