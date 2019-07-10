<script>
   import {Route} from 'svelte-routing'
   import Home from './home/Home.svelte'
</script>

<style>
   .pages {
      grid-area: page;
      background: palegreen;
   }
</style>

<div class="pages">
   <Route path="/" component={Home}/>
</div>