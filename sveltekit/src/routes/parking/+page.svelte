<script>
let sluggish = 2
 let selected_handler = "นาย";
 let selected_name = '';
 let selected_surname = '';
 let selected_position = "นักเรียน";
	function handleSubmit() {
		alert(`${selected_handler}`);
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
    <fieldset id="parkingform">
        <legend>โปรดกรอกข้อมูลส่วนตัว</legend>
        <div id="nameinp">
            <select bind:value={selected_handler} required>
                <option value="นาย" selected>นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
                <option value="อื่นๆ/ไม่ระบุ">อื่นๆ/ไม่ระบุ</option>
            </select>
            <input type="text" bind:value={selected_name} placeholder="ชื่อผู้จอดรถ" required>
            <input type="text" bind:value={selected_surname} placeholder="นามสกุลผู้จอดรถ" required>
        </div>
        <div id="addinp">
            <div>
                <input type="text" name="phone" placeholder="โทรศัพท์ (0XX-XXX-XXXX)" pattern="[0-9]&#123;3&#125;-[0-9]&#123;3&#125;-[0-9]&#123;4&#125;" style="margin-left: 5px;">
                <select required bind:value={selected_position}>
                    <option value="นักเรียน" selected>นักเรียน</option>
                    <option value="คุณครู">คุณครู</option>
                    <option value="ผู้ปกครอง/แขก">ผู้ปกครอง/แขก</option>
                </select>
            </div>
            <div id="slotdisplay">
                <input type="text" name="slot" style="display: none;">
                <h2 id="title2" style="font-size: 22px;">จอดรถช่องที่ <span style='color: var(--tri)'>{sluggish}</span><!--PHP USED TO BE HERE---></h2>
            </div>
        </div>
    </fieldset>
    <div style="display: flex; justify-content: center;">
        <input type="submit" id="btn" value="ลงทะเบียนใช้ที่จอดรถ">
    </div>
</form>
