<script>
  import { Card, Grid, Row } from "$lib/ui/Grid";
  import { Direction } from "$lib/ui/Direction";
  import { Typeofyoga } from "$lib/ui/Typeofyoga";
  import { Yogainstr } from "$lib/ui/Yogainstr";
  import { Instructors } from "$lib/ui/Instructors";
  import { Classes } from "$lib/ui/Classes";
  import { Classslot } from "$lib/ui/Classslot";
  import { socialLinks } from "$lib/stores/global";

  const location = "https://maps.app.goo.gl/GpSkUSr4dycsewxH8";
</script>

<div class="container hero">
  <Row noMargin>
    <Grid>
      <Card col={11}>
        <div class="container1">
          <div class="section1">
            <h1>Yoga Studio</h1>
            <p>
              Amet, sodales ac congue fusce mattis quis praesent sollicitudin
              mauris est tortor pulvinar augue rhoncus nulla pellentesque nulla
              eget nunc.
            </p>
            <div class="btn2">
              <button class="join">Join Class Today</button>
              <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
            </div>
          </div>
        </div>
      </Card>
      <Card col={1}>
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
    </Grid>
  </Row>
</div>

<div class="container">
  <Row noMargin>
    <Grid>
      <Card col={4}>
        <div class="section2">
          <h3>Many Styles Of Yoga To Suit Everyone</h3>
          <p>
            Morbi lobortis morbi dignissim sodales eget mauris turpis interdum
            sagittis sed cursus nunc nulla congue quis.
          </p>
          <button class="btn3">Learn more</button>
        </div>
      </Card>
      <Card col={8}>
        <Typeofyoga></Typeofyoga>
      </Card>
    </Grid>
  </Row>
</div>


      <div class="section3">
        <div class="play">
          <i class="ri-play-fill"></i>
        </div>
      </div>
    

<div class="container">
  <Row noMargin>
    <Grid>
      <Card col={6}>
        <h4>Our Studio</h4>
        <div class="address">
          <h2>Yoga Studio in the City of New York</h2>
          <p><i class="ri-map-pin-line"></i> 123 5th Avenue, New York, NY 12004, USA.</p>
          <a href={location} target="_blank" rel="noopener noreferrer">
            <button class="btn4"> Find Us On Map <i class="ri-external-link-fill"></i> </button>
          </a>
        </div>
      </Card>
      <Card col={6}>
        <div class="text">
          <p>
            Commodo eu hendrerit facilisis viverra vulputate sed turpis odio
            natoque justo semper mauris enim lorem mattis risus imperdiet
            pretium, sed vel facilisi arcu, turpis pharetra, eu euismod amet,
            vestibulum scelerisque bibendum massa. 
          </p>
          <p>
            Neque felis cras nunc magna
            turpis tincidunt enim facilisi orci sed id est mauris felis
            parturient accumsan sapien nunc nibh dignissim neque nec, molestie
            vel magna at et urna vulputate ut etiam in mattis est egestas
            penatibus vitae maecenas interdum sed arcu donec risus vestibulum
            aliquet auctor quam.
          </p>
        </div>
      </Card>
    </Grid>
  </Row>
</div>

<div class="container">
  <Row noMargin>
    <Grid>
      <Card>
        <h3 class="instructors">Yoga Instructors</h3>
        <Yogainstr></Yogainstr>
      </Card>
    </Grid>
  </Row>
</div>

<div class="container4">
  <Row noMargin>
    <Grid>
      <Card col={6}>
        <div class="section4">
          <img src="/girl8.png" alt = "girl8"/>
        </div>
      </Card>
      <Card col={6}>
        <div class="reviews">
          <strong>Featured Reviews</strong>
          <h3>Yoga Studio Like No Others!</h3>
          <div class="stars">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p>“Aliquam faucibus scelerisque odio aliquet platea scelerisque in metus nunc nunc nisl lacus, nec dignissim et, ultricies vitae suspendisse massa egestas 
            velit in massa eget nulla pharetra tortor sagittis sagittis massa nec.”</p>
          <div class="inforeviews">
            <strong>Jessica Lim</strong>
            <button class="viewr">View All Review <i class="ri-arrow-right-long-line"></i></button>
          </div>
        </div>
      </Card>
    </Grid>
  </Row>
