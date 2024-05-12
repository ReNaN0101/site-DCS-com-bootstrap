document.addEventListener("DOMContentLoaded", function (){
    const pathname = window.location.pathname;
    var path = pathname.split("Site/");
    console.log(path[0]);
    const link_index = document.querySelector('.index-page');
    if(link_index){
        link_index.href = '';
        link_index.href = path[0] + 'Site/index.html';
    }

    const link_mais = document.querySelector('.mais-page');
    
    
    if(link_mais){
        link_mais.href = '';
        link_mais.href = path[0] + 'Site/mais.html';
    }
});