<!-- <script>
   import {onMount} from 'svelte'

   let repos
   const getRepoStats = async(path) => {
      try {
         let res = await fetch(`https://api.github.com/repos/${path}`)
         let data = await res.json()
         let {full_name, stargazers_count, subscribers_count} = data
         let stats = {
            'name' : full_name,
            'stars' : stargazers_count,
            'subscribers' : subscribers_count
         }
         return stats
      } catch (error) {
         console.log("Error")
      }  
   }

   onMount(
      async() => {
         repos = await Promise.all([
         getRepoStats('angular/angular.js'),
         getRepoStats('facebook/react'),
         getRepoStats('sveltejs/svelte'),
         getRepoStats('vuejs/vue')
      ])
      console.log(repos)
      }
   )
</script>

<h1>Chart</h1> -->


<script>
   import {onMount} from 'svelte'

   onMount(() => {
      let ctx = document.getElementById('myChart');
      let data = {
         labels: ['Angular', 'React','Svelte','Vue'],
         datasets: [{
            label: 'Repo Stats',
            data: [70, 370, 22, 112],
            backgroundColor: [
               'rgba(254, 95, 85, 0.6)',
               'rgba(23, 90, 187, 0.6)',
               'rgba(240, 182, 127, 0.6)',
               'rgba(204, 255, 102, 0.6)'
            ],
            borderColor: [
               'rgba(254, 95, 85, 1)',
               'rgba(23, 90, 187, 1)',
               'rgba(240, 182, 127, 1)',
               'rgba(204, 255, 102, 1)'
            ],
            borderWidth: 1
         }]
      }
      let options = {
         title: {
            display: true,
            fontSize: 22,
            fontColor: '#fff',
            fontFamily: 'Ubuntu',
            text: 'Repo Stats and Other Things'
         },
         legend: {
            position: 'left',
            labels: {
               fontSize: 20,
               fontColor: '#fff',
               fontFamily: 'Ubuntu'
            }
         }
      }
      let myChart = new Chart(ctx, {
         type: 'pie',
         data: data,
         options: options
      })
   })
</script>

<style>
   .chart-container {
      width: 50vw;
      height: auto;
      background: rgba(0, 0, 0, .8);
      padding: 1rem;
   }
   #myChart {
      width: 100%;
      height: auto;
   }
</style>

<div class="chart-container">
   <canvas id="myChart"></canvas>
</div>

