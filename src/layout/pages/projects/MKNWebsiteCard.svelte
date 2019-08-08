<script>
   let logo = '/images/projects_card_react-firebase-logo.png'
</script>

<style>
   .card {
      align-self: flex-end;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      width: 90%;
      margin: 3rem 0;

      background: var(--theme-primary);
      border-radius: 2px;
      box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
   }
   .img-wrapper {
      width: 100%;
      height: auto;
   }
   img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border-bottom: solid 3px white;
   }
   .card-body {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;

      padding: 1rem;
   }
   .title {
      align-self: center;
      color: var(--theme-accent);
      margin-bottom: 1rem;
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
   .link {
      align-self: center;
   }
   a {
      align-self: center;
      color: var(--theme-accent);
      width: 100%;
      font-size: 1.1rem;
      font-family: 'Pacifico', cursive;
      text-decoration: none;
   }

   @media(max-width: 768px) {
      .card {
         width: 100%;
      }
   }
</style>

<div class="card">
   
   <div class="img-wrapper">
      <img src={logo} alt="react firebase logo">
   </div>
   
   <div class="card-body">
      <div class="title">
         MKN Law Website
      </div>
      <div class="text">
         This is a website built for an aquaintance of mine who has his own law firm.
         As of right now this is only a mock website I used as a training exercise to improve my React proficiency.
         It's hosted using Firebase, another tool I've come to enjoy working with.
         These two make a great team!
      </div>
      <div class="link">
         <a href="https://mkn-employment-law.web.app/">MKN Law</a>
      </div>
   </div>
</div>