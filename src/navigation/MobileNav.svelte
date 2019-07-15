<script>
   import {Router, Link} from 'svelte-routing'
   import NavLinks from './NavLinks.svelte'
   export let url = ""
   
   // DEFINES IF MOBILE NAV IS DISPLAYED
   import {displayMobileNav} from '../stores/MobileNavDisplay'
</script>

<style>
   .mobile {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 85vh;
      width: 50vw;
      background: rgba(0, 0, 0, 0.3);

      position: absolute;
      top: 15vh;
      right: 0;
      z-index: 1;
   }
   .mobile.hidden {
      width: 10vw;
   }
</style>

<Router url="{url}">
   <nav class="{$displayMobileNav ? ('mobile') : ('mobile hidden')}">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/hobbies">Hobbies</Link>
      <Link to="/musicandmovies">Music And Movies</Link>
      <Link to="/chloe">Chloe</Link>
      <Link to="/contact">Contact</Link>
   </nav>
</Router>

