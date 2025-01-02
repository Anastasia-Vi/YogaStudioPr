<script>
     import { Direction } from "$lib/ui/Direction";
     import { Card, Grid, Row } from "$lib/ui/Grid";

     const kindOfYoga = [
       { name: "Anusara", description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros." },
       { name: "Ashtanga", description: "Ultrices senectus nec neque id sed ultricies massa tristique tellus." },
       { name: "Bikram", description: "Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit." },
       { name: "Hatha", description: "Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit." },
       { name: "Hot Yoga", description: "Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros." },
       { name: "Iyengar", description: "Pellentesque amet lectus mattis enim et ut nisi vel tempor." },
       { name: "Restorative", description: "Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae." },
       { name: "Vinyasa", description: "Odio proin facilisis ac feugiat leo aliquet nibh mauris sed." },
     ];
</script>


<Row>
     <Grid>
          <Card col={12}>
               <div class="yoga-list">
                    {#each kindOfYoga as { name, description }}
                      <Direction>
                        <h2>{name}</h2>
                        <p>{description}</p>
                      </Direction>
                    {/each}
                  </div>
          </Card>
     </Grid>
</Row>
   <style>
     .yoga-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Two equal columns */
      gap: 16px;
     }
   
     h2 {
       margin: 0 0 8px;
     }
   
     p {
       margin: 0;
     }
   </style>

