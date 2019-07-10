<script>
   import Pages from './pages/Pages.svelte'
   import Aside from './aside/Aside.svelte'

   import {Router} from 'svelte-routing'
   export let url = ""
</script>

<Router url="{url}">
   <Pages/>
   <Aside/>
</Router>