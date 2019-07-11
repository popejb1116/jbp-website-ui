<script>
   import {Router} from 'svelte-routing'
   export let url = ""
   import NavLinks from './NavLinks.svelte'
</script>

<Router url="{url}">
   <NavLinks linkType={"mobile"}/>
</Router>

