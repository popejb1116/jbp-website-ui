<script>
   import {displayMobileNav} from './MobileNavDisplay'

   function toggle() {
      displayMobileNav.update(state => !state)
   }
</script>

<style>
   #toggle {
      margin: 0 1rem 0 0;
      position: absolute;
      right: 0;
   }
   /* GRIDLAYOUT HIDES ASIDE AT 768 */
   @media (min-width: 769px) {
      #toggle {
         display: none;
      }
   }
</style>

<button 
   id="toggle"
   on:click={toggle}
>
   toggle
</button>