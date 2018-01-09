<template>
    <div id="inackodering" class="popup">

        <div class="text">
            <p>Vi har ett antal boxplatser som vi hyr ut till Inackorderingar.</p>

            Hos oss ingår fri tillgång till halm samt 10kg ensilage.
            <br>
            Vi släpper ut och tar in varje dag. På vinterhalvåret är de oftast ute mellan 09:00-ca:14:00 och om man vill ha ute dem längre på sommarhalvåret så är det inga problem och då får de lunch i hagen.
            <br>
            Vi morgonfodrar och lunchfodrar alla dagar i veckan. Kvällsfodringen delar vi på och blir ca 3-4 gånger per månad per person.
            <br>
            Man har tillgång till anläggningen och alla faciliteter. Det är bra tillgång till ridhuset då detta oftast endast är bokat ett par timmar om dagen.
            <br>
            Vi utför det mesta mot betalning om man vill vara ledig eller är sjuk.
            <br>
            <p class="orange box">Boxplats 3300kr/mån för 9kvm<p>

            <h4>Vi utför även</h4>
            <ul>
                <li>Mockning samt fixa foder 50kr/gång eller 1100kr/mån för fullservice.</li>
                <li>Longering/tömkörning av häst 30min 300kr</li>
                    täckesbyten, benlindor av, skydd på och av i hagen 200kr/mån</li>
                <li>Extra hö 90kr/mån för varje extra kilo hö (30kg=90kr)</li>
                <li>Vi har en kallhyra på 1500kr/mån och en uppsägningstid på 2 månader</li>
            </ul>
            <p class="blue box">Hos oss är det en mycket trevlig stallstämning. 
                <br>
                Vi hjälps åt att hålla snyggt och rent och har trevliga träffar med fika och stallsnack.
                <br> 
                <b>Kom gärna och titta!</b>
            </p>
        </div>

        <img class="popupImg" src="/static/fol.jpg" alt="Smiley face">

    </div>
</template>

<script>
export default {
  name: 'Inackodering'
}
</script>


<style>

#inackodering .orange{
    background-color: #ffd3a4;
}
#inackodering .blue{
    background-color: #f0f8ff;
}
#inackodering .box{
    width: fit-content;
    padding: 10px 20px;
    border: 1px solid #452a1b;
}
#inackodering h4{
    margin: 0;
}
#inackodering ul{
    list-style-type: circle;
    margin: 0;
}
#inackodering li{
    padding: 10px 0;
    position: relative;
    right: 20px;
}
</style>
