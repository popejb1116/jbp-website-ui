<script>
   import {toggleMobileNav} from './MobileNavDisplay'
   let navIcon = '/images/icons/icon_open-mobile.svg'
</script>

<style>
   button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 4rem;
      height: 4rem;

      background: transparent;
      border: none;
   }
   img {
      width: 100%;
      height: 100%;
   }
   /* GRIDLAYOUT HIDES ASIDE AT 768 */
   @media (min-width: 769px) {
      button {
         display: none;
      }
   }
</style>

<button
   on:click={toggleMobileNav}
>
   <img src={navIcon} alt="nav-icon">
</button>
