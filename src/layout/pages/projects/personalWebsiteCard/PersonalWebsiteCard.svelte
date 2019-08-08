<script>
   import FrameworkComparisonChart from './FrameworkComparisonChart.svelte'
</script>

<style>
   .website-card {
      align-self: flex-end;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex start;
      
      width: 90%;
      height: auto;

      margin-top: 3rem;
      border-radius: 2px;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }

   .card-body {
      padding: 1rem;
      background: var(--theme-primary);
      border-top: solid 3px var(--theme-accent);
   }
   .title {
      text-align: center;
      color: var(--theme-accent);
      
      margin: 1rem 0;
      
      font-size: 2.5rem;
      font-weight: bold;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;      
   }
   .text {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.1rem;
   }
   .link {
      text-align: center;
   }
   a {
      text-align: center;
      color: var(--theme-accent);
      width: 100%;
      font-size: 1.1rem;
      font-family: 'Pacifico', cursive;
      text-shadow: 1px 1px 1px white;      
      text-decoration: none;
   }

   @media(max-width: 768px) {
      .website-card {
         width: 100%;
      }
   }
</style>

<div class="website-card">
   <FrameworkComparisonChart />
   <div class="card-body">
      <div class="title">
         This Very Website...
      </div>
      <div class="text">
         I built this website using a currently emerging JS framework known as Svelte.
         The pie chart above displays its Github star count, as well as the count for other popular frameworks.
         It's easy to see this framework doesn't rivial the competitors, but stars aren't everything.
         This is a highly performant framework with a minimalist syntax, and a few other tricks to boot.
         Check out Rich Harris, author, for deeper insights in the link below.
      </div>
      <div class="text">
         The styling and layout was built without the use of any third party CSS libraries.
         The highly responsive nature of this website is due to the use of Grid and Flexbox CSS properties throughout.
      </div>
      <div class="link">
         <a href="https://www.youtube.com/watch?v=AdNJ3fydeao">Svelte Propaganda</a>
      </div>
   </div>
</div>