<script>
   import { getContext } from 'svelte'
   import {displayMobileNav} from '../../stores/MobileNavDisplayer.js'
   import MobileNavToggle from '../../stores/MobileNavToggle.svelte'
</script>

<style>
   .header {
      grid-area: head;
      background: var(--theme-primary);
      color: var(--theme-secondary);
   }
</style>

<div class="header">
   <MobileNavToggle/>
   <h1>Current Display Status: {$displayMobileNav}</h1>
</div>