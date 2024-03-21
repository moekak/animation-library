
const toggleAnimation = ()=>{
    document.addEventListener("DOMContentLoaded", ()=>{
        const target = document.querySelector(".position_bar")
        const btn = document.querySelector(".btn")
        
        // ターゲットの位置
        const distanceFromTop = target.offsetTop;


        window.addEventListener("scroll", ()=>{
            const currentPosition = window.scrollY
            // ドキュメント全体の高さ
            const documentHeight = document.documentElement.scrollHeight;
            // ビューポートの高さ
            const windowHeight = window.innerHeight;

            if(distanceFromTop <= currentPosition){
                btn.classList.add("active")
            }


            if(distanceFromTop >= currentPosition || currentPosition + windowHeight >= documentHeight){
                btn.classList.remove("active")
            }
        })
    })
}


module.exports = toggleAnimation