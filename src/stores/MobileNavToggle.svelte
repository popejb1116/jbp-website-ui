<script>
   import {displayMobileNav} from './MobileNavDisplayer.js'

   function toggle() {
      displayMobileNav.update(prev => !prev)
   }
</script>

<button on:click={toggle}>
Toggle Nav
</button>