<script>
   // NAV ROUTES
   import Pages from '../layout/pages/Pages.svelte'
   // NAV LINKS
   import Aside from '../layout/aside/Aside.svelte'

   import {Router} from 'svelte-routing'
   export let url = ""
</script>

<Router url="{url}">
   <Pages/>
   <Aside/>
</Router>