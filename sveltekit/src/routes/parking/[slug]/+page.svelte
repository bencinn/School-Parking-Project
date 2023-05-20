<script>
	export let data;
	let { Parking_lot } = data;
	$: ({ Parking_lot } = data);
	console.log(Parking_lot);
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
</script>

{#if Parking_lot.some((item) => item.parked_where == sluggish)}
	<!-- Implementing Log-out -->
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
					/>
					<select required name="position">
						<option value="นักเรียน" selected>นักเรียน</option>
						<option value="คุณครู">คุณครู</option>
						<option value="ผู้ปกครอง/แขก">ผู้ปกครอง/แขก</option>
					</select>
				</div>
				<div id="slotdisplay">
					<input type="text" name="slot" style="display: none;" />
					<h2 id="title2" style="font-size: 22px;">
						จอดรถช่องที่ <input
							type="text"
							name="whereis"
							readonly
							style="color: var(--tri)"
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
	<ul style="color: white">
		ที่จอดรถที่ใช้แล้ว
		{#each Parking_lot as parked}
			<li style="color: white">
				{parked.parked_where}
				<a data-sveltekit-reload href={'/parking/' + parked.parked_where}>(Park out)</a>
			</li>
		{/each}
	</ul>
{/if}
