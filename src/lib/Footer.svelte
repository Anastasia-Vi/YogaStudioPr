
 <script>
    import { Card, Grid, Row } from "$lib/ui/Grid";
    import { socialLinks } from "./stores/global";
 </script>

<div class="section5">
    <div class="mail">
      <i class="ri-mail-fill"></i>
    </div>
    <h2>Subscribe To Our Newsletter</h2>
    <p>Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis.</p>
    <div class="2bnt">
      <input type="text" name="input" value="Email address" />
      <button>Subscribe </button>
    </div>
  </div>

  <div class="container">
  <Row noMargin>
    <Grid>
      <Card col={3}>
       <strong>YOGA STYLE</strong>
        <!--ul>li*4.text>a-->
        <ul>
            <li class="text"><a href="">Anusara</a></li><!--Alt press+click-->
            <li class="text"><a href="">Ashtanga</a></li>
            <li class="text"><a href="">Bikram</a></li>
            <li class="text"><a href="">Hatha</a></li>
        </ul>
      </Card>
      <Card col={3}>
        <ul>
            <li class="text"><a href="">Hot Yoga</a></li><!--Alt press+click-->
            <li class="text"><a href="">Lyenger</a></li>
            <li class="text"><a href="">Restorative</a></li>
            <li class="text"><a href="">Vinyasa</a></li>
        </ul>
      </Card>
      <Card col={3}>
       <strong>Millie Yoga</strong>
       <p>Habitant quis nec nibh molestie lorem eu fermentum massa viverra aenean sed sed neque tincidunt sed praesent elit enim quisque tristique quis cras.</p>
       <div class="social-links">
        {#each socialLinks as { url, icon, label }}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            aria-label={label}
          >
            <img src={icon} alt={label} width="24" height="24" />
          </a>
        {/each}
      </div>
    </Card>
      <Card col={3}>
        <h6>CONTACT INFO</h6>
        <strong>123 5th Avenue, New York,NY 120004, USA.</strong>
        <a href="">+1 123 456 78 90</a>
        <a href="">hello@example.com</a>
      </Card>
    </Grid>
  </Row>
</div>  

<style>
  .section5 {
    background-image: url(/yogasection.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .mail{
      width: 50px;
      height: 45px;
      border-radius: 50%;
      background-color: var(--secondary);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      i{
        color:var(--primary);
        font-size: 1.2rem;
      }
    }
    button{
        display: block;
        width: 18%;
        color:var(--primary);
        border-radius: 50px;
        border: none;
        background-color:var(--secondary);
        padding: 0.7rem;
    }
    button:hover{
        background-color:var(--text);  
    }
}
.social-links{
    flex-direction: row;
}
</style>
 