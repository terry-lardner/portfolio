'use strict';
(function() {
	//cache DOM 
	//viewports
	const $aboutViewport = $('#aboutViewport'),
	$skillsViewport = $('#skillsViewport'),
	$projectsViewport = $('#projectsViewport'),
	$cvViewport = $('#cvViewport'),
	$contactViewPort = $('#contactViewPort'),
	$headerMenu = $('#headerMenu');

	//links
	const $btnLogo = $('#btnLogo'),
	$btnAbout = $('#btnAbout'),
	$btnSkills = $('#btnSkills'),
	$btnProjects = $('#btnProjects'),
	$btnCV = $('#btnCV'),
	$btnContact = $('#btnContact'),
	$btnCVLinkToSkills = $('#btnCVLinkToSkills');

	//links - menu
	const $btnMenuAbout = $('#btnMenuAbout'),
	$btnMenuSkills = $('#btnMenuSkills'),
	$btnMenuProjects = $('#btnMenuProjects'),
	$btnMenuCV = $('#btnMenuCV'),
	$btnMenuContact = $('#btnMenuContact');

	//Get header height for offset
	const headerHeight = $('#headerContainer').css('height').replace('px','');


	$headerMenu.removeClass('hide');
	
	function scrollTo(e) {
		$('html, body').stop().animate ({
			scrollTop: e.offset().top - headerHeight
		}, 1000);
	};

	//Event listeners
	//Header links
	$btnLogo.on('click', () => {
		scrollTo($aboutViewport);
	});

	$btnAbout.on('click', () => {
		scrollTo($aboutViewport);
	});

	$btnSkills.on('click', () => {
		scrollTo($skillsViewport);
	});

	$btnProjects.on('click', () => {
		scrollTo($projectsViewport);
	});

	$btnCV.on('click', () => {
		scrollTo($cvViewport);
	});

	$btnContact.on('click', () => {
		scrollTo($contactViewPort);
	});

	//Header menu links
	$btnMenuAbout.on('click', () => {
		scrollTo($aboutViewport);
	});

	$btnMenuSkills.on('click', () => {
		scrollTo($skillsViewport);
	});

	$btnMenuProjects.on('click', () => {
		scrollTo($projectsViewport);
	});

	$btnMenuCV.on('click', () => {
		scrollTo($cvViewport);
	});

	$btnMenuContact.on('click', () => {
		scrollTo($contactViewPort);
	});

	//Core skills link in cv
	$btnCVLinkToSkills.on('click', () => {
		scrollTo($skillsViewport);
	});

}());