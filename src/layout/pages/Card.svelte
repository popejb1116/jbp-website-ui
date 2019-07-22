<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: auto;
      min-height: 50vh;

      margin: 0.75rem 0.25rem;

      background: rgba(0, 0, 0, 0.05);
   }   
</style>

<div class="card">
   <slot></slot>
</div>