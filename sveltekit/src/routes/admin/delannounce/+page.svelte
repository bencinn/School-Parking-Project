<script>
	import { FormatTime } from '$lib/formattime';
    import { enhance } from '$app/forms';
	export let data;
	let { Announce, slug } = data;
	$: ({ Announce, slug } = data);
	const sluggish = slug;

  	let isPreviewed = false;
	console.log(Announce);
    let username = "";
    let password = "";
</script>
<input type="email" bind:value={username}>
<input type="password" bind:value={password}>
<table id="admintable">
    <tr style="border-bottom: 3px solid white;">
        <td style="width: 5%; font-size: 14px">ยกเลิก<br>ประกาศ</td>
        <td style="width: 65%;">ข้อความ</td>
        <td style="width: 15%;">เริ่มประกาศ</td>
        <td style="width: 15%">หมดประกาศ</td>
    </tr>	
    {#each Announce as announce}
        <tr>
            <td>
                <div style="display: flex; justify-content: center; align-items: center;">
                    {announce.id}<form action="?/delann" method="POST" use:enhance={ async ({data}) => {
                        data.append("id", announce.id);
                        data.append("email", username);
                        data.append("password", password);
                      }}><button type="submit"></button></form>
                </div>
            </td>
            <td>
                <span style="color: white">
                    {announce.announcement}
                 </span>
            </td>
            <td>
                <div style="color: white; text-align: center;">
                    {FormatTime(announce.start_date).slice(0, 10)}
                </div>
            </td>
            <td>
                <div style="color: white; text-align: center;">
                    {FormatTime(announce.end_date).slice(0, 10)}
                </div>
            </td>
        </tr>
    {/each}
</table>
