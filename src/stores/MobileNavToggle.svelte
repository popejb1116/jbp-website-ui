<script>
   import {displayMobileNav} from './MobileNavDisplay'

   function toggle() {
      displayMobileNav.update(state => !state)
   }
</script>

<button on:click={toggle}>
   Toggle Mobile Nav
</button>