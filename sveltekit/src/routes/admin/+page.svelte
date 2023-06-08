<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;

  	let isPreviewed = false;

	function convertTZ(date) {
		let inp = new Date((typeof date === "string" ? new Date(date) : date).toISOString().toLocaleString("th-TH", {timeZone: 'Asia/Jakarta'}))
		let tzdate = new Date(inp);

		let day = tzdate.getDate();
		let month = tzdate.getMonth() + 1;
		let year = tzdate.getFullYear();
		let hours = tzdate.getHours();
		let minutes = tzdate.getMinutes();
		let seconds = tzdate.getSeconds();

		let formattedDay = String(day).padStart(2, "0");
		let formattedMonth = String(month).padStart(2, "0");
		let formattedHours = String(hours).padStart(2, "0");
		let formattedMinutes = String(minutes).padStart(2, "0");
		let formattedSeconds = String(seconds).padStart(2, "0");

		let formattedDate = `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    	return formattedDate;   
	}
</script>

<h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
	แผงควบคุมที่จอดรถ
</h2>
<fieldset style="margin-top: 10px;">
	<legend>ข้อมูลผู้จอดรถ</legend>

	{#if Parking_lot.length == 0}
		<h2 style="color: crimson !important; text-align: center; font-size: 22px; margin-bottom: 10px;">
			ไม่มีรถจอดในที่จอดรถ
		</h2>
	{:else}
		<form method="POST" id="flgout">
			<table id="admintable">
				<tr style="border-bottom: 3px solid white;">
					<td style="width: 5%;">ออก<br>ระบบ</td>
					<td style="width: 3%;">ช่องที่</td>
					<td style="width: 8%;">คำนำ<br>หน้า</td>
					<td style="width: 11%">ตำแหน่ง</td>
					<td>ชื่อ</td>
					<td>สกุล</td>
					<td style="width: 16%;">โทรศัพท์</td>
					<td style="width: 22%;">เวลาเข้าจอด</td>
				</tr>	
				{#each Parking_lot as parked}
					<tr>
						<td>
							<div style="display: flex; justify-content: center; align-items: center;">
								<input type="checkbox" name="logout" value={parked.parked_where} />
							</div>
						</td>
						<td>
							<div style="color: white; text-align: center;">
								{parked.parked_where}
							</div>
						</td>
						<td>
							<span style="color: white">
								{parked.parker_handler}
							</span>
						</td>
						<td>
							<span style="color: white">
								{parked.position}
							</span>
						</td>
						<td>
							<span style="color: white">
								 {parked.parker_name}
							</span>
						</td>
						<td>
							<span style="color: white">
								{parked.parker_surname}
							</span>
						</td>
						<td>
							<span style="color: white">
								{parked.phone_number}
							</span>
						</td>
						<td>
							<span style="color: white">
								{convertTZ(parked.created_at)}
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

