<script>
     import { Card, Grid, Row } from "$lib/ui/Grid";
     import { Classslot } from "$lib/ui/Classslot";
</script>

<Card>
    <div class="list1">
    <Classslot>
      <img src="class1.png" alt = "class1"/>
      <strong>Bend & Stretch</strong>
      <p>Tincidunt nisl amet in urna integer feugiat amet.</p>
      <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
    </Classslot>

    <Classslot>
      <img src="class2.png" alt = "class2"/>
      <strong>Rise & Shine</strong>
      <p>Sed eget commodo ipsum id egestas malesuada nisl.</p>
      <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
    </Classslot>

    <Classslot>
      <img src="class3.png" alt = "class3"/>
      <strong>Foundation in Flow</strong>
      <p>Scelerisque vivamus aliquam, vulputate nisl arcu orci in.</p>
      <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
    </Classslot>

    <Classslot>
      <img src="class4.png" alt = "class4"/>
      <strong>Vinyasa for Vitality</strong>
      <p>Massa integer eu mattis neque interdum ut fusce.</p>
      <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
    </Classslot>
  </div>
</Card>
 
   <style>
     strong {
       color:var(--text);
       font-family: 'Prata', sans-serif;
       font-weight: 400;
       text-transform: uppercase;
       letter-spacing: 0.2rem;
       font-size: 0.9rem;
     }
  img{
   margin-top: 1rem;
  }
   .list1{
    display: flex;
    text-align: left;
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
   </style>

