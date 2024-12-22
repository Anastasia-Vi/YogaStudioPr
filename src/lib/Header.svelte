<script>
    import { Card, Grid, Row } from "$lib/ui/Grid";
    
    const navMenu = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Contact us", href: "/contacts" }
  ];

</script>

<Row>
    <Grid>
        <Card col={2}>
            <img src="logo.png" alt="Logo" class="logo">
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
                <button class="btn">+7 902 941-70-00
                </button>
            </div>
            
        </Card>
    </Grid>
</Row>

<style>
    ul{
        display: flex; 
        justify-content: center ;   
    }
    .navMenu{
        display: flex;
        justify-content: space-between;
    }

</style>