</div>
<div class="container5">
  <Row noMargin>
    <Grid>
      <Card col={4}>
        <h4>Our Certification</h4>
      </Card>
      <Card col={8}>
        <div class="logos">
          <img src="/logo1.png" alt = "logo1"/>
          <img src="/logo2.png" alt = "logo2"/>
          <img src="/logo3.png" alt = "logo3"/>
          <img src="/logo4.png" alt = "logo4"/>
        </div>
      </Card>
    </Grid>
  </Row>
</div>  

<div class="container">
  <Row noMargin>
    <Grid>
      <Card>
        <h2>Popular Classes</h2>
        <div class="infoclasses">
          <p> Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis. </p>
            <button class="btn4">View All Classes</button>
          
         
        </div>
      </Card>
      <Card>
        <Classes></Classes>
      </Card>
    </Grid>
  </Row>
</div>



<style>
  .container1 {
    display: flex;
    justify-content: left;
  }
  .section1 {
    margin: 13rem 0;
    width: 35%;
    text-align: left;
    justify-content: space-around;
  }
  .section3 {
    background-image: url(/yogavideo.png);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-attachment: fixed;
    
    
    .play{
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background-color: #1a1a1a;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.5s;
      &:hover{
        background-color:var(--primary);
      }
      i{
        color:var(--primary);
        font-size: 3rem;
        &:hover{
          color:#1a1a1a;
        }
      }
    }
  }
  
  .icon{
    background-image: url(/icon1.svg);
    background-position: center;
    background-repeat: no-repeat;
  
  }
  .btn2 {
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 0;
  }
  .join {
    display: block;
    color: var(--primary);
    border-radius: 50px;
    border: none;
    background-color: var(--secondary);
    padding: 0.5rem;
    margin: auto 0;
  }
  .join:hover {
    background-color: var(--text);
  }
  .learn {
    display: block;
    color: var(--text);
    border: none;
    padding: 0.5rem;
    margin: auto 0;
    background: transparent;
  }
  .learn:hover {
    color: var(--secondary);
  }
  .hero {
    background-image: url(/girl7.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .container4 {
  display: flex;
   background-color: var(--secondary);
   justify-content: space-between;
   padding: 4rem 0;
   gap: 2rem;

  }
  .styles {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .section2 {
    margin: 1.5rem 0;
    text-align: left;
  }
  .btn3 {
    display: block;
    border-radius: 60px;
    border: 3px solid;
    background-color: var(--primary);
    padding: 0.5rem;
    margin-top: 2rem;
    border-color: var(--secondary);
    width: 40%;
  }
  .btn3:hover {
    background-color: var(--secondary);
  }
  .btn4 {
    display: block;
    border-radius: 60px;
    border: 1px solid;
    background-color: var(--primary);
    padding: 0.5rem;
    margin-top: 2rem;
    border-color: var(--secondary);
    width: 35%;
    color: var(--text);
  }
  .btn4:hover {
    background-color: var(--secondary);
  }
  a:link,
  a:visited {
    text-decoration: none;
    font-size: 1rem;
  }
  .address {
    margin: 1.5rem 0;
    width: 100%;
    p{
      color: #1a1a1a;
      font-weight: 600;
  
    }
  }
  .text{
    margin-top: 2rem;
    margin-left: 6rem;
  }
  .instructors{
   text-align: center;
   margin-bottom: 4rem;
  }
  .logos{
    display: flex;
    justify-content: space-between;
  }
  .container5{
  padding: 2rem 0;
  background-color: var(--primary);
  }
  .ri-map-pin-line{
    color: var(--secondary);
  }
  .ri-star-fill{
    color: var(--primary);
  }
  .reviews{
    margin-top: 4rem;
    strong{
      font-family: "Prata", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      
      color: #1a1a1a;
      &::selection{
        background: transparent;
        color:var(--primary);
      }
    }
    p{
    color: #1a1a1a;
    font-size: 24px;
    line-height: 34px;
    margin: 3rem 0
    }
  }
  .inforeviews{
    display: flex;
    justify-content: space-between;
    
    strong{
      text-transform: uppercase;
      font-family: "Prata", sans-serif;
      font-weight: 400;
      letter-spacing: 0.2rem;
      
    }
    button{
    display: block;
    color: #ffffff;
    border: none;
    background: transparent;
    font-weight: 400;
    &::selection{
        background: transparent;
        color:#1a1a1a;
      }
  }
}
.infoclasses{
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    width: 50%;
  }
  button{
    width: 15%;
  }
}

</style>
