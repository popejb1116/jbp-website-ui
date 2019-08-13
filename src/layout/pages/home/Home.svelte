<script>

   let familyImg = '/images/home_card_family.jpg'
   let placeholder = '/images/placeholders/home_card_family_placeholder.jpg'

   let hideClass
   const hidePlaceholder = () => {
      hideClass = "hide"
   }
</script>

<style>
   .card {
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;

      width: 100%;
      height: 100%;

      background: var(--theme-primary);
      margin: 3rem 0;
      border-radius: 2px;
      box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.8);
   }
   .img-wrapper {
      flex: 1;
      align-self: stretch;
      position: relative;
      min-height: 35vh;
      max-height: 40vh;
   }
   img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 40vh;
      position: absolute;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;

      /* HIDE PLACEHOLDERS */
      transition: opacity 1s;
   }
   /* HIDE ALT TEXT DURING FETCH */
   img:-moz-loading {
      visibility: hidden;
   }
   img.hide {
      opacity: 0;
   }

   .card-body {
      flex: 2;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
      padding: 1rem;
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
      align-self: flex-start;
      color: white;
      font-size: 1.1rem;
      margin-bottom: 1rem;
   }
   .stack {
      display: flex;
      flex-flow: column nowrap;
      margin-bottom: 1rem;
   }
   .slice {
      margin: 0;
   }
   .line-through {
      text-decoration: line-through;
   }
</style>


<div class="card">
   <div class="img-wrapper">
      <img 
         src={familyImg}
         alt="family-img"
         on:load={hidePlaceholder}
      >
      <img 
         src={placeholder} 
         class={hideClass} 
         alt="family-placeholder"
      >
   </div>
   
   <div class="card-body">

      <div class="title">
         HEY-OOO!
      </div>
      
      <div class="text">
         Hello there, you've reached the webpage of Jonathan Pope, glad you're here. 
         I’m a software developer that really enjoys JS related technology, especially tools like React and Svelte. 
         Before my recent transition to software development I was a chemist at a few pharmaceutical companies. Geez, spiel much… 
         Essentially, I’m just another nerd, let’s be real here.
      </div>
      
      <div class="text">
         But why go on and on about yourself one might ask? 
         I’m currently seeking a full time position so I feel somewhat obliged to toot my horn. 
         Now that I’ve explained it with text it’s somehow even lamer. Onward.
      </div>

      <div class="text">
         So I’m a nerd, yes. But what makes me different, at least in a way that’s beneficial to a potential employer? 
         I have a deep and honest belief in treating people with respect and genuinely believe I can make any team to which I’m a part of better. 
         I’ve always been able to develop honest and trusting relationships with former co-workers. 
         The ability to work cohesively and mutualistically has revealed its true value to me over the last 10 years. 
         It’s these criteria I strive to embody and it’s for this reason I’m needed.
      </div>

      <div class="stack">
         <div class="text slice line-through">
            <strong>List Of Demands:</strong>
         </div>
         
         <div class="text slice">
            <strong>Things I’m Looking For:</strong>
         </div>

         <div class="text slice">
            Believe it or not my top criteria is not pay. 
            While it would be dishonest to act as if this wasn’t a somewhat important variable, many other aspects of a company such as work environment and schedule flexibility are far more significant to me. 
            So if you work with a group of motivated and considerate people I’d love to add in, please contact me. 
            My wife now has a prime account, I need a full-time job.
         </div>
      </div>

      <div class="stack">
         <div class="text slice">
            <strong>Pro tip:</strong>
         </div>

         <div class="text slice">
            The worst part of laundry is sorting socks, amirite? 
            Try this, upon removing a soured pair after a long day just go ahead and roll them back together, as if you’re about to put them away. 
            Toss ‘em in the hamper then wash and dry as usual. 
            Now, no more finding matching pairs after washing and drying. 
            Most importantly, you won't keep adding to your ever growing collection of unmatched singles. 
            Those b*#tards, staring me dead in the eye from a fairly low shelf in the laundry room, knowing all too well I'll never find their sibling. 
            I'LL KILL YOU!!!! Eh-hum.. Excuse me. 
            You can see this is a topic I’m very passionate about.
         </div>
      </div>

      <div class="text">
         But you’re saying to yourself, “Jonathan, silly poor poor stupid Jonathan. 
         Socks will not become clean if washed and dried in a tight ball. 
         Better ideas have left a horse's behind.” Neigh my friend. 
         Being balled up doesn’t prevent soapy water from accessing the sock fibers, at least not to a significant extent. 
         If you’re anything like I was before the great enlightening many individual socks were being washed and dried all wadded up anyway. 
         This just being due to a common way of removing dirty socks by rolling it off your foot, leaving it wadded up. 
         So try it out, I’ve been doing this for years now with many different types of socks and they always come out clean and dry.
      </div>

      <div class="text">
         My gift to humanity.
      </div>
   </div>
</div>