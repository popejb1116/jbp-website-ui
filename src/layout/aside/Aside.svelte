<script>
   import {Link} from 'svelte-routing'
</script>

<style>
   .aside {
      grid-area: asid;
      background: palevioletred;
   }

   .desktop-links {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 60%;
   }
</style>

<div class="aside">
   <nav class="desktop-links">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
   </nav>
</div>