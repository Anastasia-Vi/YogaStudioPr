
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
    <div class="bnt-sub">
      <input type="text" name="input" value="Email address" />
      <button>Subscribe </button>
    </div>
  </div>

  <div class="container">
  <Row noMargin>
    <Grid>
      <Card col={3}>
       <strong>YOGA STYLE</strong>
       <br>
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
        <div class="logo2" style="background-image:url(/logo-dark.svg)"></div>
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
        <div class="addressF">
        <strong>123 5th Avenue, New York,NY 120004, USA.</strong>
        <a href="">+1 123 456 78 90</a>
        <a href="">hello@example.com</a>
        </div>
        
      </Card>
    </Grid>
  </Row>
</div>  

<style>
  .section5 {
    background-image: linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.3)), url(/yogasection.png);/*rgb does background darker*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(-10);
    height: 80vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        color: #ffffff;
        margin: 1rem 0;
      }
      p{
        width: 35%;
        text-align: center;
        color: #ffffff;
      }
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
        &:hover{
          color: var(--text);
        }
      }
      
    }
    button{
        display: block;
        width: 20%;
        color:#ffffff;
        border-radius: 50px;
        border: none;
        background-color:var(--secondary);
        padding: 0.7rem;
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;
    }
    button:hover{
        background-color: #1a1a1a;
    }
}
.social-links{
    flex-direction: row;
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}
.bnt-sub{
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 60%;
  align-items: center;

}
input{
        width: 40%;
        color:var(--text);
        border-radius: 50px;
        border: none;
        background-color:var(--primary);
        padding: 0.7rem;
        font-size: 16px;
        line-height: 30px;
        font-weight: 300;

}
.container{
  strong{
  color:var(--title);
  font-family: "Prata", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  margin-bottom: 1.5rem;
  display: inline-block;
  }
}
a:link,a:visited {
        text-decoration: none;
        font-size: 1rem;
        color: #1a1a1a;
        font-size: 16px;
        line-height: 30px;
        &:hover{
          color: var(--secondary);
        }
  }
.logo2{
   background-position:top;
    background-repeat: no-repeat;
    background-size: contain;/*Make it bigger like image and cut if it too much*/
    width: 60%;
    height: 20%;
    margin-bottom: 2rem;

}
h6{
  color:#5a5a5a;
  font-family: "Prata", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 23px;
  display: inline-block;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  }
  .addressF{
    margin-left: 1rem;
  strong{
    color: var(--text);
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 0;
  }
  a:link,a:visited {
        text-decoration: none;
        font-size: 1rem;
        color: var(--text);
        font-size: 16px;
        line-height: 30px;
        &:hover{
          color: var(--secondary);
        }
  }
  }
</style>
 