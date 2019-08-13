<script>
   import Header from './header/Header.svelte'
   import Aside from './aside/Aside.svelte'
   import Pages from './pages/Pages.svelte'
   import MobileNav from '../navigation/MobileNav.svelte'
   import Footer from './footer/Footer.svelte'
</script>

<style>
   .grid {
      display: grid;
      height: 100vh;
      background: url('/images/bg-stripes.png') center center fixed;
      background-size: cover;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 15vh auto 10vh;
      grid-template-areas: 
         " head head head head head head head head head asid asid asid "
         " .... page page page page page page page .... asid asid asid "
         " foot foot foot foot foot foot foot foot foot asid asid asid "
      ;

      /* MOBILE NAVIGATION IMPLEMENTATION */
      position: relative;
      overflow-x: hidden;

      /* SMOOTH MOMENTUM SCROLLING ON MOBILE WEB */
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
   }

   /* CONVERT TO MOBILE NAV AND USE ASIDE FOR SOCIAL MEDIA LINKS ONLY */
   @media (max-width: 768px) {
      .grid {
         grid-template-rows: 15vh auto 10vh;
         grid-template-areas: 
            " head head head head head head head head head head head head "
            " .... page page page page page page page page page page .... "
            " foot foot foot foot foot foot foot foot foot foot foot foot "
         ;
      }
   }

   @media (max-width: 500px) {
      .grid {
         grid-template-rows: 15vh auto 10vh;
         grid-template-areas: 
            " head head head head head head head head head head head head "
            " page page page page page page page page page page page page "
            " foot foot foot foot foot foot foot foot foot foot foot foot "
         ;
      }
   }
</style>

<div class="grid">
   <Header/>
   <Aside/>
   <Pages/>
   <MobileNav/>
   <Footer/>
</div>
