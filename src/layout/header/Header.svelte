<script>
   import {displayMobileNav} from '../../stores/MobileNavDisplay'
   import Logo from './Logo.svelte'
   import MobileNavToggle from '../../stores/MobileNavToggle.svelte'
</script>

<style>
   .header {
      grid-area: head;

      display: flex;
      justify-content: center;
      align-items: center;

      background: var(--theme-primary);
      color: var(--theme-secondary);
   }
</style>

<div class="header">
   <Logo/>
   <MobileNavToggle/>
</div>