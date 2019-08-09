<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""

   import {displayMobileNav} from '../stores/MobileNavDisplay'
   import {toggleMobileNav} from '../stores/MobileNavDisplay'

   let closeIcon = '/images/icons/icon_close-mobile.svg'
</script>

<style>
   .mobile {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 100vh;
      width: 50vw;

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
   
   button {
      width: 4rem;
      height: 4rem;
      background: transparent;

      border: solid 1px red;
   }
</style>

<Router url="{url}">
   <nav class="{$displayMobileNav ? ('mobile') : ('mobile hidden')}">
      
      <button
         on:click={toggleMobileNav}
      >
         <img src={closeIcon} alt="close-icon">
      </button>
      
      <Link type="mobile" to="/" on:click={toggleMobileNav}>Home</Link>
      <Link type="mobile" to="/education" on:click={toggleMobileNav}>Education</Link>
      <Link type="mobile" to="/hobbies" on:click={toggleMobileNav}>Hobbies</Link>
      <Link type="mobile" to="/musicandmovies" on:click={toggleMobileNav}>Music And Movies</Link>
      <Link type="mobile" to="/chloe" on:click={toggleMobileNav}>Chloe</Link>
      <Link type="mobile" to="/contact" on:click={toggleMobileNav}>Contact</Link>
   </nav>
</Router>

