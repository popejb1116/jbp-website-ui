<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 95%;
      min-height: 50vh;

      margin: 0.5rem;
      border-radius: 5px;
      border: solid var(--theme-secondary) 5px;

      background: rgba(0, 0, 0, 0.1);
   }   
</style>

<div class="card">
   <slot></slot>
</div>