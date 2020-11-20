const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -10px 0px"
}
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
    entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return;
    } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
    }
})
}, appearOptions);


function navScroll(){
    if (document.documentElement.scrollTop > 600) {
        $(".navbar").addClass("bg-dark");
    } else {
        $(".navbar").removeClass("bg-dark");
    }
}


function insert(num){
    document.form.textview.value += num;
};


function clean(){
    document.form.textview.value = "";
};

function equal(){
    var result = document.form.textview.value;
    if (result){
        document.form.textview.value = eval(result);
    }
};

function back(){
    var result = document.form.textview.value;
    console.log(result);
    document.form.textview.value = result.substring(0, result.length-1);
    console.log(document.form.textview.value)
};

$(document).ready(function(){
    const faders = document.querySelectorAll(".fade-in")

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top-50}, 1000);}
    });

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
        
    window.onscroll = function() {
        navScroll();
    };




});