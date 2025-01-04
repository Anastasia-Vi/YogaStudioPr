<script>
     import { Direction } from "$lib/ui/Direction";
     import { Card, Grid, Row } from "$lib/ui/Grid";
</script>

<Card col={4}>
  <div class="yoga-list">
    <Direction>
      <strong>Anusara</strong>
      <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
    </Direction>
    <Direction>
      <strong>Ashtanga</strong>
      <p>Ultrices senectus nec neque id sed ultricies massa tristique tellus.</p>
    </Direction>
    <Direction>
      <strong>Bikram</strong>
      <p>Imperdiet laoreet vulputate eu vestibulum maecenas tellus quisque eu blandit.</p>
    </Direction>
    <Direction>
      <strong>Hatha</strong>
      <p>Quis dui leo tellus vitae nisl, laoreet nullam lacinia velit.</p>
    </Direction>
  </div>
</Card>
<Card col={4}>
    <div class="yoga-list">
      <Direction>
        <strong>Hot Yoga</strong>
        <p>Eu egestas nunc, congue et mauris sed venenatis at volutpat gravida eros.</p>
      </Direction>
      <Direction>
        <strong>Iyengar</strong>
        <p>Pellentesque amet lectus mattis enim et ut nisi vel tempor.</p>
      </Direction>
      <Direction>
        <strong>Restorative</strong>
        <p>Nullam non egestas maecenas convallis etiam integer sed adipiscing vitae.</p>
      </Direction>
      <Direction>
        <strong>Vinyasa</strong>
        <p>Odio proin facilisis ac feugiat leo aliquet nibh mauris sed.</p>
      </Direction>
  </div>
</Card>
 
   <style>
    .yoga-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* Two equal columns*/
      gap: 12px;
     }
     strong {
       color:var(--text);
       font-family: 'Prata', sans-serif;
       font-weight: 400;
       text-transform: uppercase;
       letter-spacing: 0.2rem;
       font-size: 0.9rem;
       
     }
   
   
   </style>

