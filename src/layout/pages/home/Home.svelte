<script>
   import Card from '../Card.svelte'
   let hero = '/images/card-hero_family.jpg'
</script>

<style>
   img{
      width: 100%;
      height: 40%;

      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
   }
</style>

<Card>
   <img src={hero} alt="hero">
   <p>Hello there, you've reached Jonathan Pope's personal website.</p>
</Card>