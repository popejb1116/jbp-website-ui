<script>
   import {Route} from 'svelte-routing'
   import Home from './home/Home.svelte'
   import Education from './education/Education.svelte'
   import Hobbies from './hobbies/Hobbies.svelte'
   import MusicAndMovies from './musicAndMovies/MusicAndMovies.svelte'
   import Chloe from './chloe/Chloe.svelte'
   import Contact from './contact/Contact.svelte'

   import {Router} from 'svelte-routing'
   export let url = ""
</script>

<style>
   .pages {
      grid-area: page;
      
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      justify-self: center;
      align-self: center;
      
      width: 100%;
   }

   @media (max-width: 500px) {
      .pages {width: 94%}
   }
</style>

<div class="pages">
   <Router url="{url}">
      <Route path="/" component={Home}/>
      <Route path="/education" component={Education}/>
      <Route path="/hobbies" component={Hobbies}/>
      <Route path="/musicandmovies" component={MusicAndMovies}/>
      <Route path="/chloe" component={Chloe}/>
      <Route path="/contact" component={Contact}/>
   </Router>
</div>