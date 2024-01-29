let textarea=document.getElementById("textarea");
textarea.value=localStorage.getItem('autoSaveContent');
textarea.addEventListener('input', function() {
    localStorage.setItem('autoSaveContent', textarea.value);
});