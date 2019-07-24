<script>
   import Card from '../Card.svelte'
   let app_hero = '/images/card-hero_app-campus.jpg'
   let uncc_hero = '/images/card-hero_uncc-campus.jpg'
</script>

<style>
   img {
      width: 100%;
      height: auto;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
   }
   div {
      color: white;
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
   }
   .wrapper {
      border-top: solid 3px var(--theme-accent);
   }
   .title {
      color: var(--theme-accent);
      font-size: 2rem;
      font-weight: 900;      
   }
   .bottom {
      margin-bottom: 2rem;
   }
</style>

<Card>
   <img src={uncc_hero} alt="uncc-campus">
   <div class="wrapper">
      <div class="title">UNCC</div>
      <div class="bottom">
      I graduated from the University of North Carolina at Charlotte in the Fall of 2017. 
      From UNCC I received a M.S. in Computer Science. 
      While I’m not very hung up on academics I’m proud that I graduated with a 3.9 GPA. 
      This was a very challenging experience that I’m looking forward to putting to use.
      </div>
   </div>
</Card>

<Card>
   <img src={app_hero} alt="app-campus">
   <div class="wrapper">
      <div class="title">App</div>
      <div class="bottom">
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry. 
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry. 
      Before attending UNCC I graduated from Appalachian State University in the Spring of 2010 with my B.S. in chemistry.
      </div>
   </div>
</Card>