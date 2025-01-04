<script>
    import { Card, Grid, Row } from "$lib/ui/Grid";
    
    const navMenu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact us", href: "/contacts" }
  ];
</script>

<div class="header">
    <Row noMargin>
        <Grid>
            <Card col={2}>
               <div class="logo">
                MillieYoga
               </div>    
            </Card>
            <Card col={10}>
                <div class="navMenu">
                    <ul>
                    {#each navMenu as item}
                        <li>
                        <a href={item.href}>{item.name}</a>
                        </li>
                    {/each}
                    </ul>
                    <button class="btn">+1 123 456 78 90
                    </button>
                </div>
            </Card>
        </Grid>
    </Row>
</div>





<style>
    /* prata-latin-400-normal */
    
    .logo{
        font-size: 1.1rem;
        font-weight: 700;
    }
    ul{
        gap: 1.5rem;/*space between 2 stuff in my children*/
        display: flex;
        justify-content: space-between;/*my children inline=*/
    }
    a:link,a:visited {
        text-decoration: none;
        font-size: 1rem;
        color: var(--text);
  }
    .navMenu{
        gap: 7rem;
        display: flex;
        justify-content: right;
        
    }
    .header{
        background:var(--primary);
        padding: 0.5rem;
        
    }
    .btn{
        display: block;
        width: 18%;
        color:var(--primary);
        border-radius: 50px;
        border: none;
        background-color:var(--secondary);
        padding: 0.7rem;
    }
    .btn:hover{
        background-color:var(--text);  
    }

</style>