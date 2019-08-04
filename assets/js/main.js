/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	

	// Get the modal
	var modal = document.getElementById("mModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myPmg");
	var modalImg = document.getElementById("img02");
	var captionText = document.getElementById("cption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	// Get the modal
	var modal = document.getElementById("muModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myTmg");
	var modalImg = document.getElementById("img03");
	var captionText = document.getElementById("cuption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("cluse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	// Get the modal
	var modal = document.getElementById("mqModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myGmg");
	var modalImg = document.getElementById("img04");
	var captionText = document.getElementById("cqption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clqse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	
	// Get the modal
	var modal = document.getElementById("miModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myEmg");
	var modalImg = document.getElementById("img05");
	var captionText = document.getElementById("ciption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clise")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	
	// Get the modal
	var modal = document.getElementById("mxModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myZmg");
	var modalImg = document.getElementById("img06");
	var captionText = document.getElementById("cxption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clxse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	
	// Get the modal
	var modal = document.getElementById("mkModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myMmg");
	var modalImg = document.getElementById("img07");
	var captionText = document.getElementById("ckption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clkse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	// Get the modal
	var modal = document.getElementById("mwModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myYmg");
	var modalImg = document.getElementById("img08");
	var captionText = document.getElementById("cwption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clwse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	// Get the modal
	var modal = document.getElementById("mbModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myAmg");
	var modalImg = document.getElementById("img09");
	var captionText = document.getElementById("cbption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clbse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}


	// Get the modal
	var modal = document.getElementById("mrModal");

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("myHmg");
	var modalImg = document.getElementById("img010");
	var captionText = document.getElementById("crption");
	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("clrse")[0];
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}

	

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);