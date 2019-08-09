<script>
   import {displayMobileNav} from '../../stores/MobileNavDisplay'
   import Title from './Title.svelte'
   import MobileNavToggle from '../../stores/MobileNavToggle.svelte'
</script>

<style>
   .header {
      grid-area: head;

      display: flex;
      justify-content: center;
      align-items: center;

      color: var(--theme-accent);

      background: white;
      box-shadow: 3px 3px 3px var(--theme-primary);      
   }

   @media(max-width: 768px) {
      .header {
         justify-content: space-between;
      }
      .header-box {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 50vw;
      }
   }
</style>

<div class="header">
   <div class="header-box">
      <Title/>
   </div>
   <div class="header-box">
      <MobileNavToggle/>
   </div>
</div>