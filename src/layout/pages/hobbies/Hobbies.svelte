<script>
   let bjjImg = '/images/hobbies_card_bjj.jpg'
   let bjjPlaceholder = '/images/placeholders/hobbies_card_bjj_placeholder.jpg'

   let dgImg = '/images/hobbies_card_disc-golf.jpg'
   let dgPlaceholder = '/images/placeholders/hobbies_card_disc-golf_placeholder.jpg'

   /* HIDE PLACEHOLDERS */
   let hideClass = ""
   const registerObject = {
      bjj: false,
      dg: false
   }
   const register = event => {
      let id = event.target.id
      let type = event.type

      if (type==='load') {
         registerObject[id]=true
      }
      // FALLBACK TO HIDING PLACEHOLDERS, EVEN IF IMG YET TO LOAD
      else {
         hideAllPlaceholders()
      }

      // HIDE ALL PLACEHOLDERS AT THE SAME TIME ONCE THEY'RE ALL LOADED
      if (registerObject.bjj && registerObject.dg) {
         hideAllPlaceholders()
      }
   }
   const hideAllPlaceholders = () => {
      hideClass = " hide"
   }
</script>

<style>
   .card {
      display: flex;
      background: var(--theme-primary);
      
      /* ALLOWS SPACE FOR LEFT/RIGHT SHIFTING */
      width: 95%;
      height: 100%;

      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }
   /* PARENT, WHICH IS PAGES, IS FLEX COLUMN WHICH IS WHY CARD CAN
   ALIGN-SELF */
   .card.left {
      align-self: flex-start;
   }
   .card.right {
      align-self: flex-end;
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

      /* HIDE PLACEHOLDERS */
      transition: opacity 1s;
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
   img.hide {
      opacity: 0;
   }

   .card-body {
      flex: 2;
      padding: 1rem;
   }
   .title {
      color: var(--theme-accent);
      margin-bottom: 1rem;
      text-align: center;
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
      img.center-me {
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
         src={bjjImg}
         id="bjj" 
         class="left center-me" 
         alt="bjj-img"
         on:load={register}
         on:error={register}   
      >
      <img 
         src={bjjPlaceholder} 
         class={"left center-me" + hideClass} 
         alt="bjj-placeholder"
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

<div class="card right center-me reverse-me">
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
         src={dgImg}
         id="dg" 
         class="right center-me" 
         alt="bjj-img"
         on:load={register}
         on:error={register}   
      >
      <img 
         src={dgPlaceholder} 
         class={"right center-me" + hideClass} 
         alt="bjj-placeholder"
      >
   </div>
</div>