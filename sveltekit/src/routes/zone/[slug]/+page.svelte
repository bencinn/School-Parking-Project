<script>
	export let data;
	let { Parking_lot, slug, zones } = data;
	$: ({ Parking_lot, slug, zones } = data);
	const sluggish = parseInt(slug);

	//Unavailable Spaces
	let unavailable = [];
	let ui = 0, i, j, l;
	if (Parking_lot.length != 0) {
		for (i = zones[sluggish].start; i <= zones[sluggish].end; i++) {
			for (j = 0; j < Parking_lot.length; j++) {
				l = Parking_lot[j].parked_where;
				if (i == l) {
					unavailable[ui] = i;
					ui++;
					break;
				}
			}
			if (i == l) break;
		}
	}

	function if_available(slot) {
		for (let i = 0; i < unavailable.length; i++) {
			if (slot == unavailable[i]) return false;
		}
		return true;
	}
	
</script>

<h2 id="title2" style="font-size: 24px; margin: 10px 0px 10px 0px;">
	{#if sluggish < zones.length && sluggish >= 0}
		<div style="display: flex; align-items: center; justify-content: center; gap: 5px;">
			<span>ที่จอดรถบริเวณ</span>
			<span style="color: var(--tri);">{zones[sluggish].name}</span>
			<div id="zoneslot">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: white">
					<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
				</svg>
				{zones[sluggish].start}-{zones[sluggish].end}
			</div>
		</div>
	{:else}
		ลิงก์ของท่านผิด
	{/if}
</h2>
<fieldset style="color: white;">
	<legend>เลือกเข้าที่จอดรถของท่าน</legend>
	<div style="display: flex; flex-wrap: wrap; gap: 8px;">
		{#if sluggish < zones.length && sluggish >= 0}
			{#each Array(zones[sluggish].end - zones[sluggish].start + 1) as _, index(index + zones[sluggish].start)}
				{#if if_available(index + zones[sluggish].start) === true}
					<a id="btn" href={'/parking/' + (index + zones[sluggish].start)} style="font-size: 18px; padding: 6px; align-items: center;">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: white">
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
						</svg>
						<span>
							{index + zones[sluggish].start}
						</span>
					</a>
				{:else}
					<div id="parked">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: white">
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
						</svg>
						<span>
							{index + zones[sluggish].start}
						</span>
					</div>
				{/if}
			{/each}
		{:else}
			<div>error!</div>
		{/if}
	</div>
</fieldset>