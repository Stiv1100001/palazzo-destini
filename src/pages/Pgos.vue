<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" url="/particles.json" />
  <div class="container mt-3">
    <div class="d-flex align-items-center justify-content-around">
      <div class="misterius">
        <RouterButton to="/" text="Home" class="" />
      </div>
      <div class="flex-grow-1">
        <h1 class="text-center text-white my-4 py-3 display-1 cardinal">PGOS</h1>
      </div>
      <div class="">
        <RouterButton to="/iscrizioni" text="Iscriviti" class="" />
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6">
        <p class="text-white text-center fs-5 misterius">
          Scorre, il filo del fato. <br />
          Veloce si dipana dalla matassa. <br />Corre attraverso i segreti del Tempo, mentre il Caso ridendo lo
          accompagna.<br />
          Insieme, formano quella cosa che noi mortali chiamiamo Destino. <br />Hai molte domande? Allora addentrati e i
          tuoi dubbi saranno svelati, <br />Benvenuto nel Palazzo dei Destini Incrociati.
        </p>
      </div>
    </div>

    <div class="border-bottom border-2 border-white my-3 w-25 mx-auto"></div>

    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6 text-white text-center fs-5 misterius">
        <p>
          Cos'è, alla fine, una maschera? <br />
          Cartapesta e vernice che, sul tuo volto, creano qualcosa di magnifico o di spaventoso?<br />
          Al ballo c'era un uomo con una maschera da lupo e una donna con la maschera da agnello.<br />
          Non ti racconto il finale.<br />
          Ma sotto alla maschera cosa troviamo?<br />
          Pelle e parole che, sul tuo volto, creano qualcosa di magnifico o di spaventoso?<br />
          Al ballo c'era un uomo senza una maschera, con occhi da lupo, e una ragazza con occhi birbanti.<br />
          Non ti racconto il finale.<br />
          Cosa c'è sotto la cartapesta, sotto la pelle?<br />
          Siamo altro oltre alle nostre menzogne?<br />
          Sono domande cui non conosco risposta.<br />
          Cercala tu, se lo desideri. Ma attenzione: quando provi a strappare una maschera, i lacci che tengono stretta
          la tua improvvisamente si fanno più lenti.<br />
        </p>
      </div>
    </div>

    <div class="border-bottom border-2 border-white my-3 w-25 mx-auto"></div>

    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6 text-white text-center fs-5 misterius">
        <p>
          Post Scriptum Mi dicono che quell'uomo abbia pianto a lungo, quella notte, mentre la ragazza fuggiva. Lui
          rimase nudo sotto la maschera, lei ne trovò una nuova. O forse lei altro non aveva che il suo volto. Chi può
          dirlo?
        </p>
      </div>
    </div>

    <div class="border-bottom border-2 border-white my-3 w-25 mx-auto"></div>

    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6 text-white text-center fs-5 misterius">
        <p>
          Negli eventi di campagna della “sinfonia dei sette” di Fulcron GRV, è possibile scegliere se partecipare come
          Personaggio Giocante (PG) o come Personaggio Giocante One Shot (PGOS). <br />
          Quest’ultimo, una volta completata l’iscrizione potrai scegliere uno fra i tanti protagonisti di questo evento
          selezionando uno dei Teaser. <br />
          Il Teaser identifica le caratteristiche chiave ed i concetti fondamentali che rendono unico quel personaggio.
          <br />
          In vicinanza dell’evento ti verrà consegnata tramite mail anche la Scheda Personaggio completa di numerosi
          spunti di gioco, come segreti, relazioni, intrighi e molto altro. <br />
          Si tratta di una “carta d’identità” di partenza che ha lo scopo di darti spunti interessanti per giocare e
          caratterizzare al meglio il tuo personaggio, non un copione da seguire. <br />
          Ricordati che sarai tu a raccontare la storia del tuo personaggio...insieme agli altri partecipanti!<br />
        </p>
      </div>
    </div>

    <div class="border-bottom border-2 border-white my-3 w-25 mx-auto"></div>

    <div class="row justify-content-center">
      <div class="col-10 col-md-8 col-lg-6 text-white text-center fs-5 misterius">
        <p>
          Di seguito troverai i 13 Teaser personaggio con alcune notazioni<br /><br />
          Adatto a tutti <br />
          Violenza: il personaggio potrebbe prendere parte a scene di contenuto violento<br />
          Delicato: il personaggio potrebbe prendere parte a scene di contenuto violento e di carattere sessuale,
          ovviamente entre certi limiti e regolato dalle safeword<br />
          <br />
          Inoltre abbiamo aggiunto una caratteristica che possa aiutarti sia con il costume che con l’idea che è dietro
          al personaggio, come nobildonna o cavalleresco.
        </p>
      </div>
    </div>

    <div class="border-bottom border-2 border-white my-3 w-25 mx-auto"></div>

    <div class="row row-cols-2 row-cols-md-3 gy-3 justify-content-center mb-4">
      <div class="col" v-for="index in 13" :key="index">
        <Tarot :up="`${index}.png`" :down="`${index}.png`"></Tarot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tarot from '../components/Tarot.vue';
import RouterButton from '../components/RouterButton.vue';
</script>

<style scoped>
.test {
  height: 200px;
}
</style>
