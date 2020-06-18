$(document).ready(function () {

    // Load JSON file
    let openingAnimWindow = document.querySelector('#openingLottie1');
    let openingAnimData = {
      container: openingAnimWindow,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: 'json/bg_mccafe_v3.json'
    // path: 'json/mccafe_obj_2.json'
    };

    let openingAnimWindow2 = document.querySelector('#openingLottie2');
    let openingAnimData2 = {
      container: openingAnimWindow2,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/mccafe_obj_1.json'
    };

    let openingAnimWindow3 = document.querySelector('#openingLottie3');
    let openingAnimData3 = {
      container: openingAnimWindow3,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/mccafe_obj_2.json'
    };

    // set bodymovin
    let scrollAnim = bodymovin.loadAnimation(openingAnimData);
    let openingAnim1 = bodymovin.loadAnimation(openingAnimData2);
    let openingAnim2 = bodymovin.loadAnimation(openingAnimData3);
  
    // set Timeline
    let timeLine = new TimelineMax();
    scrollAnim.addEventListener('DOMLoaded', onDOMLoaded);
    
    // Frame-by-frame play
    function onDOMLoaded() {
      timeLine.to({
        frame: 0
      }, 3, {
        frame: scrollAnim.totalFrames - 1,
        onUpdate: function() {
          scrollAnim.goToAndStop(Math.round(this.target.frame), true)
        },
        ease: Linear.easeNone
      })
    }  
  
    // init ScrollMagic controller
    let controller = new ScrollMagic.Controller();
  
    // build ScrollMagic scene
    new ScrollMagic.Scene({
      triggerHook: 'onLeave',
      triggerElement: '#page1',
      duration: '100%'
    })
      .setTween(timeLine)
      .setPin('#page1')
      // .addIndicators()
      .addTo(controller);
  
  })
  