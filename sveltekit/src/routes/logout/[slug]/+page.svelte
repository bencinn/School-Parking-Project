<script lang="ts">
	export let data;
	let { Parking_lot, slug, zones } = data;
	$: ({ Parking_lot, slug, zones } = data);
	const sluggish = slug;
	/** @type {import('./$types').ActionData} */
	export let form;

	let phone = '';

	function formatPhoneNumber(phonenumber) {
		if (!phonenumber) return phonenumber;
		let phoneNumber = phonenumber.replace(/[^\d^\b]/g, '');
		let numberLength = phonenumber.length;
		if (numberLength <= 3) return phoneNumber;
		if (numberLength <= 6) {
			return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
		}
			return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 9)}`;
	}

	function formatPhone() {
		let formatinp = formatPhoneNumber(phone);
		phone = formatinp;
	}

	function ParkArea(slot) {
		for (let i = 0; i < zones.length; i++) {
			if (slot >= zones[i].start && slot <= zones[i].end) {
				return zones[i].name;
			}
		}
		return "Error!";
	}
</script>

{#if Parking_lot.some((item) => item.parked_where == sluggish)}
	<form method="POST" autocomplete="off">
		<fieldset id="parkingform">
			<legend>ยืนยันการออกระบบ</legend>
			<p id="info" style="line-height: 28px;">
				กรุณากรอกหมายเลขโทรศัพท์ของท่าน เพื่อใช้ในการยืนยันตัวตนของท่านก่อนออกจากระบบ เมื่อเสร็จแล้ว
				กรุณากดปุ่ม "ยืนยันการออกจากที่จอดรถ"
			</p>
			<div id="addinp">
				<div>
					<input
						type="text"
						name="tel"
						placeholder="โทรศัพท์ (0XX-XXX-XXXX)"
						pattern="[0-9]&#123;3&#125;-[0-9]&#123;3&#125;-[0-9]&#123;4&#125;"
						id="tellogout"
						style="margin-left: 5px; color: crimson;"
						required
						bind:value={phone}
						on:keydown={formatPhone}
					/>
				</div>
				<div id="slotdisplay">
					<h2 id="title2" style="margin: 0; gap: 10px; font-size: 22px;">
						<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style="fill: var(--tri)">
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
						</svg>
						<input
							type="text"
							name="whereis"
							readonly
							style="color: var(--sec)"
							value={sluggish}
						/>
					</h2>
					<h2 style="color: white; margin: 0;">
						บริเวณ: <span style="color: var(--tri);">{ParkArea(sluggish)}</span>
					</h2>
				</div>
			</div>
		</fieldset>
		<div style="display: flex; justify-content: center;">
			<input type="submit" id="logoutbtn" value="ยืนยันการออกจากที่จอดรถ" />
		</div>
	</form>
{:else if form?.success}
	<h2
		style="color: limegreen !important; text-align: center; font-size: 24px; margin-bottom: 10px;"
	>
		ออกจากระบบสำเร็จ
	</h2>
	<p id="info">
		ท่านได้ออกจากระบบอย่างสำเร็จแล้ว ท่านสามารถปิดหน้านี้ได้เลย
		ขอบคุณที่มาเยี่ยมชมโรงเรียนภูเก็ตวิทยาลัยและขอให้เดินทางอย่างสวัสดิภาพ
	</p>
{:else}
	<h2 style="color: crimson !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
		ช่องจอดรถช่องนี้ยังไม่มีผู้จอด
	</h2>
	<fieldset>
		<legend>ช่องจอดรถช่องนี้ยังไม่มีผู้จอด</legend>
		<p id="info">
			ช่องจอดรถช่องนี้ยังไม่มีผู้จอด หากท่านต้องการจอดรถของท่านในช่องจอดรถนี้ 
			กรุณากดปุ่ม "เข้าจอดช่องจอดรถช่องนี้" เพื่อดำเนินการเข้าสู่ระบบ
		</p>
		<div id="slotdisplay">
			<h2 id="title2" style="margin: 0; gap: 10px;">
				<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style="fill: var(--tri)">
					<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
				</svg>
				<input
					type="text"
					name="whereis"
					readonly
					style="color: var(--sec)"
					value={sluggish}
				/>
			</h2>
			<h2 style="color: white; margin: 0;">
				บริเวณ: <span style="color: var(--tri);">{ParkArea(sluggish)}</span>
			</h2>
		</div>
	</fieldset>
	<div style="display: flex; justify-content: center;">
		<a id="btn" href={'/parking/' + sluggish}>เข้าจอดช่องจอดรถช่องนี้</a>
	</div>
{/if}
