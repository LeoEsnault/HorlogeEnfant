<template>
  <div ref="backGround" id="backGround">
    <h2 ref="timeText" class="time">{{ currentTime }}</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const backGround = ref(null);
const timeText = ref(null);
const currentTime = ref('');
let lastImage = ''; 

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2,'0');
  const minutes = now.getMinutes().toString().padStart(2,'0');
  const seconds = now.getSeconds().toString().padStart(2,'0');
  
  currentTime.value = `${hours}:${minutes}:${seconds}`;
  setTimeout(updateTime, 1000);
}

function changeImg() {
  if (!backGround.value || !timeText.value) return;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  let newImage = '';
  let bgColor = 'black'; // fond par défaut
  let textColor = 'white'; // texte par défaut

  if (hours >= 7 && (hours < 11 || (hours === 11 && minutes === 0))) {
    newImage = "/ReineNeigeJoue.jpeg";
    bgColor = "white";
    textColor = "black";
  } else if (hours >= 11 && (hours < 12 || (hours === 12 && minutes <= 30))) {
    newImage = "/reineNeigePetitDej.jpeg";
    bgColor = "white";
    textColor = "black";
  } else if (hours >= 12 && (hours < 13 || (hours === 13 && minutes <= 30))) {
    newImage = "/reineNeigeDort.jpeg";
  } else if (hours >= 13 && (hours < 17 || (hours === 17 && minutes === 0))) {
    newImage = "/ReineNeigeJoue.jpeg";
    bgColor = "white";
    textColor = "black";
  } else if (hours === 17 && minutes > 0 && hours < 18) {
    newImage = "/ReineNeigeBain.jpeg";
    bgColor = "white";
    textColor = "black";
  } else if ((hours === 18 && minutes > 0) || (hours === 19 && minutes <= 30)) {
    newImage = "/reineNeigePetitDej.jpeg";
    bgColor = "white";
    textColor = "black";
  } else if (hours >= 19 && minutes > 30) {
    newImage = "/reineNeigeDort.jpeg";
  }

  if (newImage && newImage !== lastImage) {
    backGround.value.style.backgroundImage = `url('${newImage}')`;
    lastImage = newImage;
  }

  backGround.value.style.backgroundColor = bgColor;
  timeText.value.style.color = textColor;

  setTimeout(changeImg, 1000);
}

onMounted(() => {
  updateTime();
  changeImg();
});
</script>

<style>
body {
  background-color: black;
}

#backGround {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto; /* on garde la taille originale de l'image */
  background-color: black;
  border: 0;
  padding: 0;
}

h2 {
  color: white;
  font-size: 5em;
  margin-top: 18vw;
  padding-left: 2vh;
}
</style>
