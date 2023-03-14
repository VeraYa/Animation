const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')

const heroTl = gsap.timeline();

heroTl.from(".hero__title", {opacity: 0, y: 10, duration: 1, delay: 0.5});
heroTl.from(".hero__btn", {opacity: 0, y: 10, duration: 1}, '-=1');
heroTl.from(".hero__descr", {opacity: 0, duration: 1});
heroTl.from(".img1", {opacity: 0, duration: 1}, '-=1');
heroTl.from(".img2", {opacity: 0, duration: 0.5}, '-=0.5');
heroTl.from(".img3", {opacity: 0, duration: 0.5}, '-=0.3');
heroTl.from(".photos__author", {opacity: 0, duration: 0.5}, '-=0.3');

const burgerTl = gsap.timeline({paused: true});

burgerTl.fromTo(".menu", {opacity: 0, display: "none"}, {opacity: 1, duration: 0.3, display: "block"})
burgerTl.fromTo(".menu__top", {opacity: 0, y: -50}, {opacity: 1, y: 0, duration: 0.6})
burgerTl.fromTo(".menu__container", {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.6})
burgerTl.fromTo(".social", {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5}, '-=0.2')
burgerTl.fromTo(".menu__right", {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5}, '-=0.5')

burger.addEventListener('click', () => {
  burgerTl.play()
})

closeBtn.addEventListener('click', () => {
  burgerTl.reverse()
})
