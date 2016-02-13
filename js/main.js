'use strict';
(function() {
	//cache DOM 
	//viewports
	const $aboutViewport = $('#aboutViewport'),
	$skillsViewport = $('#skillsViewport'),
	$projectsViewport = $('#projectsViewport'),
	$cvViewport = $('#cvViewport'),
	$contactViewPort = $('#contactViewPort'),
	$headerContainer = $('#headerContainer'),
	$headerMenu = $('#headerMenu');

	//links
	const $btnLogo = $('#headerContainer').find('#btnLogo'),
	$btnAbout = $('#headerContainer').find('#btnAbout'),
	$btnSkills = $('#headerContainer').find('#btnSkills'),
	$btnProjects = $('#headerContainer').find('#btnProjects'),
	$btnCV = $('#headerContainer').find('#btnCV'),
	$btnContact = $('#headerContainer').find('#btnContact'),
	$btnCVLinkToSkills = $cvViewport.find('#btnCVLinkToSkills'),
	$btnAboutLinkToContact = $('#aboutViewport').find('#btnAboutLinkToContact');

	//links - menu
	const $btnMenuAbout = $('#headerMenu').find('#btnMenuAbout'),
	$btnMenuSkills =$('#headerMenu').find('#btnMenuSkills'),
	$btnMenuProjects = $('#headerMenu').find('#btnMenuProjects'),
	$btnMenuCV = $('#headerMenu').find('#btnMenuCV'),
	$btnMenuContact = $('#headerMenu').find('#btnMenuContact');

	//Get header height for offset
	const headerHeight = $headerContainer.css('height').replace('px','');

	//Stops the initial 'flash' of the menu when the page is first loaded.
	$headerMenu.removeClass('hide');
	
	function scrollTo(e) {
		const element = e.data.el;
		$('html, body').stop().animate ({
			scrollTop: element.offset().top - headerHeight
		}, 1000);
	};

	//Event listeners
	//Header links
	$btnLogo.on('click', {el:$aboutViewport}, scrollTo);
	$btnAbout.on('click', {el:$aboutViewport}, scrollTo);
	$btnSkills.on('click', {el:$skillsViewport}, scrollTo);
	$btnProjects.on('click', {el:$projectsViewport}, scrollTo);
	$btnCV.on('click', {el:$cvViewport}, scrollTo);
	$btnContact.on('click', {el:$contactViewPort}, scrollTo);

	//Header menu links
	$btnMenuAbout.on('click', {el:$aboutViewport}, scrollTo);
	$btnMenuSkills.on('click', {el:$skillsViewport}, scrollTo);
	$btnMenuProjects.on('click', {el:$projectsViewport}, scrollTo);
	$btnMenuCV.on('click', {el:$cvViewport}, scrollTo);
	$btnMenuContact.on('click', {el:$contactViewPort}, scrollTo);

	//Random links
	$btnCVLinkToSkills.on('click', {el:$skillsViewport}, scrollTo);
	$btnAboutLinkToContact.on('click', {el:$contactViewPort}, scrollTo);

}());