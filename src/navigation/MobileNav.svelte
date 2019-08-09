<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""

   import {displayMobileNav} from '../stores/MobileNavDisplay'
   import {toggleMobileNav} from '../stores/MobileNavDisplay'
</script>

<style>
   .mobile {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 100vh;
      width: 55vw;

      background: var(--theme-accent);
      border-radius: 2px;

      position: fixed;
      right: 0;
      z-index: 1;

      transition: transform 1s;
      transform: translateX(0%);
   }
   .mobile.hidden {
      transform: translateX(calc(100% + 1px));
   }
</style>

<Router url="{url}">
   <nav class="{$displayMobileNav ? ('mobile') : ('mobile hidden')}">
      <Link type="mobile" to="/" on:click={toggleMobileNav}>Home</Link>
      <Link type="mobile" to="/education" on:click={toggleMobileNav}>Education</Link>
      <Link type="mobile" to="/hobbies" on:click={toggleMobileNav}>Hobbies</Link>
      <Link type="mobile" to="/musicandmovies" on:click={toggleMobileNav}>Music And Movies</Link>
      <Link type="mobile" to="/chloe" on:click={toggleMobileNav}>Chloe</Link>
      <Link type="mobile" to="/contact" on:click={toggleMobileNav}>Contact</Link>
   </nav>
</Router>

