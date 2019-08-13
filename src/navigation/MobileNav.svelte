<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""

   import {displayMobileNav} from '../stores/MobileNavDisplay'
   import {toggleMobileNav} from '../stores/MobileNavDisplay'

   let closeIcon = '/images/icons/icon_close-mobile.svg'
</script>

<style>
   .mobile {
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
   .nav-button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15vh;
   }
   button {
      width: 4rem;
      height: 4rem;
      background: transparent;
      border: none;
   }
   .links {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;
      height: 75vh;
   }
</style>

<Router url="{url}">
   <nav class="{$displayMobileNav ? ('mobile') : ('mobile hidden')}">
      
      <div class="nav-button">
         <button
            on:click={toggleMobileNav}
         >
            <img src={closeIcon} alt="close-icon">
         </button>
      </div>

      <div class="links">
         <Link type="mobile" to="/" on:click={toggleMobileNav}>Home</Link>
         <Link type="mobile" to="/education" on:click={toggleMobileNav}>Education</Link>
         <Link type="mobile" to="/projects" on:click={toggleMobileNav}>Projects</Link>
         <Link type="mobile" to="/hobbies" on:click={toggleMobileNav}>Hobbies</Link>
         <!-- <Link type="mobile" to="/musicandmovies" on:click={toggleMobileNav}>Music And Movies</Link>
         <Link type="mobile" to="/chloe" on:click={toggleMobileNav}>Chloe</Link> -->
         <Link type="mobile" to="/contact" on:click={toggleMobileNav}>Contact</Link>
      </div>

   </nav>
</Router>

