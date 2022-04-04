console.log('OK');

gsap.from('.letter' , {
  y: -500,
  duration: 3,
  ease: 'elastic'
});

gsap.from('#heart1' ,{
  scale: 1.2,
  x: 3,
  y: 2,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%' 
});

gsap.from('#heart2' ,{
  scale: 1.2,
  x: 2,
  y: -2,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%' 
});

gsap.from('#heart3' ,{
  scale: 1.2,
  x: -3,
  y: 2,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%' 
});

gsap.fromTo('#big-smile' ,{
  scale: .8,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%' 
},
  {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  transformOrigin: '50% 50%' 
            });

