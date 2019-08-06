<style>
   .youtube-card {
      width: 40vw;
      height: auto;

      background: var(--theme-accent);
      box-shadow: 2px 2px 4px var(--theme-accent);
   }
   iframe {
      width: 40vw;
      height: 24vw;
   }
   .body {
      height: 100%;
      padding: 1rem;
   }
   .title {
      color: var(--theme-primary);
      margin-bottom: 1rem;
      text-align: center;
      letter-spacing: 0.3rem;
      font-size: 2rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;    
   }
   .text {
      color: white;
      font-size: 1.1rem;
   }
</style>

<div class="youtube-card">
   <iframe 
      src="https://www.youtube.com/embed/35mFPbNE1iU" 
      frameborder="0" 
      title="Responsive Navbar">
   </iframe>

   <div class="body">
      <div class="title">Foyer into YouTube oblivion...</div>
      <div class="text">
         My first, and currently only, YouTube upload. 
         A lively responsive navbar solution using React and Styled Components.
      </div>
   </div>
</div>
