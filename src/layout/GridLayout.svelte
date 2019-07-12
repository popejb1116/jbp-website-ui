<script>
   import Header from './header/Header.svelte'
   // AsideNav CONTAINS Pages AND Aside
   // import AsideNav from '../navigation/AsideNav.svelte'
   import Aside from './aside/Aside.svelte'
   import Pages from './pages/Pages.svelte'
   import MobileNav from '../navigation/MobileNav.svelte'
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

      /* MOBILE NAVIGATION IMPLEMENTATION */
      position: relative;
   }
</style>

<div class="grid">
   <Header/>
   <Aside/>
   <Pages/>
   <!-- <MobileNav/> -->
   <Footer/>
</div>
