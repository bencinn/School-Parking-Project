<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;

	console.log(Parking_lot)
  let isPreviewed = false;
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
			<table id="admintable">
				<tr>
					<td style="width: 30px;">ออก<br>ระบบ</td>
					<td>ช่องที่</td>
					<td>คำนำหน้า</td>
					<td>ตำแหน่ง</td>
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
							<div style="color: white; text-align: center;">
								{parked.parked_where}
							</div>
						</td>
						<td>
							<span style="color: white">
								handler
							</span>
						</td>
						<td>
							<span style="color: white">
								position
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
								012-345-6789
							</span>
						</td>
					</tr>
				{/each}
			</table>
			<div style="display: flex; flex-direction: column">
				<div style="display: flex; justify-content: space-around; margin: 15px 0 15px 0;">
					<input type="email" name="email" placeholder="อีเมล" required/>
					<input id="passwordKey" type={isPreviewed ? "text" : "password"} name="password" placeholder="รหัสผ่าน" required/>
				</div>
				<div style="display: grid; grid-template-columns: 55% 2% 1% auto; margin: 5px 0px 10px 0px;">
					<div></div>
					<div><input type=checkbox on:click={() => isPreviewed = !isPreviewed}></div>
					<div></div>
					<div style="color: white;">แสดงรหัสผ่าน</div>
				</div>
			</div>
			<input type="submit" id="logoutbtn" value="บังคับออกจากที่จอดรถ" style="display: block; margin: auto;"/>
		</form>
	{/if}
</fieldset>

