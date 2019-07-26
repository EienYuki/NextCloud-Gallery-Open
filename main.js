const desktop = 
`
<a id="galleryAPPViewbtn" aria-label="相簿">
    <svg width="20" height="20" viewBox="0 0 20 20" alt="">
        <image x="0" y="0" width="20" height="20" preserveAspectRatio="xMinYMin meet" xlink:href="/apps/gallery/img/app.svg?v=d7726c1d" class="app-icon"></image>
    </svg>
    <span>相簿</span>
</a>
`

const mobile = 
`
<a id="galleryAPPViewbtn" aria-label="相簿">
    <svg width="16" height="16" viewBox="0 0 16 16" alt="">
        <defs><filter id="invertMenuMore-gallery"><feColorMatrix in="SourceGraphic" type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"></feColorMatrix></filter></defs>
        <image x="0" y="0" width="16" height="16" preserveAspectRatio="xMinYMin meet" filter="url(#invertMenuMore-gallery)" xlink:href="/apps/gallery/img/app.svg?v=9cc5153a" class="app-icon"></image>
    </svg>
    <span>相簿</span>
</a>
`

document.querySelector('#appmenu li[data-id="gallery"]').innerHTML = desktop
document.querySelector('#apps li[data-id="gallery"]').innerHTML = mobile
document.querySelectorAll('#galleryAPPViewbtn').forEach(e => e.addEventListener('click', openGalleryAPP))

function openGalleryAPP () {
	let tg = document.querySelector('#galleryAPPViewbtn')
	let tmp = tg.innerHTML
	window.open('/apps/gallery/' + window.location.search.split('&')[0].replace('?dir=/', '#'))
	setTimeout(function() {tg.innerHTML = tmp}, 500)
}
