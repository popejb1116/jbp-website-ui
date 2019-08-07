<script>
   import PersonalWebsiteCard from './personalWebsiteCard/PersonalWebsiteCard.svelte'
   import YouTubeCard from './YouTubeCard.svelte'
   import MKNWebsiteCard from './MKNWebsiteCard.svelte'
</script>

<style>
   .wrapper {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
   }
</style>

<div class="wrapper">
   <PersonalWebsiteCard />
   <YouTubeCard />
   <MKNWebsiteCard />
</div>