const observer = new IntersectionObserver((entries,observe)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__zoomIn','animate_faster');
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