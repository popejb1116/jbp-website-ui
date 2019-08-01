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
</style>

<div class="header">
   <Title/>
   <MobileNavToggle/>
</div>