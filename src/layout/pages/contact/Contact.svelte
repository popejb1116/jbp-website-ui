<script>
   let emailIcon = '/images/icons/icon_email.svg'
   let phoneIcon = '/images/icons/icon_phone.svg'
</script>

<style>
   .contact-card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: auto;

      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
   }
   .title {
      color: var(--theme-accent);
      padding: 1rem;
      font: bold 2.5rem 'Pacifico', cursive;
      text-align: center;
      text-shadow: 1px 1px 1px white;
      border-bottom: solid 3px white;      
   }
   .contact-wrapper {
      width: 100%;
      padding: 1rem;
   }
   .contact {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
   }
   .text {
      color: white;
      font-size: 1.5rem;
   }
   .left {
      text-align: center;
      vertical-align: middle;
      width: 50%;
   }
   .right {
      width: 50%;
   }
   img {
      height: 2.5rem;
      width: auto;
   }
   @media (max-width: 1024px) {
      .text {
         font-size: 1rem;
      }
   }
   @media (max-width: 768px) {
      .left {
         width: 30%;
      }
      .right {
         width: 70%;
      }
   }
   
</style>

<div class="contact-card">

   <div class="title">Feel free to contact me if you have any opportunities or suggestions, thanks!</div>
   
   <div class="contact-wrapper">
      <div class="contact">
         <div class="left">
            <img src={emailIcon} alt="email-icon">
         </div>
         <div class="text right">popejb1116@gmail.com</div>
      </div>
      
      <div class="contact">
         <div class="left">
            <img src={phoneIcon} alt="phone-icon">
         </div>
         <div class="text right">828-461-0794</div>
      </div>
   </div>
   
</div>