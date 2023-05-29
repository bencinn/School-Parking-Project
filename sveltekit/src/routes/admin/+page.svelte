<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
</script>

<h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
	แผงควบคุมที่จอดรถ
</h2>
<fieldset style="margin-top: 10px;">
	<legend>ที่จอดรถที่ได้ถูกใช้แล้ว</legend>

	{#if Parking_lot.length == 0}
		<h2 style="color: crimson !important; text-align: center; font-size: 22px; margin-bottom: 10px;">
			ไม่มีรถจอดในที่จอดรถ
		</h2>
	{:else}
		<ul style="color: white; margin: 0 0 10px 0; padding-left: 5px; list-style-type: none;">
			<form method="POST" id="flgout">
				{#each Parking_lot as parked}
					<li>
						<input type="checkbox" name="logout" value={parked.parked_where} />
						<label for={parked.parked_where} style="color: white;">
							ช่องจอดรถที่ {parked.parked_where}
						</label>
					</li>
				{/each}
				<div style="display: flex; justify-content: space-around; margin: 15px 0 15px 0;">
					<input type="email" name="email" placeholder="E-mail" required/>
					<input type="password" name="password" placeholder="Password" required/>
				</div>
				<input type="submit" id="logoutbtn" value="บังคับออกจากที่จอดรถ" style="display: block; margin: auto;"/>
			</form>
		</ul>
	{/if}
</fieldset>

