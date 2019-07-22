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

      background: linear-gradient(
         to bottom right, 
         var(--theme-primary), 
         var(--theme-secondary)
      );
      color: var(--theme-accent);
   }
</style>

<div class="header">
   <Title/>
   <MobileNavToggle/>
</div>