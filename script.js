
// Sidebar toggle
function toggleSidebar(){
  document.getElementById('sidebar').classList.toggle('active');
}

// Close sidebar when clicking outside (mobile friendly)
document.addEventListener('click', function(e){
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('toggleBtn');
  if(!sidebar.contains(e.target) && !toggle.contains(e.target)){
    sidebar.classList.remove('active');
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    let target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    // close sidebar on navigation
    document.getElementById('sidebar').classList.remove('active');
  })
});

// Loader hide after window loads
window.addEventListener('load', function(){
  const loader = document.getElementById('loader');
  if(loader) {
    setTimeout(()=> loader.style.display='none', 500);
  }
});