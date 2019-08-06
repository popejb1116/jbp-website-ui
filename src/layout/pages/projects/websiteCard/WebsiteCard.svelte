<script>
   import FrameworkComparisonChart from './FrameworkComparisonChart.svelte'
</script>

<style>
   .website-card {
      display: flex;
      width: 100%;
      
      border: solid 2px red;
   }
   .card-body {
      background: var(--theme-primary);
      width: 35%;
   }
</style>

<div class="website-card">
   <FrameworkComparisonChart />
   <div class="card-body">
      <div class="title">
         This Very Website...
      </div>
      <div class="text">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vero dicta iure fuga voluptatibus repellendus. Consectetur nam animi nihil voluptas atque ab corporis pariatur laudantium ullam, tenetur necessitatibus ad eaque?
      </div>
   </div>
</div>