<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
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
			<h2 id="title2" style="font-size: 20px;">
				ช่องจอดรถช่องที่ <input
					type="text"
					name="whereis"
					readonly
					style="color: var(--tri); padding-left: 15px; width: 30% !important;"
					value={sluggish}
				/><!--PHP USED TO BE HERE--->
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
					/>
					<select required name="position">
						<option value="นักเรียน" selected>นักเรียน</option>
						<option value="คุณครู">คุณครู</option>
						<option value="ผู้ปกครอง/แขก">ผู้ปกครอง/แขก</option>
					</select>
				</div>
				<div id="slotdisplay">
					<h2 id="title2" style="font-size: 20px;">
						ช่องจอดรถช่องที่ <input
							type="text"
							name="whereis"
							readonly
							value={sluggish}
						/><!--PHP USED TO BE HERE--->
					</h2>
				</div>
			</div>
		</fieldset>
		<div style="display: flex; justify-content: center;">
			<input type="submit" id="btn" value="ลงทะเบียนใช้ที่จอดรถ" />
		</div>
	</form>
{/if}
