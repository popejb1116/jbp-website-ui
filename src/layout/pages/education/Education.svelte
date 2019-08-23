<script>
   let unccPlaceholder = '/images/placeholders/education_card_uncc-campus_placeholder.jpg'
   let unccImg = '/images/education_card_uncc-campus.jpg'
   
   let appPlaceholder = '/images/placeholders/education_card_app-campus_placeholder.jpg'
   let appImg = '/images/education_card_app-campus.jpg'

   // STATIC CSS CLASS
   let fullImg = "fullImg"
   // DYNAMIC CSS CLASS
   let revealUNCC = false 
   let revealAPP = false
   /* REVEAL FULL IMAGE ONLY AFTER LOADING HAS COMPLETED */
   const revealFullImg = e => {      
      const {id} = e.target
      if (id === 'uncc') {
         revealUNCC = true
      }else if (id === 'app') {
         revealAPP = true
      }
   } 

</script>

<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      background: var(--theme-primary);
      width: 100%;
      margin: 3rem 0;
      border-radius: 2px;
      box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
   }
   .card.bottom {
      margin: 0;
      margin-bottom: 3rem;
   }
   .img-wrapper {
      width: 100%;
      position: relative;
   }
   img {
      width: 100%;
      position: absolute;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border-bottom: solid 3px var(--theme-accent);
   }

   /* REVEAL FULL IMAGE ONLY AFTER LOADING HAS COMPLETED */
   img.fullImg {
      opacity: 0;
      transition: opacity 2s;
   }
   img.revealUNCC, img.revealAPP {
      opacity: 1;
   }

   /* HIDE ALT TEXT DURING FETCH */
   img:-moz-loading {
      visibility: hidden;
   }
   .card-body {
      padding: 1rem;
      padding-top: 33%;
   }
   .title {
      text-align: center;
      color: var(--theme-accent);
      
      margin: 1rem 0;
      
      font-size: 2.5rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;      
   }
   .text {
      color: white;
      font-size: 1.1rem;
   }
</style>

<div class="card">
   <div class="img-wrapper">
      <img 
         src={unccPlaceholder}
         alt="uncc-placeholder"
      >
      <img 
         src={unccImg}
         alt="uncc-campus"
         id="uncc"
         class:fullImg class:revealUNCC
         on:load={revealFullImg} 
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

<div class="card bottom">
   <div class="img-wrapper">
      <img 
         src={appPlaceholder}
         alt="app-placeholder"
      >
      <img 
         src={appImg}
         alt="app-campus"
         id="app"
         class:fullImg class:revealAPP
         on:load={revealFullImg}
      >      
   </div>
   <div class="card-body">
      <div class="title">APP</div>
      <div class="text">
         Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry.
      </div>
   </div>
</div>