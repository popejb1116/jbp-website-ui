<script>
   let githubIcon = '/images/icons/icon_github.svg'
   let linkedinIcon = '/images/icons/icon_linkedin.svg'
</script>

<style>
   .wrapper {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      margin-top: 3rem;
   }
   a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7vh;
      height: 7vh;
      background-color: var(--theme-primary);
      transition: background-color 0.5s, box-shadow 0.5s;
   }
   a.circle {
      border-radius: 50%;
   }
   a.square {
      border-radius: 5%;
   }
   a:hover {
      background-color: var(--theme-accent);
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
   }
   a:focus {
      outline: none;
      box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
   }
   img {
      width: 5vh;
      height: 5vh;
   }
</style>

<div class="wrapper">
   <a class="circle" href="https://github.com/">
      <img src={githubIcon} alt="github-icon">
   </a>
   <a class="square" href="https://linkedin.com/">
      <img src={linkedinIcon} alt="linkedin-icon">
   </a>
</div>