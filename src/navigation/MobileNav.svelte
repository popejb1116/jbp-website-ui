<script>
   import {Router, Link} from 'svelte-routing'
   // import NavLinks from './NavLinks.svelte'
   export let url = ""

   import {displayMobileNav} from '../stores/MobileNavDisplay'
</script>

<style>
   .mobile {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 70vh;
      width: 65vw;
      background: var(--theme-accent);

      border-radius: 2px;

      position: fixed;
      top: 15vh;
      right: 0;
      z-index: 1;

      transition: transform 1s;
      transform: translateX(0%);
   }
   .mobile.hidden {
      transform: translateX(100%);
   }
</style>

<Router url="{url}">
   <nav class="{$displayMobileNav ? ('mobile') : ('mobile hidden')}">
      <Link type="mobile" to="/">Home</Link>
      <Link type="mobile" to="/education">Education</Link>
      <Link type="mobile" to="/hobbies">Hobbies</Link>
      <Link type="mobile" to="/musicandmovies">Music And Movies</Link>
      <Link type="mobile" to="/chloe">Chloe</Link>
      <Link type="mobile" to="/contact">Contact</Link>
   </nav>
</Router>

