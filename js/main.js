'use strict';
(function() {
	//cache DOM 
	//viewports
	var $aboutViewport = $('#aboutViewport'),
	$skillsViewport = $('#skillsViewport'),
	$projectsViewport = $('#projectsViewport'),
	$cvViewport = $('#cvViewport'),
	$contactViewPort = $('#contactViewPort'),
	$headerMenu = $('#headerMenu');

	//links
	var $btnLogo = $('#btnLogo'),
	$btnAbout = $('#btnAbout'),
	$btnSkills = $('#btnSkills'),
	$btnProjects = $('#btnProjects'),
	$btnCV = $('#btnCV'),
	$btnContact = $('#btnContact'),
	$btnCVLinkToSkills = $('#btnCVLinkToSkills');

	//links - menu
	var $btnMenuAbout = $('#btnMenuAbout'),
	$btnMenuSkills = $('#btnMenuSkills'),
	$btnMenuProjects = $('#btnMenuProjects'),
	$btnMenuCV = $('#btnMenuCV'),
	$btnMenuContact = $('#btnMenuContact');

	//Get header height for offset
	var headerHeight = $('#headerContainer').css('height').replace('px','');


	$headerMenu.removeClass('hide');
	
	function scrollTo(e) {
		var element = e.data.el;
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


	//Core skills link in cv
	$btnCVLinkToSkills.on('click', {el:$skillsViewport}, scrollTo);

}());