<template>
    <div id="inackoderingar">

        <div class="text">
            <p>Vi har ett antal boxplatser som vi hyr ut till Inackorderingar.</p>

            Hos oss ingår fri tillgång till halm samt 10kg ensilage.
            <br>
            Vi släpper ut och tar in varje dag. På vinterhalvåret är de oftast ute mellan 09:00-ca:14:00 och om man vill ha ute dem längre på sommarhalvåret så är det inga problem och då får de lunch i hagen.
            <br>
            Vi morgonfodrar och lunchfodrar alla dagar i veckan. Kvällsfodringen delar vi på och blir ca 4-5 gånger per månad per person.
            <br>
            Man har tillgång till anläggningen och alla faciliteter. Det är bra tillgång till ridhuset då detta oftast endast är bokat ett par timmar om dagen.
            <br>
            Vi utför det mesta mot betalning om man vill vara ledig eller är sjuk.
            <br>
            <p>Boxplats 3300kr/mån för 9kvm<p>

            <h4>Vi utför även</h4>
            <ul>
                <li>Mockning samt fixa foder 50kr/gång eller 1100kr/mån för fullservice.</li>
                <li>Longering/tömkörning av häst 30min 300kr</li>
                    täckesbyten, benlindor av, skydd på och av i hagen 200kr/mån</li>
                <li>Extra hö 90kr/mån för varje extra kilo hö (30kg=90kr)</li>
                <li>Vi har en kallhyra på 1500kr/mån och en uppsägningstid på 2 månader</li>
            </ul>
            Hos oss är det en mycket trevlig stallstämning. Vi hjälps åt att hålla snyggt och rent och har trevliga träffar med fika och stallsnack. Kom gärna och titta!
        </div>

        <img src="../../../static/föl.jpg" alt="Smiley face">

    </div>
</template>

<script>
export default {
  name: 'Inackodering',
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>


<style>
#inackoderingar{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;

    text-align: left;
}
#inackoderingar img {
    width: 30%;
    margin: 20px;
    border: 2px solid #5b4637;
}
#inackoderingar .text{
    width: 30%;
    margin: 20px;
}
</style>
