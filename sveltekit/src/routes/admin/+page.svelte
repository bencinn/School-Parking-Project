<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;
</script>

{#if Parking_lot.length > 0}
    <h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
        แผงควบคุมที่จอดรถ
    </h2>
    <form method="POST" id="flgout">
        <p id="info">หากมีเหตุจำเป็นต้องให้ผู้จอดรถท่านใดออกจากที่จอด ให้เลือกเบอร์ที่จอดนั้นและกดปุ่ม "บังคับออกจากที่จอดรถ"</p>
        <fieldset style="margin-top: 10px; padding: 10px;">
            <legend>ที่จอดรถที่ได้ถูกใช้แล้ว</legend>
            <ul style="color: white; margin: 0 0 10px 0; padding-left: 5px; list-style-type: none;">
                {#each Parking_lot as parked}
                    <li>
                        <input type="checkbox" name="logout" value={parked.parked_where} />
                        <label for={parked.parked_where} style="color: white;">
                            ช่องจอดรถที่ <span style="color: var(--tri);">{parked.parked_where}</span>
                        </label>
                    </li>
                {/each}
            </ul>
        </fieldset>
        <div style="display: flex; justify-content: center;">
            <input type="submit" id="logoutbtn" value="บังคับออกจากที่จอดรถ" />
        </div>
    </form>
{:else}
    <h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
        แผงควบคุมที่จอดรถ
    </h2>
    <fieldset style="margin-top: 10px; padding: 10px;">
        <legend>ที่จอดรถที่ได้ถูกใช้แล้ว</legend>
        <h2 style="color: crimson !important; text-align: center; font-size: 22px; margin-bottom: 10px;">ไม่มีรถจอดในที่จอดรถ</h2>
    </fieldset>
{/if}
