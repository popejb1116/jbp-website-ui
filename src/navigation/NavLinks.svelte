<script>
   import {Link} from 'svelte-routing'
   export let linkType
</script>

<style>
   
   .desktop {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      height: 60%;
   }

   .mobile {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-evenly;
      align-items: center;

      position: absolute;
      z-index: 1;
      top: 15vh;
      right: 0;
      height: 85vh;
      width: 50vw;
      background: rgba(0, 0, 0, 0.3);
   }
   
</style>

<nav class={linkType}>
   <Link to="/">Home</Link>
   <Link to="/education">Education</Link>
</nav>

