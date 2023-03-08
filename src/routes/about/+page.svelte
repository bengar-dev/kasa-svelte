<script>
	import MainTemplate from '@/templates/MainTemplate.svelte';
	import Header from '@/components/blocks/Header.svelte';
	import AboutBanner from '@/assets/about_banner.png';
	import Banner from '@/components/blocks/Banner.svelte';
	import DropDownComponent from '@/components/ui/DropDownComponent.svelte';
	import Footer from '@/components/blocks/Footer.svelte';
	import KasaLogoWhite from '@/assets/kasa_logo_white.svg';
</script>

<MainTemplate>
	<Header />
	<Banner src={AboutBanner} alt="Beautifull about banner" title="A Propos" />
	<section>
		<DropDownComponent title="Fiabilité"
			>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes
			aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</DropDownComponent
		>
		<DropDownComponent title="Respect"
			>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement
			discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</DropDownComponent
		>
		<DropDownComponent title="Service"
			>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
			N'hésitez pas à nous contacter si vous avez la moindre question.</DropDownComponent
		>
		<DropDownComponent title="Sécurité"
			>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
			logement correspond aux critères de sécurité établis par nos services. En laissant une note
			aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
			sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour
			nos hôtes.</DropDownComponent
		>
	</section>
	<Footer src={KasaLogoWhite} alt="Logo Kasa Blanc" footerText="2020 Kasa. All rights reserved" />
</MainTemplate>

<style>
	section {
		margin-top: 30px;
		padding: 0 50px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}
</style>
