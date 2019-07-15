<script>
   import {Link} from 'svelte-routing'

   import {Router} from 'svelte-routing'
   export let url = ""
</script>

<style>
   .aside {
      grid-area: asid;
      background: palevioletred;
   }
   .aside-nav {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: flex-start;

      height: 60%;

      padding: 0 0.5vw;
   }
   /* CONVERT TO MOBILE NAV AND USE ASIDE FOR SOCIAL MEDIA LINKS ONLY */
   @media (max-width: 768px) {
      .aside-nav {
         display: none;
      }
   }
</style>

<div class="aside">
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