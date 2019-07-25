<script>
   let pic = '/images/card-img_uncc-campus.jpg'
</script>

<style>
   #card {
      display: flex;
      
      background: var(--theme-primary);
      width: 95%;
      height: auto;

      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }
   /* PARENT, WHICH IS PAGES, IS FLEX COLUMN WHICH IS WHY CARD CAN
   ALIGN-SELF */
   #card.left {
      align-self: flex-start;
   }
   #card.right {
      align-self: flex-end;
   }

   .img-wrapper {
      flex: 1;
      align-self: stretch;
   }
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
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
      #card {
         display: flex;
         flex-flow: column nowrap;
         justify-content: flex-start;
         align-items: center;
      }
      #card.center-me {
         align-self: center;
      }
      #card.reverse-me {
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

<div id="card" class="left center-me">
   <div class="img-wrapper">
      <img src={pic} alt="bjj img" class="left center-me">
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

<div id="card" class="right center-me reverse-me">
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
      <img src={pic} alt="disc golf img" class="right center-me">
   </div>
</div>