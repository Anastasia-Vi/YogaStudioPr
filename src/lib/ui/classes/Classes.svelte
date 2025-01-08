<script>
     import { Card, Grid, Row } from "$lib/ui/Grid";
     import { Classslot } from "$lib/ui/Classslot";
</script>

<Card>
    <div class="list1">
    <Classslot>
      <div class="layout" style="background-image:url(/class1.png)"></div>
      <div class="info-class">
        <strong>Bend & Stretch</strong>
        <p>Tincidunt nisl amet in urna integer feugiat amet.</p>
        <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
      </div>
    </Classslot>

    <Classslot>
      <div class="layout" style="background-image:url(/class2.png)"></div>
      <div class="info-class">
        <strong>Rise & Shine</strong>
        <p>Sed eget commodo ipsum id egestas malesuada nisl.</p>
        <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
      </div>
      
    </Classslot>

    <Classslot>
      <div class="layout" style="background-image:url(/class3.png)"></div>
      <div class="info-class">
        <strong>Foundation in Flow</strong>
        <p>Scelerisque vivamus aliquam, vulputate nisl arcu orci in.</p>
        <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
      </div>
      
    </Classslot>

    <Classslot>
      <div class="layout" style="background-image:url(/class4.png)"></div>
      <div class="info-class">
        <strong>Vinyasa for Vitality</strong>
        <p>Massa integer eu mattis neque interdum ut fusce.</p>
        <button class="learn">Learn More <i class="ri-arrow-right-long-line"></i></button>
      </div>
     
    </Classslot>
  </div>
</Card>
 
   <style>
     strong {
       color:#1a1a1a;
       font-family: 'Prata', sans-serif;
       font-weight: 400;
       font-size: 0.9rem;
       font-size: 20px;
       line-height: 24px;
    }

  img{
   margin-top: 1rem;
  }
  .info-class{
    margin-left: 1.5rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    p{
      margin: 0.8rem 0;
    }
    &:hover{
      background-size: contain;
    }
  }
   .list1{
    display: flex;
    justify-content: space-between;
    
   }

   .learn {
    display: block;
    color: var(--secondary);
    border: none;
    background: transparent;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    margin-top: 1rem;
    text-align: left;
  }
  .learn:hover {
    color: var(--text);
  }
  .layout{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;/*Make it bigger like image and cut if it too much*/
    width: 100%;
    padding-bottom: 60%;
    height: 0;
    margin-bottom: 1.5rem; 
  }
   </style>

