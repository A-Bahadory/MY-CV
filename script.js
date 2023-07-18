const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);










$(function(){
		
		var sliderInterval = setInterval(function() {
     		nextImg();
		}, 7000);
		
		$('.nav-arrow').click(function(){
			if($(this).attr('id') == 'arrow-left'){
				prevImg();
			}else{
				nextImg();
			}
			
			clearInterval(sliderInterval);
			
		});
		
		$('#dots li').click(function(){
			var thisIndex = $(this).index()
			
			if(thisIndex < $('#dots li.active').index()){
				prevDot(thisIndex);
			}else if(thisIndex > $('#dots li.active').index()){
				nextDot(thisIndex);
			}
			
			$('#dots li.active').removeClass('active');
			$(this).addClass('active');
			
			clearInterval(sliderInterval);
			
		});
	})
	
	function prevImg(){
		var curIndex = $('#image-slider li.active-img').index();
		
		if(curIndex == 0){
			$('#image-slider li:last-child').addClass('next-img').animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
			});
		}else{
			$('#image-slider li.active-img').prev().addClass('next-img').animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
			});
		}
	}
	
	function nextImg(){
		var curIndex = $('#image-slider li.active-img').index();
		
		if(curIndex == $('#image-slider li').length - 1){
			$('#image-slider li:first-child').addClass('next-img').css('left', 923).animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
			});
		}else{
			$('#image-slider li.active-img').next().addClass('next-img').css('left', 923).animate({
				left: 0
			}, function(){
				$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
				$('#image-slider li.next-img').attr('class', 'active-img');
				
				var nextIndex = $('#image-slider li.active-img').index();
				
				$('#dots li.active').removeClass('active');
				$('#dots li').eq(nextIndex).addClass('active');
			});
		}
	}
	
	function prevDot(newIndex){
		$('#image-slider li').eq(newIndex).addClass('next-img').animate({
			left: 0
		}, function(){
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
			$('#image-slider li.next-img').attr('class', 'active-img');
		});
	}
	
	function nextDot(newIndex){
		$('#image-slider li').eq(newIndex).addClass('next-img').css('left', 923).animate({
			left: 0
		}, function(){
			$('#image-slider li.active-img').removeClass('active-img').css('left', '-923px');
			$('#image-slider li.next-img').attr('class', 'active-img');
		});
	}









	$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
	$("#menu-icon").on("click", function(){
    $("nav").slideToggle();
    $(this).toggleClass("active");
});
function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0;
  } else {
    return number_value;
  }
}
document.getElementById("comment-btn").addEventListener("click", (event) => {
  let element_comments_list = document.getElementById("comments-list");
  let new_div = document.createElement("div");
  new_div.innerText = document.getElementById("comment-field").value;
  element_comments_list.appendChild(new_div);
});