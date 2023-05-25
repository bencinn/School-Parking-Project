<script>
	export let data;
	let { Parking_lot, slug } = data;
	$: ({ Parking_lot, slug } = data);
	const sluggish = slug;

    let GrantAccess = false;
</script>

{#if Parking_lot.length > 0 && GrantAccess === true}
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
{:else if Parking_lot.length == 0 && GrantAccess === true}
    <h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
        แผงควบคุมที่จอดรถ
    </h2>
    <fieldset style="margin-top: 10px; padding: 10px;">
        <legend>ที่จอดรถที่ได้ถูกใช้แล้ว</legend>
        <h2 style="color: crimson !important; text-align: center; font-size: 22px; margin-bottom: 10px;">ไม่มีรถจอดในที่จอดรถ</h2>
    </fieldset>
{:else if GrantAccess === false}
    <h2 style="color: white !important; text-align: center; font-size: 24px; margin-bottom: 10px;">
        เข้าสู่แผงควบคุมระบบ
    </h2>
    <form method="post" autocomplete="off">
        <fieldset style="margin-top: 10px; padding: 10px;">
            <legend>เข้าสู่แผงควบคุมระบบ</legend>
            <div id="adminlogin">
                <span style="color: white; font-size: 20px; text-align: right;">อีเมล</span>
                <input type="email" name="email" required placeholder="อีเมล"/>
                <span style="color: white; font-size: 20px; text-align: right;">รหัสผ่าน</span>
                <input type="password" name="password" required placeholder="รหัสผ่าน"/>
            </div>
        </fieldset>
        <div style="display: flex; justify-content: center;">
            <input type="submit" id="btn" value="เข้าสู่แผงควบคุม" />
        </div>
    </form> 
{/if}
