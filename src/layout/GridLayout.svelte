<script>
   import Header from './header/Header.svelte'
   import Pages from './pages/Pages.svelte'
   import Aside from './aside/Aside.svelte'
   import Footer from './footer/Footer.svelte'
</script>

<style>
   .grid {
      display: grid;
      height: 100vh;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 15vh auto 10vh;
      grid-template-areas: 
         " head head head head head head head head head head head head "
         " .... page page page page page page page page asid asid .... "
         " foot foot foot foot foot foot foot foot foot foot foot foot "
      ;
   }
</style>

<div class="grid">
   <Header/>
   <Pages/>
   <Aside/>
   <Footer/>
</div>
