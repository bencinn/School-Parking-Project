<script>
    export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;

    let full1 = 0, full2 = 0, full3 = 0, full4 = 0, full5 = 0, full6 = 0, full7 = 0;

    for(let i = 0; i < Parking_lot.length; i++) {
        if (1 <= parseInt(Parking_lot[i].parked_where) <= 13) {
            full1 ++;
            console.log( Parking_lot[i].parked_where)
        } else if (14 <= Parking_lot[i].parked_where <= 27) {
            full2 ++;
        } else if (28 <= Parking_lot[i].parked_where <= 64) {
            full3 ++;
        } else if (65 <= Parking_lot[i].parked_where <= 73) {
            full4 ++;
        } else if (74 <= Parking_lot[i].parked_where <= 94) {
            full5 ++;
        } else if (95 <= Parking_lot[i].parked_where <= 108) {
            full6 ++;
        } else if (109 <= Parking_lot[i].parked_where <= 110) {
            full7 ++;
        }

        console.log("Full1 " + full1);
        console.log("Full2 " + full2);
        console.log(Parking_lot[i].parked_where)
    };


    
</script>


<h2 id="title2" style="font-size: 24px;">แผนผังที่จอดในบริเวณโรงเรียน</h2>
<div style="display: flex; flex-direction: row; gap: 5%; justify-content: center; padding: 10px;">
    <img src="/map.svg" alt="School Map" style="width: 40%;">
    <div id="parkinfo">
        <div>อาคาร 1 (ที่จอดที่ 1-13)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>อาคาร 3 (ที่จอดที่ 14-27)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>อาคาร 5 (ที่จอดที่ 28-64)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>อาคาร 4 (ที่จอดที่ 65-73)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>อาคารการงาน/ลิกอ (ที่จอดที่ 74-94)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>อาคาร 6 (ที่จอดที่ 95-108)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>

        <div>ที่จอดพิเศษ (ที่จอดที่ 109-110)</div>
        <span></span>
        <div>ว่าง <span>0</span> ที่</div>
    </div>
</div>

