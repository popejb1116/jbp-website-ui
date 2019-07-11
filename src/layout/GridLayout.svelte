<script>
   import Header from './header/Header.svelte'
   // DesktopNav contains Pages and Aside
   import DesktopNav from '../navigation/DesktopNav.svelte'
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

   .test {
      position: absolute;
      z-index: 1;
      top: 15vh;
      right: 0;
      height: 85vh;
      width: 50vw;
      background: rgba(0, 0, 0, 0.3);
   }
</style>

<div class="grid">
   <Header/>
   <DesktopNav/>
   <div class="test">Mobile Nav</div>
   <Footer/>
</div>
