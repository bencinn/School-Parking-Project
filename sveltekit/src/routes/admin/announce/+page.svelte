<script>
	export let data;
	let { Announce, slug } = data;
	$: ({ Announce, slug } = data);
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
	แผงการแจ้งประกาศ
</h2>
<fieldset style="margin-top: 10px;">
	<legend>ประกาศที่มีอยู่</legend>

	{#if Announce.length == 0}
		<h2 style="color: crimson !important; text-align: center; font-size: 22px; margin-bottom: 10px;">
			ไม่มีประกาศ
		</h2>
		<form style="display: flex; flex-direction: column" id="flgout">
			<div style="display: flex; justify-content: space-around; gap: 5px; margin: 15px 10px 15px 10px;">
				<textarea placeholder="ใส่ข้อความประกาศที่นี่" style="resize: none; flex: 3; border-radius: 5px; padding: 5px; font-size: 16px;"></textarea>
				<div style="display: flex; flex-direction: column; gap: 3px;">
					<div style="color: white;">วันที่เริ่มประกาศ</div>
					<input type="datetime-local" style="border-radius: 5px; padding: 5px;">
					<div style="color: white">วันที่หมดประกาศ</div>
					<input type="datetime-local" style="border-radius: 5px; padding: 5px;">
				</div>
			</div>
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
			<input type="submit" id="btn" value="สร้างประกาศ" style="display: block; margin: auto;"/>
		</form>
	{:else}
		<form method="POST" id="flgout">
			<table id="admintable">
				<tr style="border-bottom: 3px solid white;">
					<td style="width: 5%; font-size: 14px">ยกเลิก<br>ประกาศ</td>
					<td style="width: 15%;">เริ่มประกาศ</td>
					<td style="width: 65%;">ข้อความ</td>
					<td style="width: 15%">หมดประกาศ</td>
				</tr>	
				{#each Announce as announce}
					<tr>
						<td>
							<div style="display: flex; justify-content: center; align-items: center;">
								<input type="checkbox" name="unannounce"/>
							</div>
						</td>
						<td>
							<div style="color: white; text-align: center;">
								{announce.start_time}
							</div>
						</td>
						<td>
							<span style="color: white">
								{announce.message}
						 	</span>
						</td>
						<td>
							<span style="color: white">
								{announce.end_time}
							</span>
						</td>
					</tr>
				{/each}
			</table>
			<div>
				<div style="display: flex; justify-content: space-around; gap: 5px; margin: 15px 10px 15px 10px;">
					<textarea placeholder="ใส่ข้อความประกาศที่นี่" style="resize: none; flex: 3; border-radius: 5px; padding: 5px; font-size: 16px;"></textarea>
					<div style="display: flex; flex-direction: column; gap: 3px;">
						<div style="color: white;">วันที่เริ่มประกาศ</div>
						<input type="datetime-local" style="border-radius: 5px; padding: 5px;">
						<div style="color: white">วันที่หมดประกาศ</div>
						<input type="datetime-local" style="border-radius: 5px; padding: 5px;">
					</div>
				</div>
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
				<div style="display: flex; justify-content: space-around;">
					<input type="submit" id="btn" value="สร้างประกาศเพิ่ม"/>
					<input type="submit" id="logoutbtn" value="ยกเลิกประกาศ"/>
				</div>
			</div>
		</form>
	{/if}
</fieldset>

