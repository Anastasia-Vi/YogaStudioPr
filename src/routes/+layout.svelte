<script>
    import Header from '../lib/Header.svelte';
    import Footer from '../lib/Footer.svelte';
    import '../app.css';
    import '@fontsource/prata';
    import '@fontsource/lato';
    import 'remixicon/fonts/remixicon.css'
</script>
<Header />
<slot />
<Footer />