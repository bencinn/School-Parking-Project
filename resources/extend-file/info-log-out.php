            <div id="display">
                <fieldset>
                    <legend>เวลาในการจอดรถ</legend>
                    <div id="time">
                        <div>
                            <span id="title2" style="font-size: 25px;">เวลาที่เข้าจอด: </span>
                            <span id="parktime"></span>
                            <span id="title2" style="font-size: 25px;">เวลาขณะนี้: </span>
                            <span id="currenttime"></span>
                            <span id="title2" style="font-size: 25px;">ระยะเวลาที่จอดรถ: </span>
                            <span id="parkperiod"></span>
                        </div>
                        <div id="slotdisplay">
                            <h2 style="color: white;">จอดรถช่องที่ 
                                <span style='color: var(--tri)'><?php echo $slot?></span>
                            </h2>
                        </div>
                    </div>
                </fieldset>
                <fieldset style="margin-top: 10px;">
                    <legend>ข้อมูลส่วนตัว</legend>
                    <div id="info">
                        <div>
                            <div id="title2" style="font-size: 25px"><?php echo $pron?></div>
                            <div id="title2" style="font-size: 25px"><?php echo $fname?></div>
                            <div id="title2" style="font-size: 25px"><?php echo $lname?></div>
                        </div>
                        <div>
                            <div id="title2" style="font-size: 25px"><?php echo $phone?></div>
                            <div id="title2" style="font-size: 25px"><?php echo $position?></div>
                        </div>
                    </div>
                </fieldset>
                <form>
                    <div style="display: flex; justify-content: center;">
                        <input type="submit" id="btn" value="ลงทะเบียนออกจากจอดรถ">
                    </div>
                </form>
                <script src="./resources/js/parkingtime.js"></script>
            </div>