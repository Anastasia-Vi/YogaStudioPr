<script>
     import { Direction } from "$lib/ui/Direction";
     import { Card, Grid, Row } from "$lib/ui/Grid";
</script>

<Card col={4}>
  <div class="yoga-list">
    <Direction>
      <h2>Anusara</h2>
      <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
    </Direction>
    <Direction>
      <h2>Ashtanga</h2>
      <p>Ultrices senectus nec neque id sed ultricies massa tristique tellus.</p>
    </Direction>
    <Direction>
      <h2>Bikram</h2>
      <p>Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit.</p>
    </Direction>
    <Direction>
      <h2>Hatha</h2>
      <p>Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit.</p>
    </Direction>
  </div>
</Card>
<Card col={4}>
    <div class="yoga-list">
      <Direction>
        <h2>Hot Yoga</h2>
        <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
      </Direction>
      <Direction>
        <h2>Iyengar</h2>
        <p>Pellentesque amet lectus mattis enim et ut nisi vel tempor.</p>
      </Direction>
      <Direction>
        <h2>Restorative</h2>
        <p>Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae.</p>
      </Direction>
      <Direction>
        <h2>Vinyasa</h2>
        <p>Odio proin facilisis ac feugiat leo aliquet nibh mauris sed.</p>
      </Direction>
  </div>
</Card>
 
   <style>
    .yoga-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Two equal columns */
      gap: 16px;
     }
     h2 {
       margin: 0 0 8px;
     }
   
   
   </style>

