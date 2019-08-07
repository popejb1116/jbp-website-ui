<style>
   .youtube-card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: auto;
      
      margin: 0.75rem 0;

      background: transparent;
      box-shadow: 2px 2px 4px var(--theme-primary);
      border-radius: 2px;
   }
   .iframe-container {
      display: flex;
      justify-content: center;

      width: 100%;
      padding: 0.25rem 0;
      
      background: rgba(0, 0, 0, 0.5);
      border-top-left-radius: 2px; 
      border-top-right-radius: 2px;
   }
   iframe {
      width: 40vw;
      height: 24vw;
      min-width: 320px;
      min-height: 192px;
      border-radius: 5px;
   }
   .body {
      padding: 1rem;
      background: var(--theme-primary);
      border-bottom-left-radius: 2px; 
      border-bottom-right-radius: 2px; 
   }
   .title {
      color: var(--theme-accent);
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
   <div class="iframe-container">
      <iframe 
         src="https://www.youtube.com/embed/35mFPbNE1iU" 
         frameborder="0" 
         title="Responsive Navbar">
      </iframe>
   </div>

   <div class="body">
      <div class="title">Foyer into YouTube oblivion...</div>
      <div class="text">
         My first, and currently only, YouTube upload. 
         A lively responsive navbar solution using React and Styled Components.
      </div>
   </div>
</div>
