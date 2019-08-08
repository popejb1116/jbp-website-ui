<style>
   .footer {
      grid-area: foot;
      background: var(--theme-accent);
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      padding: 1rem;
   }
   .statement {
      color: white;
      font: 300 1rem 'Ubuntu';
   }
   .sm-icons {
      display: none;
   }
   @media(max-width: 768px) {
      .statement {
         font-size: 0.5rem;
      }
      .sm-icons {display: inline;}
   }
</style>

<div class="footer">
   <span class="statement">
      This webpage was soley developed and is independently maintained by Jonathan Pope.
      Please see the contact page for any related inquiries.
   </span>
   <span class="sm-icons">SVG SVG</span>
</div>