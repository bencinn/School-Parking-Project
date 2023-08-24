<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;

	let full1 = 0,
		full2 = 0,
		full3 = 0,
		full4 = 0,
		full5 = 0,
		full6 = 0,
		full7 = 0;

	for (let i = 0; i < Parking_lot.length; i++) {
		if (1 <= parseInt(Parking_lot[i].parked_where) && parseInt(Parking_lot[i].parked_where) <= 13) {
			full1++;
		} else if (
			14 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 37
		) {
			full2++;
		} else if (
			38 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 64
		) {
			full3++;
		} else if (
			65 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 73
		) {
			full4++;
		} else if (
			74 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 94
		) {
			full5++;
		} else if (
			95 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 119
		) {
			full6++;
		} else if (
			120 <= parseInt(Parking_lot[i].parked_where) &&
			parseInt(Parking_lot[i].parked_where) <= 121
		) {
			full7++;
		}
	}

	let v1 = 13,
		v2 = 24,
		v3 = 27,
		v4 = 9,
		v5 = 21,
		v6 = 25,
		v7 = 2;

	v1 -= full1;
	v2 -= full2;
	v3 -= full3;
	v4 -= full4;
	v5 -= full5;
	v6 -= full6;
	v7 -= full7;

	let vall = 121 - Parking_lot.length;
</script>

<h2 id="title2" style="font-size: 24px;">แผนผังที่จอดในบริเวณโรงเรียน</h2>
<div style="display: flex; gap: 10%; justify-content: center; align-items: center; padding: 10px;">
	<img src="/map.svg" alt="School Map" style="width: 35%; display: block;" />
	<div>
		<div id="parkinfo">
			<div>อาคาร 1 (ที่จอดที่ 1-13)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v1}</span> ที่</div>

			<div>อาคาร 3 (ที่จอดที่ 14-37)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v2}</span> ที่</div>

			<div>อาคาร 5 (ที่จอดที่ 38-64)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v3}</span> ที่</div>

			<div>อาคาร 4 (ที่จอดที่ 65-73)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v4}</span> ที่</div>

			<div>อาคารการงาน/ลิกอ (ที่จอดที่ 74-94)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v5}</span> ที่</div>

			<div>อาคาร 6 (ที่จอดที่ 95-119)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v6}</span> ที่</div>

			<div>ที่จอดผู้พิการ (ที่จอดที่ 120-121)</div>
			<span />
			<div>ว่าง <span style="color: var(--tri)">{v7}</span> ที่</div>
		</div>
		<hr style="height: 3px; width: 110%;" />
		<div id="parkinfo" style="grid-template-rows: 1fr; grid-template-columns: 64.5% 12% 23.5%;">
			<div>ว่างทั้งหมด</div>
			<span />
			<div><span style="color: var(--tri)">{vall}</span> ที่</div>
		</div>
	</div>
</div>
