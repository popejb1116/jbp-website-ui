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

      /* background: linear-gradient(
         to bottom right,
         var(--theme-primary), #F0ADC3
      ); */
      background: white;
      box-shadow: 1px 2px 5px var(--theme-primary);      
   }
</style>

<div class="header">
   <Title/>
   <MobileNavToggle/>
</div>