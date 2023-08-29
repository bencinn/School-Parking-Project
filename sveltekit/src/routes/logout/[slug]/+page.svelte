<script lang="ts">
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
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
					<h2 id="title2" style="font-size: 22px;">
						ช่องจอดรถช่องที่ <input
							type="text"
							name="whereis"
							readonly
							style="color: var(--tri)"
							value={sluggish}
						/>
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
		ไม่สามารถออกจากระบบได้
	</h2>
	<fieldset>
		<legend>ไม่สามารถออกจากช่องจอดรถช่องนี้ได้</legend>
		<p id="info">
			ช่องจอดรถช่องนี้ยังไม่มีผู้จอด ท่านจึงไม่สามารถทำการออกจากระบบได้
			หากท่านต้องการจอดรถของท่านในช่องจอดรถนี้ กรุณากดปุ่ม "เข้าจอดช่องจอดรถช่องนี้"
			เพื่อดำเนินการเข้าสู่ระบบ
		</p>
		<div id="slotdisplay">
			<h2 id="title2" style="font-size: 22px;">
				ช่องจอดรถช่องที่ <input
					type="text"
					name="whereis"
					readonly
					style="color: var(--tri)"
					value={sluggish}
				/>
			</h2>
		</div>
	</fieldset>
	<div style="display: flex; justify-content: center;">
		<a id="btn" href={'/parking/' + sluggish}>เข้าจอดช่องจอดรถช่องนี้</a>
	</div>
{/if}
