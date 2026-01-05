/*menu 스크립트*/
        window.onload = function () { //window윈도우가 onload로드 되었으면 function실행시켜라
            let navList = document.querySelectorAll(".nav > ul > li"); //변수 let, 변수 저장소의 이름은 navlist,문서에서 선택해라  all,  .nav 안의 ul 안에 있는 모든 li 요소를 선택해서 navList 변수에 저장

            navList.forEach(function (navItem) { //navList에 있는 navItem 각각의 항목을 forEach(반복)function실행하여라
                navItem.addEventListener("mouseover", function () { //navItem항목은 이벤트를 생성, 마우스 오버, (){ 콜백함수로 한번 더
                    this.querySelector(".all-search").style.height = "132px"; // this는 .nav > ul > li 찾아주다 submenu, 찾아서 스타일 높이값을 132px
                });
            });
            navList.forEach(function (navItem) {  // 다시 navList의 각 항목에 대해 반복 실행
                navItem.addEventListener("mouseout", function () {   // 마우스를 메뉴에서 뗐을 때 실행되는 이벤트
                    this.querySelector(".all-search").style.height = "0px"; // 해당 메뉴(li) 안의 .submenu 높이를 0px로 만들어 닫히게 함
                });
            });}
            window.onload = function () { //window윈도우가 onload로드 되었으면 function실행시켜라
            let navList = document.querySelectorAll(".buseo > ul > li"); //변수 let, 변수 저장소의 이름은 navlist,문서에서 선택해라  all,  .nav 안의 ul 안에 있는 모든 li 요소를 선택해서 navList 변수에 저장

            navList.forEach(function (navItem) { //navList에 있는 navItem 각각의 항목을 forEach(반복)function실행하여라
                navItem.addEventListener("mouseover", function () { //navItem항목은 이벤트를 생성, 마우스 오버, (){ 콜백함수로 한번 더
                    this.querySelector(".lnb2").style.height = "132px"; // this는 .nav > ul > li 찾아주다 submenu, 찾아서 스타일 높이값을 132px
                });
            });
            navList.forEach(function (navItem) {  // 다시 navList의 각 항목에 대해 반복 실행
                navItem.addEventListener("mouseout", function () {   // 마우스를 메뉴에서 뗐을 때 실행되는 이벤트
                    this.querySelector(".lnb2").style.height = "0px"; // 해당 메뉴(li) 안의 .submenu 높이를 0px로 만들어 닫히게 함
                });
            });}


            

            document.addEventListener('DOMContentLoaded', function () {

    const menuLinks = document.querySelectorAll('.info-menu a');
    const tabContents = document.querySelectorAll('.info-cont > div');

    // 초기 상태
    menuLinks.forEach((link, index) => {
        if (index === 0) {
            link.classList.add('active');
            tabContents[index].classList.add('active');
        } else {
            link.classList.remove('active');
            tabContents[index].classList.remove('active');
        }
    });

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // 메뉴 active 제거
            menuLinks.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(cont => cont.classList.remove('active'));

            // 클릭한 메뉴만 active
            link.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });

});



document.addEventListener('DOMContentLoaded', () => {
  const topBtn = document.querySelector('.top-btn');

  // 스크롤 200px 이상 내리면 버튼 표시
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) topBtn.classList.add('show');
    else topBtn.classList.remove('show');
  });

  // 클릭하면 맨 위로(부드럽게)
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  if (!slides) return;

  const speed = 300;      // CSS transition 시간(ms)과 맞추세요: 0.6s -> 600
  const delay = 3000;     // 자동 전환 간격
  let index = 0;          // "진짜" 슬라이드 기준 인덱스(0부터)

  const originals = Array.from(slides.children);
  const count = originals.length;
  if (count <= 1) return;

  // 1) 첫 슬라이드를 복제해서 맨 뒤에 붙임 (마지막 -> 처음 자연스럽게)
  const firstClone = originals[0].cloneNode(true);
  firstClone.setAttribute('data-clone', 'first');
  slides.appendChild(firstClone);

  // 2) 이동 함수
  const go = (i, withTransition = true) => {
    slides.style.transition = withTransition
      ? `transform ${speed}ms ease-in-out`
      : 'none';
    slides.style.transform = `translateX(-${i * 100}%)`;
  };

  // 초기 위치
  go(0, false);

  // 3) 자동 재생
  let timer = setInterval(next, delay);

  function next() {
    index += 1;
    go(index, true);

    // index가 count가 되면(복제본에 도달) -> 애니메이션 끝난 직후 진짜 첫 장으로 순간 이동
    if (index === count) {
      window.setTimeout(() => {
        index = 0;
        go(0, false); // transition 끄고 즉시 점프 (사용자 눈에는 자연스럽게 루프)
      }, speed);
    }
  }

  // (선택) 탭 비활성/활성 시 튀는 느낌 방지
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(timer);
    } else {
      clearInterval(timer);
      timer = setInterval(next, delay);
    }
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const root   = document.querySelector('#noticeBoard');
  const track  = root.querySelector('.board-slides'); // ✅ 변경
  const imgs   = Array.from(track.children);

  const dotsWrap = root.querySelector('.dots');
  const curEl    = root.querySelector('.cur');
  const totalEl  = root.querySelector('.total');

  const prevBtn  = root.querySelector('.prev');
  const nextBtn  = root.querySelector('.next');
  const pauseBtn = root.querySelector('.pause');

  const slideCount = imgs.length;
  totalEl.textContent = slideCount;

  let index = 0;
  let timer = null;
  let isPlaying = true;
  const intervalMs = 3000;

  // 도트 자동 생성
  const dots = imgs.map((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.addEventListener('click', () => { moveTo(i); startAuto(); });
    dotsWrap.appendChild(b);
    return b;
  });

function renderUI(){
  curEl.textContent = index + 1;

  // 숫자 활성 색 적용
  curEl.classList.add('is-active');

  dots.forEach((d, i) =>
    d.classList.toggle('is-active', i === index)
  );
}

  function moveTo(i){
    index = (i + slideCount) % slideCount;
    track.style.transform = `translateX(-${index * 100}%)`;
    renderUI();
  }

  function startAuto(){
    stopAuto(false);
    timer = setInterval(() => moveTo(index + 1), intervalMs);
    isPlaying = true;
    pauseBtn.textContent = 'Ⅱ';
  }

  function stopAuto(updateBtn = true){
    if (timer) clearInterval(timer);
    timer = null;
    isPlaying = false;
    if (updateBtn) pauseBtn.textContent = '▶';
  }

  root.addEventListener('mouseenter', () => stopAuto());
  root.addEventListener('mouseleave', () => startAuto());

  prevBtn.addEventListener('click', () => { moveTo(index - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { moveTo(index + 1); startAuto(); });

  pauseBtn.addEventListener('click', () => {
    isPlaying ? stopAuto() : startAuto();
  });

  moveTo(0);
  startAuto();
});


