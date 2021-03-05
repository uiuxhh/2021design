$(document).ready(function(){
	// 섹션 최소 높이 지정
	minHeight('div[id*=sec_]');
	minHeight('.work_container_view');

	// 스크롤 애니메이션 scrolla js 실행
	$('.ani').scrolla();

	// 홈 섹션에서 스크롤 오브젝트 클릭시 실행
	$('.btn_scroll').click(function(){
		$('html, body').animate({scrollTop : window.innerHeight},300);
	});

	const menu = document.querySelector('#toggle');
	const menuItems = document.querySelector('#overlay');
	const menuContainer = document.querySelector('.menu-container');

	// 메뉴 오픈 토글
	function toggleMenu(e) {
		event.preventDefault();
	    menuItems.classList.toggle('open');
	    menuContainer.classList.toggle('full-menu');
		$('body').toggleClass('open');
	}

	menu.addEventListener('click', toggleMenu, false);

	// 메뉴 클릭시 실행
	$('#overlay li').click(function(){
		$('body').removeClass('open');
		$('.menu-container').removeClass('full-menu');
	});

	// contact 섹션에서 txt_box 클릭시 이메일 주소 클립보드 복사, 토스트 팝업창 보여주기
	function copyToClipboard(val) {
	    var t = document.createElement("textarea");
	    document.body.appendChild(t);
	    t.value = val;
	    t.select();
	    document.execCommand('copy');
	    document.body.removeChild(t);
	}
	function toastPop() {
	  var x = document.getElementById("snackbar");
	  x.className = "show";
	  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
	$('#sec_contact .txt_box').click(function() {
	    toastPop();
	    copyToClipboard('uiuxghh@gmail.com');
	});

});

$(window).resize(function(){

	// 화면 리사이즈될 때 섹션 최소 높이 지정
	minHeight('div[id*=sec_]');
	minHeight('.work_container_view');

});

$(window).scroll(function(){

	// 홈 섹션에서 벗어났을때 스크롤 오브젝트 숨김
	var scroll = $(this).scrollTop();
	if(scroll > 100){
		$('.btn_scroll').addClass('off');
	}else{
		$('.btn_scroll').removeClass('off');
	}

});

// 섹션 최소 height 지정 함수
function minHeight(argument) {
	$(argument).css("min-height" , window.innerHeight + "px");
}
