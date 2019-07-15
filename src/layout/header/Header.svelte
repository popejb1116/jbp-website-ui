<script>
   import { onMount } from 'svelte'
   import {displayMobileNav} from '../../stores/MobileNavDisplayer.js'
   import MobileNavToggle from '../../stores/MobileNavToggle.svelte'

</script>

<style>
   .header {
      grid-area: head;
      background: var(--theme-primary);
      color: var(--theme-secondary);
   }

   #box {
      background: red;
      height: 5vh;
      width: 10vw;
      transition: width 2s;
   }
   #box.wider {
      width: 20vw;
   }
</style>

<div class="header">
   <MobileNavToggle/>
   <button 
      id="box"
      class="{$displayMobileNav ? ('wider') : ('')}"
   >
      {$displayMobileNav ? ("Hide Nav") : ("Show Nav")}
   </button>
</div>