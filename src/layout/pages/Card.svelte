<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: auto;
      min-height: auto;
      
      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 5px;
   }   
</style>

<div class="card">
   <slot></slot>
</div>