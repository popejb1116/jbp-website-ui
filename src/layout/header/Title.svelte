<style>
   span {
      display: inline-block;
      text-align: center;
      font: bold 4rem 'Ubuntu', sans-serif;
      vertical-align: middle;

      background-image: var(--gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      color: transparent;
      background-size: 300%;

      text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);

      animation: title-animation 20s infinite alternate;
   }

   @keyframes title-animation{
      0% {background-position: left;}
      100% {background-position: right;}
   }

   @media(max-width: 768px) {
      span {
         font-size: 2rem;
      }
   }
</style>

<span>Jonathan Pope</span>