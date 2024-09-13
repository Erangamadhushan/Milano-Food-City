const observer = new IntersectionObserver((entries,observe)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__fadeIn','animate_fast');
        }
        else {
            entry.target.classList.remove('animate__fadeIn');
        }
    })
},{
    root:null,
    rootMargin:'0px',
    threshold:0.5
})

const animate_element = document.querySelectorAll('.animate__animated');
animate_element.forEach((ele)=>{
    observer.observe(ele);
})