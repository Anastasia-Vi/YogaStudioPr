<script>
  import { Card, Grid, Row } from "$lib/ui/Grid";
  import { Direction } from "$lib/ui/Direction";
  import { Typeofyoga } from "$lib/ui/Typeofyoga";

  const socialLinks = [
    {
      icon: "/vk.svg",
      label: "VK",
      url: "https://vk.com/welcome.yoga",
    },
    {
      icon: "whatsapp.svg",
      label: "WhatsApp",
      url: "https://wa.me/+79029417000",
    },
    {
      icon: "/instagram.svg",
      label: "Instagram",
      url: "https://www.instagram.com/welcome.yoga?igsh=Z3VmZDZpbjB3Z3Nu",
    },
  ];
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
              <button class="learn">Learn More</button>
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

<Row noMargin>
  <Grid>
    <Card>
      <div class="section3">
        <video width="1080" height="720" controls>
          <track kind="captions" />
          <source src="/video1.mp4" type="video/mp4" />
        </video>
      </div>
    </Card>
  </Grid>
</Row>

<div class="container">
  <Row noMargin>
    <Grid>
      <Card col={6}>
        <h4>Our Studio</h4>
        <div class="address">
          <h2>Yoga Studio in the City of New York</h2>
          <p>123 5th Avenue, New York, NY 12004, USA.</p>
          <a href={location} target="_blank" rel="noopener noreferrer">
            <button class="btn4"> Find Us On Map </button>
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
    width: 100%;
    margin: 0 auto;
    padding-inline-start: 0;
    padding-inline-end: 0;
    height: 100%;
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
    background-image: url(/girl2.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .styles {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .social-links {
    transition: transform 0.3s;
    margin-top: 40rem;
    margin-left: 1rem;
  }

  .social-links:hover {
    transform: scale(1.1);
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
    border: 3px solid;
    background-color: var(--primary);
    padding: 0.5rem;
    margin-top: 2rem;
    border-color: var(--secondary);
    width: 35%;
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
  }
</style>
