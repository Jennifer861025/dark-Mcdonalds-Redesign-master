$(document).ready(function () {

    // Load JSON file
    let openingAnimWindow = document.querySelector('#openingLottie1');
    let openingAnimData = {
      container: openingAnimWindow,
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'json/Mockup_2_object_1.json'
    };

    let openingAnimWindow2 = document.querySelector('#openingLottie2');
    let openingAnimData2 = {
      container: openingAnimWindow2,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: 'json/Mockup_2_object_2.json'
    };

    let openingAnimWindow3 = document.querySelector('#openingLottie3');
    let openingAnimData3 = {
      container: openingAnimWindow3,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: 'json/Mockup_2_object_3.json'
    };

    let openingAnimWindow4 = document.querySelector('#openingLottie4');
    let openingAnimData4 = {
      container: openingAnimWindow4,
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: false,
      path: 'json/Mockup_2_object_4.json'
    };

    // set bodymovin
    let scrollAnim = bodymovin.loadAnimation(openingAnimData);
    let scrollAnim2 = bodymovin.loadAnimation(openingAnimData2);
    let scrollAnim3 = bodymovin.loadAnimation(openingAnimData3);
    let scrollAnim4 = bodymovin.loadAnimation(openingAnimData4);
  
    // set Timeline
    let timeLine = new TimelineMax();
    scrollAnim.addEventListener('DOMLoaded', onDOMLoaded);

    let timeLine2 = new TimelineMax();
    scrollAnim2.addEventListener('DOMLoaded', onDOMLoaded2);

    let timeLine3 = new TimelineMax();
    scrollAnim3.addEventListener('DOMLoaded', onDOMLoaded3);

    let timeLine4 = new TimelineMax();
    scrollAnim4.addEventListener('DOMLoaded', onDOMLoaded4);
    
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

    function onDOMLoaded2() {
        timeLine2.to({
          frame: 0
        }, 3, {
          frame: scrollAnim2.totalFrames - 1,
          onUpdate: function() {
            scrollAnim2.goToAndStop(Math.round(this.target.frame), true)
          },
          ease: Linear.easeNone
        })
      }

      function onDOMLoaded3() {
        timeLine3.to({
          frame: 0
        }, 3, {
          frame: scrollAnim3.totalFrames - 1,
          onUpdate: function() {
            scrollAnim3.goToAndStop(Math.round(this.target.frame), true)
          },
          ease: Linear.easeNone
        })
      }

      function onDOMLoaded4() {
        timeLine4.to({
          frame: 0
        }, 3, {
          frame: scrollAnim4.totalFrames - 1,
          onUpdate: function() {
            scrollAnim4.goToAndStop(Math.round(this.target.frame), true)
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
      duration: 80
    })
      .setTween(timeLine)
      .setPin('#page1', { pushFollowers: false})
      //.addIndicators()
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#page2',
        duration: 190
    })
    .setTween(timeLine2)
    .setPin('#page2', { pushFollowers: false})
    //.addIndicators()
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#page3',
        duration: 190
    })
        .setTween(timeLine3)
        .setPin('#page3', { pushFollowers: false})
        //.addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: '#page4',
        duration: 190
    })
        .setTween(timeLine4)
        .setPin('#page4', { pushFollowers: false})
        //.addIndicators()
        .addTo(controller);
  
  })
  