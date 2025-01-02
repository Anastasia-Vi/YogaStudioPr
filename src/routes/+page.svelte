<script>
import { Card, Grid, Row } from "$lib/ui/Grid";
import {Direction} from "$lib/ui/Direction"
import {Typeofyoga} from "$lib/ui/Typeofyoga"

</script>

<div class="container">
    <Row noMargin>
        <Grid>
            <Card>
                <div class="container1">
                    <div class="section1">
                        <h1>Yoga Studio</h1>
                        <p>Amet, sodales ac congue fusce mattis quis praesent sollicitudin mauris est tortor pulvinar augue rhoncus nulla pellentesque nulla eget nunc.</p>
                        <div class="btn2">
                            <button class="join">Join Class Today</button>
                            <button class="learn">Learn more</button>
                        </div>
                    </div>
                    <div class="hero">
                        <img src="girl2.png" alt="yoga"/>
                    </div>
                </div>
            </Card>
            <Card col={4}>
                <div class="section2">
                <h1 class="styles">Many Styles Of Yoga To Suit Everyone</h1>
                <p>Morbi lobortis morbi dignissim sodales eget mauris turpis interdum sagittis sed cursus nunc nulla congue quis.</p>
                <button>Learn more</button>
                </div>
            </Card>
            <Card col={8}>
                <Typeofyoga></Typeofyoga>
            </Card>
        </Grid>
    </Row>
    </div>
            <Card>
                <div class="section3">
                    <video width="1080" height="720" controls>
                        <track kind="captions">
                        <source src="video1.mp4" type="video1">
                    </video>
                </div>
            </Card>



<Row>
    <Grid>
       
    </Grid>
</Row>

<style>
    .container{
        background: var(--primary);

    }
    .container1{
        display: flex;
        justify-content: left;
    }
    .section1{
        margin: 10rem 0;
        width: 35%;
        text-align: left;
        font-family: 'Lato', sans-serif;
        justify-content: space-around;
        font-weight: 400;
    }
    h1{
        font-size: 6rem;
        font-family: 'Prata', sans-serif;
        font-weight: 400;
    }
    .section3{
    width: 100%;
    margin: 0 auto;
    padding-inline-start: 0;
    padding-inline-end: 0;
    height: 100%;
    }
    .btn2{
        display: flex;
        justify-content: space-between;
        margin: 2.5rem 0;  
    }
    .join{
        display: block;
        color:var(--primary);
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        border-radius: 50px;
        border: none;
        background-color:var(--secondary);
        padding: 0.5rem;;
        margin: auto 0;
    }
    .join:hover{
        background-color:var(--text);  
    }
    .learn{
        display: block;
        color:var(--text);
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        border: none;
        padding: 0.5rem;;
        margin: auto 0;
    }
    .learn:hover{
        color:var(--secondary);  
    }
    .hero{
        max-width: 100%;
    margin: 5rem 0;
    z-index: 1;
    }
    .styles{
        font-size: 2.8rem;
    }
</style>