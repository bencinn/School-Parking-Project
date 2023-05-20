<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

{#if Parking_lot.some((item) => item.parked_where == sluggish)}
	<form method="POST">
		<fieldset id="parkingform">
			<div id="addinp">
				<div>
					<input
						type="text"
						name="tel"
						placeholder="โทรศัพท์ (0XX-XXX-XXXX)"
						pattern="[0-9]&#123;3&#125;-[0-9]&#123;3&#125;-[0-9]&#123;4&#125;"
						style="margin-left: 5px;"
					/>
				</div>
				<div id="slotdisplay">
					<h2 id="title2" style="font-size: 22px;">
						จอดรถช่องที่ <input
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
			<input type="submit" id="btn" value="ลงทะเบียนใช้ที่จอดรถ" />
		</div>
	</form>
{:else if form?.success}
	<span style="color: white">success</span>
{:else}
	<span style="color: white !important;">This parking lot has not been parked yet.</span>
{/if}
