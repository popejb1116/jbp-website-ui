 <!-- <script>
   //RESPONSIVE IMG
   let unccImg = '/images/education_card_uncc-campus.jpg'
   let appImg = '/images/education_card_app-campus.jpg'
</script>

<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      min-height: auto;
      
      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 2px 2px 4px black;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }   
   img {
      width: 100%;
      height: auto;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
   }
   .card-body {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      padding: 1rem;
      border-top: solid 3px var(--theme-accent);
   }
   .title {
      align-self: center;
      color: var(--theme-accent);
      font-size: 2.5rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;      
   }
   .text {
      color: white;
      font-size: 1.5rem;
   }
</style>

<div class="card">
   <img src={unccImg} alt="uncc-campus">
   <div class="card-body">
      <div class="title">UNCC</div>
      <div class="text">
      I graduated from the University of North Carolina at Charlotte in the Fall of 2017. 
      From UNCC I received a M.S. in Computer Science. 
      While I’m not very hung up on academics I’m proud that I graduated with a 3.9 GPA. 
      This was a very challenging experience that I’m looking forward to putting to use.
      </div>
   </div>
</div>

<div class="card">
   <img src={appImg} alt="app-campus">
   <div class="card-body">
      <div class="title">App</div>
      <div class="text">
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry. 
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry. 
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry.
      </div>
   </div>
</div> -->













<script>
   // PLACEHOLDER
   let unccImg = '/images/education_card_uncc-campus.jpg'
   let unccPlaceholder = '/images/placeholders/education_card_uncc-campus_placeholder.jpg'

   let hideClass
   const hidePlaceholder = () => {
      hideClass = "hide"
   }
</script>

<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: 100%;

      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }
   .img-wrapper {
      flex: 1;
      align-self: stretch;
      position: relative;
      min-height: 35vh;
      max-height: 40vh;
   }
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 40vh;
      position: absolute;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      /* HIDE PLACEHOLDERS */
      transition: opacity 1s;
   }
   /* HIDE ALT TEXT DURING FETCH */
   img:-moz-loading {
      visibility: hidden;
   }
   img.hide {
      opacity: 0;
   }

   .card-body {
      flex: 2;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      padding: 1rem;
      border-top: solid 3px var(--theme-accent);
   }
   .title {
      align-self: center;
      color: var(--theme-accent);
      font-size: 2.5rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;      
   }
   .text {
      align-self: flex-start;
      color: white;
      font-size: 1.1rem;
      margin-bottom: 1rem;
   }
</style>


<div class="card">
   <div class="img-wrapper">
      <img 
         src={unccImg}
         alt="uncc-img"
         on:load={hidePlaceholder}
      >
      <img 
         src={unccPlaceholder} 
         class={hideClass} 
         alt="uncc-placeholder"
      >
   </div>
   
   <div class="card-body">
      <div class="title">UNCC</div>
      
      <div class="text">
         I graduated from the University of North Carolina at Charlotte in the Fall of 2017. 
         From UNCC I received a M.S. in Computer Science. 
         While I’m not very hung up on academics I’m proud that I graduated with a 3.9 GPA. 
         This was a very challenging experience that I’m looking forward to putting to use.
      </div>
   </div>
</div>