<script>
   import Header from './header/Header.svelte'
   // DesktopNav contains Pages and Aside
   import DesktopNav from '../navigation/DesktopNav.svelte'
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

      position: relative;
   }
</style>

<div class="grid">
   <Header/>
   <DesktopNav/>
   <MobileNav/>
   <Footer/>
</div>
