<script>
   import {toggleMobileNav} from './MobileNavDisplay'
   // let navIcon = '/images/icons/icon_mobile-nav.png'
   let navIcon = '/images/icons/icon_open-mobile.svg'
</script>

<style>
   #toggle {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 4rem;
      background: transparent;
      
      border: solid 1px red;
   }
   img {
      width: 100%;
      height: 100%;
      padding-left: 25%;
   }
   /* GRIDLAYOUT HIDES ASIDE AT 768 */
   @media (min-width: 769px) {
      #toggle {
         display: none;
      }
   }
</style>

<button 
   id="toggle"
   on:click={toggleMobileNav}
>
   <img src={navIcon} alt="nav-icon">
</button>
