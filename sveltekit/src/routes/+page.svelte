<script>
	export let data;
	let { Parking_lot, slug, announcement, zones } = data;
	const sluggish = slug;

	//Count Spaces
	let slots = zones[zones.length - 1].end;
	let full = [], vacant = [];
	for (let i = 0; i < zones.length; i++) {
		full[i] = 0;
		vacant[i] = 0;
	}
	console.log(slots);

	for (let i = 0; i < Parking_lot.length; i++) {
		for (let j = 0; j < zones.length; j++) {
			if (zones[j].start <= Parking_lot[i].parked_where && Parking_lot[i].parked_where <= zones[j].end) full[j]++;
			vacant[j] = zones[j].end - zones[j].start + 1 - full[j];
		}
	}

	if (Parking_lot.length == 0) {
		for (let j = 0; j < zones.length; j++) {
			vacant[j] = zones[j].end - zones[j].start + 1;
			console.log(`${zones[j].name} -> ${zones[j].end - zones[j].start + 1}`);
		}
	}

	let vacantAll = slots - Parking_lot.length;

	let iter = -1;
	let count = () => {
		iter++;
		return iter;
	}

	//Return Affected Spaces
	let input = announcement?.affected;
	let msg = [];
	
	if (input !== null && input !== undefined) {
		input.sort(function(a, b){return a - b});

		let mi = 0;
		msg[0] = {from: input[0], to: 0};

		for (let i = 0; i < input.length - 1; i++) {
			if (input[i + 1] != input[i] + 1) {
				msg[mi].to = input[i];
				msg[mi + 1] = {from: input[i + 1], to: 0};
				mi++;
			}
		}

		msg[msg.length - 1].to = input[input.length - 1];
	}
</script>

{#if announcement !== null}
	<div id="announce">
		<h3>
			<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" style="fill: white;">
				<path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
			</svg>
			ขออภัยในความไม่สะดวก
		</h3>
		<div style="display: flex; gap: 3px; align-items:center; flex-wrap: wrap;">
			<div>ช่องที่ปิดบริการ:</div>
			{#each msg as Affected}
				<div id="affslots">
					{#if Affected.from == Affected.to}
						{Affected.from}
					{:else}
						{Affected.from}-{Affected.to}
					{/if}
				</div>
			{/each}
		</div>
		<p>{announcement.announcement}</p>
	</div>
{/if}
<h2 id="title2" style="font-size: 24px; margin: 10px 0px 10px 0px;">แผนผังที่จอดในบริเวณโรงเรียน</h2>
<div id="parkingdisplay">
	<img src="/map.svg" alt="School Map" style="display: block;" />
	<div>
		<div id="parkinfo">
			{#each zones as zone}
				<div style="display: flex; justify-content: space-between;">
					<div>{zone.name}</div>
					<div id="zoneslot">
						<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style="fill: white">
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
						</svg>
						{zone.start}-{zone.end}
					</div>
				</div>
				<div>ว่าง <span style="color: var(--tri)">{vacant[count()]}</span> ที่</div>			
			{/each}
		</div>
		<hr style="height: 3px;" />
		<div id="parkinfo" style="grid-template-rows: 1fr; grid-template-columns: 64.5% 12% 23.5%;">
			<div>ว่างทั้งหมด</div>
			<span />
			<div><span style="color: var(--tri)">{vacantAll}</span> ที่</div>
		</div>
	</div>
</div>
