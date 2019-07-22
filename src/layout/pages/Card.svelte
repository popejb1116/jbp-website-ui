<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: auto;
      min-height: 50vh;
      
      background: var(--theme-primary);

      margin: 0.75rem 0.25rem;

      border-radius: 5px;
   }   
</style>

<div class="card">
   <slot></slot>
</div>