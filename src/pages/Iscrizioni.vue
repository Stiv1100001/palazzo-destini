<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" url="/particles.json" />
  <section id="info" class="my-3">
    <div class="card-bg py-2 d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="col-12 col-md-10 col-lg-8 mx-auto py-4">
          <p>
            La partecipazione all’evento verrà eseguita tramite la compilazione di un modulo online in cui si potrà
            scegliere se partecipare come PG o PGOS, e allo stesso tempo verranno fornite tutte le informazioni per
            l’evento e note in cui potrete scrivere le vostre intolleranze alimentari ed esigenze particolari della
            vostra persona.
          </p>
          <p>
            La quota evento sarà di 10€, che comprendono la caparra, più 35€, che comprenderà tutti i pasti della
            giornata di gioco.
          </p>
          <p>
            Per avere il proprio posto assicurato, subito dopo aver compilato l’iscrizione all’evento, sarà necessario
            versare sul Paypal di “FulcronGRV” la caparra di 10€ ed inserire come messaggio il proprio nome e cognome, e
            il tipo di pagamento deve essere verso familiari e amici.
          </p>
          <p>
            Possono essere fatti anche più pagamenti con un solo paypal, l’importante è che vengano sempre inseriti
            tutti i nomi e cognomi delle persone paganti. Prima del 20 Aprile l’intera quota dovrà essere saldata sulla
            piattaforma paypal.
          </p>

          <p>
            Si ricorda a tutti i partecipanti che sarà obbligatorio esibire un GREEN PASS VALIDO la mattina del 23
            Aprile quando si entrerà alla villa nel momento della segreteria, e di munirsi ed indossare la mascherina
            quando saremo nei luoghi interni ed affollati.
          </p>

          <RouterButton to="/" text="Torna alla Home" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import RouterButton from '../components/RouterButton.vue';
</script>

<style>
.card-bg {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 70%,
    transparent 100%
  );
}
</style>
