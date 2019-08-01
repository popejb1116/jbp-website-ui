<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""

   import Logo from './Logo.svelte'
   import Divider from './Divider.svelte'
</script>

<style>
   .aside {
      grid-area: asid;
      
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
   }
   .aside-nav {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: flex-start;

      height: 60vh;
      padding: 0 1rem;
   }

   /* CONVERT TO MOBILE NAV AND USE ASIDE FOR SOCIAL MEDIA LINKS ONLY */
   @media (max-width: 768px) {
      .aside {
         display: none;
      }
   }
</style>

<div class="aside">
   <Logo/>
   <Divider/>
   <Router url="{url}">
      <nav class='aside-nav'>
         <Link type="aside" to="/">Home</Link>
         <Link type="aside" to="/education">Education</Link>
         <Link type="aside" to="/projects">Projects</Link>
         <Link type="aside" to="/hobbies">Hobbies</Link>
         <Link type="aside" to="/musicandmovies">Music And Movies</Link>
         <Link type="aside" to="/chloe">Chloe</Link>
         <Link type="aside" to="/contact">Contact</Link>
      </nav>
   </Router>
   <Divider/>
</div>