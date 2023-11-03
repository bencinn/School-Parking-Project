<script>
	export let data;
	let { Parking_lot, slug, zones } = data;
	$: ({ Parking_lot, slug, zones } = data);
	const sluggish = slug;

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
	<h2 style="color: crimson !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
		ช่องจอดรถช่องนี้ไม่ว่าง
	</h2>
	<p id="info" style="line-height: 28px;">
		ขออภัย ช่องจอดรถช่องนี้ได้มีผู้จอดแล้ว กรุณาเลือกช่องจอดรถอื่นๆ ที่ยังว่างอยู่
		ท่านสามารถดูจำนวนที่จอดที่เหลือในบริเวณโรงเรียนได้<a href="../" id="plainlink">ที่นี่</a>
		หรือหากผู้ใช้ท่านก่อนหน้าลืมออกจากระบบ กรุณาแจ้งผู้ดูแลระบบได้<a
			href="mailto:smt36410@pkw.ac.th"
			id="plainlink">ที่นี่</a
		>
	</p>
	<fieldset>
		<legend>ออกจากระบบ</legend>
		<p id="info">
			สำหรับท่านที่เป็นผู้จอดรถในช่องจอดรถนี้
			หากท่านเสร็จธุระของท่านและต้องการจะออกจากช่องจอดรถช่องนี้แล้ว กรุณากดปุ่ม "ออกจากระบบ"
			เพื่อทำการออกระบบและเปิดช่องจอดรถให้ผู้ใช้ที่จอดรถท่าน<wbr />อื่นๆ
			ได้มาใช้ช่องจอดรถนี้ต่อจากท่าน
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
					style="color: var(--sec); padding-left: 15px; width: 30% !important;"
					value={sluggish}
				/>
			</h2>
			<h2 style="color: white; margin: 0;">
				บริเวณ: <span style="color: var(--tri);">{ParkArea(sluggish)}</span>
			</h2>
		</div>
		<div style="display: flex; justify-content: center;">
			<a href={'/logout/' + sluggish} id="logoutbtn">ออกจากระบบ</a>
		</div>
	</fieldset>
{:else}
	<form method="POST">
		<fieldset id="parkingform">
			<legend>โปรดกรอกข้อมูลส่วนตัว</legend>
			<div id="nameinp">
				<select name="handler" required>
					<option value="นาย" selected>นาย</option>
					<option value="นาง">นาง</option>
					<option value="นางสาว">นางสาว</option>
					<option value="อื่นๆ/ไม่ระบุ">อื่นๆ/ไม่ระบุ</option>
				</select>
				<input type="text" name="name" placeholder="ชื่อผู้จอดรถ" required />
				<input type="text" name="surname" placeholder="นามสกุลผู้จอดรถ" required />
			</div>
			<div id="addinp">
				<div>
					<input
						type="text"
						name="phone"
						placeholder="โทรศัพท์ (0XX-XXX-XXXX)"
						pattern="[0-9]&#123;3&#125;-[0-9]&#123;3&#125;-[0-9]&#123;4&#125;"
						style="margin-left: 5px;"
						required
						bind:value={phone}
						on:keydown={formatPhone}
					/>
					<select required name="position">
						<option value="นักเรียน" selected>นักเรียน</option>
						<option value="คุณครู">คุณครู</option>
						<option value="ผู้ปกครอง/แขก">ผู้ปกครอง/แขก</option>
					</select>
				</div>
				<div id="slotdisplay">
					<h2 id="title2" style="margin: 0; gap: 10px;">
						<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512" style="fill: var(--tri)">
							<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM192 256h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H192v64zm48 64H192v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V288 168c0-22.1 17.9-40 40-40h72c53 0 96 43 96 96s-43 96-96 96z"/>
						</svg>
						<input
							type="text"
							name="whereis"
							readonly
							value={sluggish}
						/>
					</h2>
					<h2 style="color: white; margin: 0;">
						บริเวณ: <span style="color: var(--tri);">{ParkArea(sluggish)}</span>
					</h2>
				</div>
			</div>
			{#if (phone != "")}
				<div style="color: white; align-self: flex-start; margin-left: 8px; font-style: italic;">หมายเลขโทรศัพท์ (0XX-XXX-XXXX)</div>
			{/if}
		</fieldset>
		<div style="display: flex; justify-content: center;">
			<input type="submit" id="btn" value="ลงทะเบียนใช้ที่จอดรถ" />
		</div>
	</form>
{/if}
