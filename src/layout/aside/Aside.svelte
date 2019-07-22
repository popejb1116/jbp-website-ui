<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""

   import Logo from './Logo.svelte'
</script>

<style>
   .aside {
      grid-area: asid;
      
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      
      background: var(--theme-secondary);
   }
   .aside-nav {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: flex-start;

      height: 75%;
      padding: 0 1rem;
   }
   /* CONVERT TO MOBILE NAV AND USE ASIDE FOR SOCIAL MEDIA LINKS ONLY */
   @media (max-width: 768px) {
      .aside-nav {
         display: none;
      }
   }
</style>

<div class="aside">
   <Logo/>
   <Router url="{url}">
      <nav class='aside-nav'>
         <Link to="/">Home</Link>
         <Link to="/education">Education</Link>
         <Link to="/hobbies">Hobbies</Link>
         <Link to="/musicandmovies">Music And Movies</Link>
         <Link to="/chloe">Chloe</Link>
         <Link to="/contact">Contact</Link>
      </nav>
   </Router>
</div>