<script>
   import {Router, Link} from 'svelte-routing'
   export let url = ""
</script>

<style>
   .mobile-links {
      position: absolute;
      z-index: 1;
      top: 15vh;
      right: 0;
      height: 85vh;
      width: 50vw;
      background: rgba(0, 0, 0, 0.3);
   }
</style>

<Router url="{url}">
   <nav class="mobile-links">
      <Link to="/">Home</Link>
      <Link to="/eductaion">Education</Link>
   </nav>
</Router>

