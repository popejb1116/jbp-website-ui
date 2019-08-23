<script>
   let bjjPlaceholder = '/images/placeholders/hobbies_card_bjj_placeholder.jpg'
   let bjjImg = '/images/hobbies_card_bjj.jpg'

   let dgPlaceholder = '/images/placeholders/hobbies_card_disc-golf_placeholder.jpg'
   let dgImg = '/images/hobbies_card_disc-golf.jpg'

   // STATIC CSS CLASS
   let fullImg = "fullImg"
   let left = "left"
   let right = "right"
   let centerMe = "centerMe"
   // DYNAMIC CSS CLASS
   let revealBJJ = false 
   let revealDG = false
   /* REVEAL FULL IMAGE ONLY AFTER LOADING HAS COMPLETED */
   const revealFullImg = e => {      
      const {id} = e.target
      if (id === 'bjj') {
         revealBJJ = true
      }else if (id === 'dg') {
         revealDG = true
      }
   } 

</script>

<style>
   .card {
      display: flex;
      background: var(--theme-primary);
      
      /* ALLOWS SPACE FOR LEFT/RIGHT SHIFTING */
      width: 95%;
      height: 100%;

      margin: 3rem 0;
      border-radius: 2px;
      box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
   }
   /* PARENT, WHICH IS PAGES, IS FLEX COLUMN WHICH IS WHY CARD CAN
   ALIGN-SELF */
   .card.left {
      align-self: flex-start;
   }
   .card.right {
      align-self: flex-end;
   }
   .card.bottom {
      margin: 0;
      margin-bottom: 3rem;
   }

   .img-wrapper {
      flex: 1;
      align-self: stretch;
      position: relative;
      min-height: 35vh;
   }
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;    
   }

   /* REVEAL FULL IMAGE ONLY AFTER LOADING HAS COMPLETED */
   img.fullImg {
      opacity: 0;
      transition: opacity 2s;
   }
   img.revealBJJ, img.revealDG {
      opacity: 1;
   }

   /* HIDE ALT TEXT DURING FETCH */
   img:-moz-loading {
      visibility: hidden;
   }
   img.left {
      border-right: solid 3px var(--theme-accent);
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
   }
   img.right {
      border-left: solid 3px var(--theme-accent);
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
   }

   .card-body {
      flex: 2;
      padding: 1rem;
   }
   .title {
      color: var(--theme-accent);
      margin-bottom: 1rem;
      text-align: center;
      letter-spacing: 0.3rem;
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;    
   }
   .text {
      color: white;
      font-size: 1.1rem;
   }

   @media (max-width: 1100px) {
      .card {
         display: flex;
         flex-flow: column nowrap;
         justify-content: flex-start;
         align-items: center;

         width: 100%;
      }
      .card.center-me {
         align-self: center;
      }
      .card.reverse-me {
         flex-flow: column-reverse nowrap;
      }
      img.centerMe {
         border: none;
         border-bottom: solid 3px var(--theme-accent);
         
         border-radius: none;
         border-top-left-radius: 2px;
         border-top-right-radius: 2px;
      }
      .img-wrapper {
         max-height: 40vh;
      }
      img {
         max-height: 40vh;
      }
   }
</style>

<div class="card left center-me">
   <div class="img-wrapper">
      <img 
         src={bjjPlaceholder} 
         alt="bjj-placeholder"
         class:left class:centerMe
      >
      <img 
         src={bjjImg}
         alt="bjj-img"
         id="bjj" 
         class:left class:centerMe class:fullImg class:revealBJJ 
         on:load={revealFullImg}
      >      
   </div>
   
   <div class="card-body">
      <div class="title">Brazilian Jiu-Jitsu</div>
      <div class="text">
         Brazilian Jiu-Jitsu is a grappling martial art rooted in Japanese Judo which was expanded upon in Brazil by the Gracie family. 
         Brazilian Jiu-Jitsu, or BJJ, eventually made its way to the US in the late 1970s by Rorion Gracie when he moved to California. 
         Rorion, along with brothers Rolyer, Rickson and Royce steadily increased BJJ’s place among practiced martial arts in the US. 
         BJJ experienced its largest gain in popularity after Royce Gracie used his family’s techniques to win multiple Ultimate Fighting Championships in the early 90s.
      </div>
   </div>
</div>

<div class="card right bottom center-me reverse-me">
   <div class="card-body">
      <div class="title">Disc Golf</div>
      <div class="text">
         As the name implies, disc golf is a sport very similar to traditional ball golf except for the use of disc. 
         There are a variety of disc used for various shots and situations such as drivers, distance-drivers and putters. 
         While a typical par 4 ball golf hole might be 350-450 yards a par 4 disc golf hole would be 350-450 ft. 
         It’s truly a wonderful sport which offers a few hours of tranquility and a healthy walk in the woods.
      </div>
   </div>

   <div class="img-wrapper">
      <img 
         src={dgPlaceholder} 
         alt="dg-placeholder"
         class:right class:centerMe 
      >
      <img 
         src={dgImg}
         alt="dg-img"
         id="dg" 
         class:right class:centerMe class:fullImg class:revealDG
         on:load={revealFullImg}
      >
   </div>
</div>