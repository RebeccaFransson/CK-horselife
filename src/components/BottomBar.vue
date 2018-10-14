<template>
  <div class="not-fixed-min fixed-bottom bottom-25 p-top-20 bg-lightBlue ">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <span class="badge badge-secondary-2">Mail</span>
          <p class="m-3">
            <a class="link" href="mailto:ckhorselife@gmail.com" target="_top">
              ckhorselife@gmail.com
            </a>
          </p>
        </div>
        <div class="col-sm">
          <span class="badge badge-secondary-2">Mobilnummer</span>
          <p class="m-3">
            <a class="link" href="tel:+46730284544">0730-28 45 44</a>
            </p>
        </div>
        <div class="col-sm">
          <span class="badge badge-secondary-2">Adress</span>
          <p class="m-3">Liebacksvägen, 231 93 Trelleborg</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bottom-25{
  bottom: 25px !important;
}
.p-top-20{
  padding: 20px;
}
.bg-lightBlue{
  background-color: #d9ebf5;
}
.badge-secondary-2{
  color: #fff;
  background-color: #99c6de;
}
.link{
  color: #03a9f4;
}

/* Small screens */
@media only screen and (max-width: 650px) and (min-device-width: 768px) {
  .not-fixed-min {
    position: relative !important;
    margin-top: 50px;
  }
 
}

/* Mobile devices */
@media only screen and (max-device-width: 768px) {
  .not-fixed-min {
    position: relative !important;
    margin-top: none !important;
  }
 
}
</style>
