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
   @media (min-width: 768px) {
      #toggle {
         display: none;
      }
   }
</style>

<button 
   id="toggle"
   on:click={toggle}
>
   Toggle Mobile Nav
</button>