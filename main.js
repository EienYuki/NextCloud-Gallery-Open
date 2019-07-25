const div = document.createElement('div')
div.innerHTML = 
`
<li data-id="galleryAPPView" class="" tabindex="-1">
	<a id="galleryAPPViewbtn" aria-label="相簿">
			<svg width="20" height="20" viewBox="0 0 20 20" alt="">
				<image x="0" y="0" width="20" height="20" preserveAspectRatio="xMinYMin meet" xlink:href="/apps/gallery/img/app.svg?v=d7726c1d" class="app-icon"></image>
			</svg>
		<span>相簿</span>
	</a>
</li>
`
document.querySelector('#appmenu').appendChild(div)
document.querySelector('#galleryAPPViewbtn').addEventListener('click', openGalleryAPP)

function openGalleryAPP () {
	let tg = document.querySelector('#galleryAPPViewbtn')
	let tmp = tg.innerHTML
	window.open('/apps/gallery/' + window.location.search.split('&')[0].replace('?dir=/', '#'))
	setTimeout(function() {tg.innerHTML = tmp}, 500)
}
