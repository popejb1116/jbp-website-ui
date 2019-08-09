<script>
   import SocialMediaPlank from './SocialMediaPlank.svelte'
</script>

<style>
   .footer {
      grid-area: foot;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      background: var(--theme-accent);
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      padding: 1rem;
   }
   .statement {
      align-self: center;
      color: white;
      width: 100%;
      font: 300 1rem 'Ubuntu';
      text-align: center;
   }
   @media(max-width: 768px) {
      .statement {
         font-size: 0.5rem;
      }
   }
</style>

<div class="footer">
   <div class="statement">
      This webpage was soley developed and is independently maintained by Jonathan Pope.
      Please see the contact page for any related inquiries.
   </div>
   <SocialMediaPlank/>
</div>