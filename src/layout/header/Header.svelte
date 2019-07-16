<script>
   import {displayMobileNav} from '../../stores/MobileNavDisplay'
   import Logo from './Logo.svelte'
   import MobileNavToggle from '../../stores/MobileNavToggle.svelte'
</script>

<style>
   .header {
      grid-area: head;

      display: flex;
      justify-content: flex-start;
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
   <Logo/>
   <MobileNavToggle/>
</div>