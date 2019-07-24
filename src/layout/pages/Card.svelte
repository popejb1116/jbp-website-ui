<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      min-height: auto;
      
      background: var(--theme-primary);
      margin: 0.75rem 0;
      border-radius: 2px;
      box-shadow: 2px 2px 4px black;
      box-shadow: 2px 2px 4px var(--theme-primary);
   }   
</style>

<div class="card">
   <slot></slot>
</div>