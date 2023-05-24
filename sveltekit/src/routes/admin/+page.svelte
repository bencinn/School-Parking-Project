<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
</script>

<h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">แผงควบคุมที่จอดรถ</h2>
<fieldset style="margin-top: 10px;">
    <legend>ที่จอดรถที่ได้ถูกใช้แล้ว</legend>
    <ul style="color: white; margin: 0 0 10px 0; padding-left: 5px; list-style-type: none;">
        {#each Parking_lot as parked}
            <li style="color: white; margin-top: 10px;">
                ช่องจอดรถที่ {parked.parked_where}
                <a data-sveltekit-reload href={'/parking/' + parked.parked_where} id="btn" style="font-size: 15px; padding: 5px;">ออกจากระบบ</a>
            </li>
        {/each}
    </ul>
</fieldset>