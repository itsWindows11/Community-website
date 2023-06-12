---
title: 'Lounge names history'
---

<ClientOnly>

<script setup>
	const url = 'https://corsproxy.io/?' + encodeURIComponent('https://torch.is/typing/loungenameshtml.txt');
	
	fetch(url)
		.then(response => {
			if (response.ok) return response.text()
			throw new Error('Network response was not ok.')
		})
		.then(data => {
			if (!document) {
				document.getElementById('loungeNames').innerHTML = data;
			}
		});
</script>

<h1>Lounge names history</h1>
<em>List is curated by <a href="https://github.com/torchgm">Torch</a></em><hr>
<div id="loungeNames"><h2>Loading...</h2></div>

</ClientOnly>