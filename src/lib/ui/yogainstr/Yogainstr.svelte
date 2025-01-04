<script>
     import { Card, Grid, Row } from "$lib/ui/Grid";
     import { Instructors } from "$lib/ui/Instructors";
     const socialLinksEllen = [
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
  const socialLinksChristina = [
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
  const socialLinksLuke = [
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
  const socialLinksGloria = [
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
</script>

<Card>
    <div class="list1">
    <Instructors>
      <img src="/instructor1.png" alt = "Ellen"/>
      <strong>Ellen Sherman</strong>
      <div class="social-links">
        {#each socialLinksEllen as { url, icon, label }}
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
    </Instructors>

    <Instructors>
      <img src="/instructor2.png" alt = "Christina"/>
      <strong>Christina Latham</strong>
      <div class="social-links">
        {#each socialLinksChristina as { url, icon, label }}
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
    </Instructors>


    <Instructors>
      <img src="/instructor3.png" alt = "Luke"/>
      <strong>Luke Stryker</strong>
      <div class="social-links">
        {#each socialLinksLuke as { url, icon, label }}
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
    </Instructors>
    <Instructors>
      <img src="/instructor4.png" alt = "Gloria"/>
      <strong>Gloria benner</strong>
      <div class="social-links">
        {#each socialLinksGloria as { url, icon, label }}
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
    </Instructors>
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
    .social-links {
    transition: transform 0.3s;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

  }

    .social-links:hover {
    transform: scale(1.1);
  }
  img{
    margin-bottom: 1rem;
  }
   .list1{
    display: flex;
   }
   </style>

