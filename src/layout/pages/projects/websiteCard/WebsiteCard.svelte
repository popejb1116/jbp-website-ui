<script>
   import FrameworkComparisonChart from './FrameworkComparisonChart.svelte'
</script>

<style>
   .website-card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex start;
      
      width: 100%;
      height: auto;

      margin: 0.75rem 0;
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
      font-size: 1.1rem;
   }
   
</style>

<div class="website-card">
   <FrameworkComparisonChart />
   <div class="card-body">
      <div class="title">
         This Very Website...
      </div>
      <div class="text">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi ullam inventore non amet illo officiis laudantium nemo ratione sint dolorum veniam deleniti, quas quae accusantium doloribus dolores, eum animi?
      </div>
   </div>
</div>