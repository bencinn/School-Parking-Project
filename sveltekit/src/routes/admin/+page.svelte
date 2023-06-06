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
		<form method="POST" id="flgout">
			<table>
				<tr>
					<td></td>
					<td>ช่องที่</td>
					<td>ชื่อ</td>
					<td>สกุล</td>
					<td>โทร</td>
				</tr>
				{#each Parking_lot as parked}
					<tr>
						<td>
							<input type="checkbox" name="logout" value={parked.parked_where} />
						</td>
						<td>
							<span style="color: white;">
								{parked.parked_where}
							</span>
						</td>
						<td>
							<span style="color: white">
								name
							</span>
						</td>
						<td>
							<span style="color: white">
								surname
							</span>
						</td>
						<td>
							<span style="color: white">
								tel.
							</span>
						</td>
					</tr>
				{/each}
			</table>
			<div style="display: flex; flex-direction: column">
				<div style="display: flex; justify-content: space-around; margin: 15px 0 15px 0;">
					<input type="email" name="email" placeholder="E-mail" required/>
					<input type="password" name="password" placeholder="Password" required/>
				</div>
				<div style="display: grid; grid-template-columns: 55% 1% 2% 33%; margin: 5px 0px 10px 0px;">
					<div></div>
					<div><input type="checkbox"></div>
					<div></div>
					<div>แสดงรหัสผ่าน</div>
				</div>
			</div>
			<input type="submit" id="logoutbtn" value="บังคับออกจากที่จอดรถ" style="display: block; margin: auto;"/>
		</form>
	{/if}
</fieldset>

