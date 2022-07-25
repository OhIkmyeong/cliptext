import { SplitText } from "./splitText.js";
const $$clipText = document.querySelectorAll('.clipText');
$$clipText.forEach($clipText => new SplitText($clipText));

const IO = new IntersectionObserver((entries,observer)=>{
    const TARGET = entries[0].target;
    const bool = entries[0].isIntersecting;
    TARGET.classList.toggle('on',bool);
},{threshold : 0.15})

$$clipText.forEach($clipText => IO.observe($clipText));