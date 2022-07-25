export class SplitText{
    constructor($clipText){
        this.$clipText = $clipText;
        this.init();
    }//constructor
    /* 실행 */
    init(){
        const $$p = this.$clipText.querySelectorAll('P');
        const len = $$p.length;
        let start = 0;
        $$p.forEach(($p,pIdx) => {
            $p.innerHTML = $p.textContent.replace(/\S/g, "<span>$&</span>");
            const $$span = $p.querySelectorAll('span');
            let sec;
            $$span.forEach(($span,sIdx) => {
                sec = ((len * pIdx + sIdx) * 0.05 + start).toFixed(2);
                $span.style.setProperty("--delay",`${sec}s`);
            });
            start += Number(sec) - (len / 5);
        });
    }//init
}//class-SplitText