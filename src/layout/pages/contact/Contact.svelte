<script>
   let emailIcon = '/images/icons/icon_email.svg'
   let phoneIcon = '/images/icons/icon_phone.svg'
</script>

<style>
   .contact-card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      width: 100%;
      height: 60vh;

      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
   }
   .title {
      color: var(--theme-accent);
      font: bold 2.5rem 'Pacifico', cursive;
      text-align: center;
      text-shadow: 1px 1px 1px white;
      border-bottom: solid 3px white;      
   }
   .options {
      display: block;
      width: 75%;
   }
   .option {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5vh;
   }
   img {
      height: 100%;
   }
   .text {
      color: white;
      font-size: 1.5rem;
   }
   /* TODO: CHANGE SIZES ON 768 */
</style>

<div class="contact-card">
   <div class="title">Feel free to contact me if you have any opportunities or suggestions, thanks!</div>
   <div class="options">
      <div class="option">
         <img src={emailIcon} alt="email-icon">
         <div class="text">popejb1116@gmail.com</div>
      </div>
      <br/>
      <div class="option">
         <img src={phoneIcon} alt="phone-icon">
         <div class="text">828-461-0794</div>
      </div>
   </div>
</div>